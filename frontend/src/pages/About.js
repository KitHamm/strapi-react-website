import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Error from "./Error";
import Loader from "../components/Loader";
import { url } from "../App";
import { scrollTop } from "../App";
import { ABOUT } from "../components/Queries";

export default function About() {
    const { loading, error, data } = useQuery(ABOUT);
    if (loading) return <Loader />;
    if (error) return <Error />;
    var content = data.about.data.attributes;
    var image = data.about.data.attributes.image.data.attributes;
    return (
        <>
            <div className="fade-in container">
                <div id="about" className="row mt-5">
                    <div className="about-img-container z-0 p-0 v-center col-12 col-lg-5 offset-lg-1">
                        <img
                            className="about-img img-fluid slide-left"
                            alt={image.name}
                            src={url + image.url}
                        />
                    </div>
                    <div className="about col-12 col-lg-6">
                        <div className="col-12">
                            <h1>Who am i?</h1>
                            <hr className="home-line" />
                        </div>
                        <ReactMarkdown>{content.copy}</ReactMarkdown>
                        <Link
                            onClick={scrollTop}
                            to="/resume"
                            className="btn btn-green d-block ">
                            My CV
                        </Link>
                        <Link
                            onClick={scrollTop}
                            to="/portfolio"
                            className="mt-2 btn btn-green d-block ">
                            My Projects
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
