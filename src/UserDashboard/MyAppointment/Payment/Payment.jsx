import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckOutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <section className="px-12 my-20 py-12">
            <h2 className="text-[22px] text-[#000000] font-extrabold mb-16 ">Please Pay</h2>

            <div>
                <Elements stripe={stripePromise} >
                    <CheckoutForm/>
                </Elements>
            </div>

        </section>
    );
};

export default Payment;