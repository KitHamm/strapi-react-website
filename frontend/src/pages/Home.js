import { useQuery } from "@apollo/client";
import { url } from "../App";
import { Link } from "react-router-dom";
import About from "./About";
import { scrollTop } from "../App";
import Loader from "../components/Loader";
import Error from "./Error";
import HomePortfolio from "../components/HomePortfolio";
import { IMAGES } from "../components/Queries";

export default function Home() {
    const { loading, error, data } = useQuery(IMAGES);
    if (loading) return <Loader />;
    if (error) return <Error />;
    var content = data.home.data.attributes.main.data.attributes;
    return (
        <>
            <div className="fade-in container">
                <div className="home-buffer"></div>
                <div className="row">
                    <div className="col-12 d-flex col-lg-3 home-center">
                        <div className="col-10 offset-1 col-lg-8 offset-lg-2">
                            <h1>Hello!</h1>
                            <hr className="home-line" />
                            <h2 className="mt-5">
                                I'm <span className="green">Kit</span>.
                            </h2>
                            <h4>Web Developer</h4>
                            <h4>Digital Artist</h4>
                            <h4>Music Producer</h4>
                            <h4>Video Editor</h4>
                            <p className="green">I Make Things!</p>
                            <Link
                                onClick={scrollTop}
                                to="/about"
                                className="mb-2 btn btn-green d-block ">
                                Who am i?
                            </Link>
                            <Link
                                onClick={scrollTop}
                                to="/portfolio"
                                className="btn btn-green d-block ">
                                My Work
                            </Link>
                        </div>
                    </div>
                    <div className="d-none d-lg-flex col-lg-9 home-center">
                        <img
                            alt={content.name}
                            src={url + content.url}
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="home-container mb-neg-4">
                    <About />
                </div>
                <div className="home-container">
                    <HomePortfolio />
                </div>
            </div>
        </>
    );
}
