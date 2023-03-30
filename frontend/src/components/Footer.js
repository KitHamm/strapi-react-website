import { useQuery, gql } from "@apollo/client";
import { url } from "../App";
import ContactFooter from "../components/Contact";
import { Link } from "react-router-dom";
import { scrollTop } from "../App";
import { FOOTER_IMAGES } from "./Queries";

function Footer() {
    const { loading, error, data } = useQuery(FOOTER_IMAGES);
    if (loading) return <></>;
    if (error) return <></>;
    var content = data.home.data.attributes.sub.data.attributes;
    return (
        <>
            <div id="footer"></div>
            <footer>
                <div className="container">
                    <div className="row m-auto p-2">
                        <div className="col-12 d-block d-lg-none foot-contact v-center">
                            <ContactFooter />
                        </div>
                        <div className="col-12 col-lg-4 text-center">
                            <img
                                alt={content.name}
                                src={url + content.url}
                                className="img-fluid mb-5 mh-3"
                            />
                            <div>
                                <a
                                    className="navbar-social"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/CPerry90/">
                                    <i className="fa-2x fa-brands fa-github"></i>
                                </a>
                                <a
                                    className="navbar-social"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.linkedin.com/in/kit-perry/">
                                    <i className="fa-2x fa-brands fa-linkedin"></i>
                                </a>
                                <a
                                    className="navbar-social"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://soundcloud.com/kmtproduction">
                                    <i className="fa-2x fa-brands fa-soundcloud"></i>
                                </a>
                                <a
                                    className="navbar-social"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://instagram.com/kit_makes_things">
                                    <i className="fa-2x fa-brands fa-instagram"></i>
                                </a>
                            </div>
                            <div>
                                <p>© kit_makes_things 2023</p>
                            </div>
                            <div className="">
                                <Link onClick={scrollTop} to="/">
                                    Home
                                </Link>
                                {" | "}
                                <Link onClick={scrollTop} to="/about">
                                    About
                                </Link>
                                {" | "}
                                <Link onClick={scrollTop} to="/resume">
                                    CV
                                </Link>
                                {" | "}
                                <Link onClick={scrollTop} to="/Portfolio">
                                    Portfolio
                                </Link>
                                {" | "}
                                <Link onClick={scrollTop} to="/music">
                                    Music
                                </Link>
                                {" | "}
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-lg-8 foot-contact v-center">
                            <ContactFooter />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;
