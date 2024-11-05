import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Not Found</h2>
            <Link to={"/"}><button className="btn btn-secondary">Secondary</button></Link>
        </div>
    );
};

export default ErrorPage;