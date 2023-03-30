import { useQuery } from "@apollo/client";
import Error from "./Error";
import ProjectCard from "../components/ProjectCard";
import Loader from "../components/Loader";
import { scrollBottom } from "../App";
import { PROJECTS } from "../components/Queries";

export default function Portfolio() {
    const { loading, error, data } = useQuery(PROJECTS);
    if (loading) return <Loader />;
    if (error) return <Error />;
    var content = data.projects.data;
    return (
        <>
            <div className="container fade-in">
                <div className="row">
                    <div className="col-12 project intro splash">
                        <div className="row row-cols-sm-1 row-cols-lg-4">
                            <div className="col">
                                <div className="project-card title-card">
                                    <h1>My Projects</h1>
                                    <hr className="home-line" />
                                    <p>
                                        Here you can see a collection of some of
                                        the projects that I have worked on over
                                        the years. They range from websites to
                                        digital art and just some projects that
                                        I have undertaken for fun. Explore my
                                        work and feel free to contact me for any
                                        more information on anything you see.
                                    </p>
                                    <div
                                        onClick={scrollBottom}
                                        className="btn btn-green">
                                        Contact
                                    </div>
                                </div>
                            </div>

                            {content.map((proj, index) => {
                                return (
                                    <ProjectCard
                                        key={proj.attributes.title}
                                        title={proj.attributes.title}
                                        url={
                                            proj.attributes.image.data[0]
                                                .attributes.url
                                        }
                                        uid={proj.attributes.uid}
                                        short={proj.attributes.short}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
