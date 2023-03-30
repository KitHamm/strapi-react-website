import ReactMarkdown from "react-markdown";
import Error from "./Error";
import Loader from "../components/Loader";
import SingleImage from "../components/SingleImage";
import MultipleImage from "../components/MulitpleImage";
import VideoPlayer from "../components/ViedoPlayer";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { scrollTop } from "../App";
import { SINGLE_PROJECT } from "../components/Queries";
import DateRender from "../components/DateRender";

export default function SinglePortfolio() {
    var imageRender;
    const { portfolioId } = useParams();
    const { loading, error, data } = useQuery(SINGLE_PROJECT, {
        variables: { uid: portfolioId },
    });
    if (loading) return <Loader />;
    if (error) return <Error />;
    var project = data.projects.data[0];
    if (project.attributes.image.data.length === 1) {
        imageRender = (
            <SingleImage
                title={project.attributes.title}
                url={project.attributes.image.data[0].attributes.url}
            />
        );
    } else if (project.attributes.image.data.length > 1) {
        imageRender = (
            <MultipleImage
                title={project.attributes.title}
                urls={[project.attributes.image.data]}
            />
        );
    }
    return (
        <>
            <div className="container fade-in">
                <div className="row intro">
                    <div className="m-0 single-project splash">
                        <div className="row">
                            <div className="col-12">{imageRender}</div>

                            <div className="col-12 d-block d-lg-none">
                                <div className="mb-3 col-12 dark">
                                    <h1>{project.attributes.title}</h1>
                                    <hr className="home-line" />
                                    <p>
                                        <strong>When:</strong>{" "}
                                        <DateRender
                                            date={project.attributes.date}
                                        />
                                    </p>
                                    <p>
                                        <strong>Where:</strong>{" "}
                                        {project.attributes.where}
                                    </p>
                                    <p>
                                        <strong>Tech:</strong>{" "}
                                        {project.attributes.tech}
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 d-block d-lg-none">
                                <div className="dark col-12">
                                    <ReactMarkdown>
                                        {project.attributes.description}
                                    </ReactMarkdown>
                                    <Link
                                        onClick={scrollTop}
                                        to="/portfolio"
                                        className="btn btn-green">
                                        Back to projects
                                    </Link>
                                </div>
                                {project.attributes.video_url.map((video) => {
                                    return (
                                        <div key={video.url} className="mt-3">
                                            <VideoPlayer url={video.url} />
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="col-6 d-none d-lg-block">
                                <div className="dark">
                                    <h1>{project.attributes.title}</h1>
                                    <hr className="home-line" />
                                    <ReactMarkdown>
                                        {project.attributes.description}
                                    </ReactMarkdown>
                                    <Link
                                        onClick={scrollTop}
                                        to="/portfolio"
                                        className="btn btn-green">
                                        Back to projects
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6 d-none d-lg-block">
                                <div className="mb-3 dark">
                                    <p>
                                        <strong>When:</strong>{" "}
                                        <DateRender
                                            date={project.attributes.date}
                                        />
                                    </p>
                                    <p>
                                        <strong>Where:</strong>{" "}
                                        {project.attributes.where}
                                    </p>
                                    <p>
                                        <strong>Tech:</strong>{" "}
                                        {project.attributes.tech}
                                    </p>
                                </div>
                                {project.attributes.video_url.map((video) => {
                                    return (
                                        <div key={video.url} className="mt-3">
                                            <VideoPlayer url={video.url} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
