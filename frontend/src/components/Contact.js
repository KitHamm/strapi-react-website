import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CONTACT } from "./Queries";

export default function ContactFooter() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [createMessage, { loading, error, data }] = useMutation(CONTACT, {
        variables: {
            name: formState.name,
            email: formState.email,
            message: formState.message,
        },
    });
    if (loading)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 project col-lg-6 offset-lg-3 intro">
                        <div className="col-12">
                            <h1>Contact me...</h1>
                            <hr className="home-line" />
                        </div>
                        <p>Sending your message...</p>
                    </div>
                </div>
            </div>
        );
    if (error)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 project col-lg-6 offset-lg-3 intro">
                        <div className="col-12">
                            <h1>Contact me...</h1>
                            <hr className="home-line" />
                        </div>
                        <p>
                            Sorry, it looks like there was a problem! Please try
                            again another time, or try to contact me on social
                            media.
                        </p>
                    </div>
                </div>
            </div>
        );
    if (data)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 project col-lg-6 offset-lg-3 intro">
                        <div className="col-12">
                            <h1>Contact me...</h1>
                            <hr className="home-line" />
                        </div>
                        <p>
                            Thank you for your message! I will get back to you
                            as soon as possible.
                        </p>
                    </div>
                </div>
            </div>
        );
    return (
        <>
            <div className="col-12">
                <h1>Contact me...</h1>

                <hr className="home-line" />
            </div>

            <form
                className="row footer-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    createMessage();
                }}>
                <div className="col-12 col-lg-4 mt3">
                    <input
                        required
                        className="mb2"
                        value={formState.name}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                name: e.target.value,
                            })
                        }
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        required
                        className="mb2"
                        value={formState.email}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                email: e.target.value,
                            })
                        }
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className="col-12 col-lg-8">
                    <textarea
                        required
                        className="mb2"
                        value={formState.message}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                message: e.target.value,
                            })
                        }
                        type="text"
                        placeholder="Message"
                    />
                </div>
                <div className="col">
                    <button className="btn btn-green" type="submit">
                        Send Message
                    </button>
                </div>
            </form>
        </>
    );
}
