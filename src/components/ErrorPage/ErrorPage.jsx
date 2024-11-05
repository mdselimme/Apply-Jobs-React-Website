import { Link } from "react-router-dom";
import "./ErrorPage.css";
import { IoHome } from "react-icons/io5";

const ErrorPage = () => {
    return (
        <div className="error-page flex items-center justify-center">
            <div>
                <div className="w-[31.25rem] h-[31.25rem] bg-white mx-auto rounded-xl flex items-center justify-center flex-col">
                    <h1 className="text-9xl font-extrabold text-center active">404</h1>
                    <h3 className="text-3xl my-4 font-bold">Opps ! Page Not Found</h3>
                    <Link to={"/"} className="flex items-center bg-common rounded-lg text-lg my-4"><IoHome className="mr-2" /> Return Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;