import ProjectCard from "./ProjectCard";
import { scrollTop } from "../App";
import { useQuery } from "@apollo/client";
import Loader from "./Loader";
import Error from "../pages/Error";
import { PROJECTS } from "./Queries";
import { Link } from "react-router-dom";

export default function HomePortfolio() {
    const { loading, error, data } = useQuery(PROJECTS);
    if (loading) return <Loader />;
    if (error) return <Error />;
    var content = data.projects.data;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 project intro splash">
                        <h1 className="col">My Projects</h1>
                        <Link
                            onClick={scrollTop}
                            to="/portfolio"
                            className=" col btn btn-green">
                            View More...
                        </Link>
                        <hr className="home-line" />
                        <div className="row row-cols-sm-1 row-cols-lg-4">
                            {content.slice(0, 4).map((proj, index) => {
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
