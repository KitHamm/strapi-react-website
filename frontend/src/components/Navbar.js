import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { scrollBottom, scrollTop } from "../App";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link
                        onClick={scrollTop}
                        to="/"
                        className="navbar-brand navbar-social">
                        KMT
                    </Link>
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
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    onClick={scrollTop}
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }>
                                    <span
                                        className="d-lg-none"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent">
                                        Home
                                    </span>
                                    <span className="d-none d-lg-block">
                                        Home
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    onClick={scrollTop}
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }>
                                    <span
                                        className="d-lg-none"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent">
                                        About
                                    </span>
                                    <span className="d-none d-lg-block">
                                        About
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    onClick={scrollTop}
                                    to="/resume"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }>
                                    <span
                                        className="d-lg-none"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent">
                                        CV
                                    </span>
                                    <span className="d-none d-lg-block">
                                        CV
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    onClick={scrollTop}
                                    to="/portfolio"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }>
                                    <span
                                        className="d-lg-none"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent">
                                        Portfolio
                                    </span>
                                    <span className="d-none d-lg-block">
                                        Portfolio
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    onClick={scrollTop}
                                    to="/music"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }>
                                    <span
                                        className="d-lg-none"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent">
                                        Music
                                    </span>
                                    <span className="d-none d-lg-block">
                                        Music
                                    </span>
                                </NavLink>
                            </li>
                            <li
                                onClick={scrollBottom}
                                className="nav-item nav-link">
                                <span
                                    className="d-lg-none"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent">
                                    Contact
                                </span>
                                <span className="d-none d-lg-block">
                                    Contact
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
