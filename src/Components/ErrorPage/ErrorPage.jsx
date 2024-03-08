import { Link } from "react-router-dom";


const ErrorPage = () => {

    

    return (
 

            <div className="grid h-screen px-4 py-8 bg-white place-content-center">
                <div className="text-center py-12">
                    
                    <img src="https://i.ibb.co/2yC7DDV/404-error-page-not-found.gif" className="w-11/12  mx-auto" />

                    <Link to="/">
                        <button className="px-12 py-3 w-full rounded-sm bg-[#5AB9C1] my-5 text-white">Back to Home</button>
                    </Link>
                    
                </div>
            </div>
    );
};

export default ErrorPage;