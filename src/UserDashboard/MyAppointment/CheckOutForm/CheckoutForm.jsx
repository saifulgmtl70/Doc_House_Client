import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Components/Hooks/useAuth";
import { useNavigate } from "react-router-dom";
// import useAppointment from "../../../Components/Hooks/useAppointment";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure();
    // const [appointment] = useAppointment();
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate()

    const {user} = useAuth();


    const { data: appointments = [], refetch} = useQuery({
        queryKey: ['appointments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/appointments?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    });


    useEffect(() => {
        // Calculate total price when appointments data changes
        const calculateTotalPrice = () => {
            let total = 0;
            appointments.forEach((appointment) => {
                total += parseInt(appointment.servicePrice) || 0;
            });
            setTotalPrice(total);
        };
        calculateTotalPrice();
    }, [appointments]);



    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }

    }, [axiosSecure, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            toast.error(error.message,{
                position: "top-center",
                autoClose: 2000, // এক সেকেন্ডের মধ্যে বন্ধ হবে

            });

        }
        else {
            console.log('payment method', paymentMethod);
            // toast.success("Payment Succesfull",{
            //     position: "top-center",
            //     autoClose: 2000, // এক সেকেন্ডের মধ্যে বন্ধ হবে

            // });

        }


        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error', confirmError);
            toast.error(confirmError.message,{
                position: "top-center",
                autoClose: 2000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
            });
        }
        else{
            console.log('Payment Intent Successfull', paymentIntent);
            if(paymentIntent.status === "succeeded"){
                // toast.success(`Payment Intent Successful`,{
                //     position: "top-center",
                //     autoClose: 2000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
                // });
                console.log("Transaction Id", paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    appointmentID: appointments.map((item => item._id)),
                    status: 'Paid'
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    toast.success(`Payment Intent Successful`,{
                        position: "top-center",
                        autoClose: 2000, // এক সেকেন্ডের মধ্যে বন্ধ হবে
                        onClose: () =>  navigate('/userdashboard/myhistory')
                    });
                }

            }
            
        }

    };

    return (
        <div>
            <ToastContainer/>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="flex flex-col w-full lg:w-9/12 mb-4">
                    <label htmlFor="cardNumber" className="mb-2 flex items-center justify-between"><span>Card Number</span> <span>MM/YY/CVC</span></label>
                    <div style={{ padding: '12px 4px', border: '1px solid #ccc', backgroundColor: '#fff', borderRadius: '4px' }}>
                        <CardElement
                            id="cardNumber"
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                        border: 'none', // Remove border from CardElement
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
                
                <button type="submit" className="bg-[#3f7eb3] px-10 py-3 mt-5 rounded-sm text-white w-full lg:w-9/12" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
