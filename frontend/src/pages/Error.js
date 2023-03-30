import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="container fade-in">
                <div className="row">
                    <div className="col-12 splash project col-lg-8 offset-lg-2 intro">
                        <div className="col-12">
                            <h1>Oops!</h1>
                            <hr className="home-line" />
                            <h4>It looks like something went wrong.</h4>
                            <p>Let's get you home...</p>
                            <Link
                                className="btn position-right btn-green"
                                to="/">
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Error;
