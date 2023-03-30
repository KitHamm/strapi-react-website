import { url } from "../App";
import { scrollTop } from "../App";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
    return (
        <div className="col">
            <div
                style={{
                    backgroundImage: "url(" + url + props.url + ")",
                }}
                className="project-card">
                <Link onClick={scrollTop} to={`/portfolio/${props.uid}`}>
                    <div className="project-card-inner d-flex flex-column">
                        <h4 className="">{props.title}</h4>
                        <hr className="home-line" />
                        <p className="">{props.short}</p>
                        <div className="btn btn-project">More Info</div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default ProjectCard;
