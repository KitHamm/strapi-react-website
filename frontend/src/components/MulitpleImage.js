import ImageGallery from "react-image-gallery";
import { url } from "../App";
import { useState, useEffect } from "react";

const MultipleImage = (props) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        props.urls[0].map((map) => {
            return setImages((prevState) => [
                ...prevState,
                {
                    original: url + map.attributes.url,
                    thumbnail: url + map.attributes.url,
                    sizes: "100%",
                },
            ]);
        });
    }, [props.urls]);

    return (
        <ImageGallery
            showPlayButton={false}
            autoPlay={true}
            useBrowserFullscreen={false}
            showFullscreenButton={false}
            items={images}
        />
    );
};
export default MultipleImage;
