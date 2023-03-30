import { url } from "../App";

const SingleImage = (props) => {
    return (
        <div className="col-12 mb-4 text-center">
            <img
                className="project-img img-fluid"
                key={props.title}
                alt={props.title}
                src={url + props.url}
            />
        </div>
    );
};
export default SingleImage;
