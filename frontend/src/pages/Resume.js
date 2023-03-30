import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loader from "../components/Loader";
import { useState } from "react";
import { url } from "../App";
import { scrollTop } from "../App";
import { RESUME } from "../components/Queries";
import Arrows from "../components/Arrows";

export default function About() {
    const [scrollTopY, setScrollTopY] = useState(0);
    const handleScroll = (event) => {
        setScrollTopY(event.currentTarget.scrollTop);
    };
    const { loading, error, data } = useQuery(RESUME);

    if (loading) return <Loader />;
    if (error) return <Error />;
    var content = data.resume.data.attributes;
    var image = data.resume.data.attributes.image.data.attributes;
    return (
        <div className="fade-in container">
            <div id="resume" className="row">
                <div className="d-block d-lg-none p-0 col-12">
                    <img
                        className="resume-img img-fluid"
                        alt={image.name}
                        src={url + image.url}
                    />
                </div>
                <div className="resume-container p-0 col-12 col-lg-6">
                    <Arrows scroll={scrollTopY} />
                    <div onScroll={handleScroll} className="resume">
                        <div className="col-12">
                            <h1>R&eacute;sum&eacute;</h1>
                            <hr className="home-line" />
                        </div>
                        <ReactMarkdown>{content.copy}</ReactMarkdown>
                        <Link
                            onClick={scrollTop}
                            to="/portfolio"
                            className="mt-5 btn btn-green d-block ">
                            My Projects
                        </Link>
                    </div>
                </div>
                <div className="d-none v-center d-lg-block p-0 mt-5 col-12 col-lg-5">
                    <img
                        className="resume-img img-fluid slide-right"
                        alt={content.image.data.attributes.name}
                        src={url + content.image.data.attributes.url}
                    />
                </div>
            </div>
        </div>
    );
}
