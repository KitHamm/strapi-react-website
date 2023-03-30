import { gql } from "@apollo/client";

export const HOME_IMAGES = gql`
    query GetHome {
        home {
            data {
                attributes {
                    main {
                        data {
                            attributes {
                                url
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const FOOTER_IMAGES = gql`
    query GetHome {
        home {
            data {
                attributes {
                    sub {
                        data {
                            attributes {
                                url
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const ABOUT = gql`
    query GetAbout {
        about {
            data {
                attributes {
                    copy
                    image {
                        data {
                            attributes {
                                url
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const RESUME = gql`
    query GetResume {
        resume {
            data {
                attributes {
                    copy
                    image {
                        data {
                            attributes {
                                url
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const PROJECTS = gql`
    query GetProjects {
        projects {
            data {
                attributes {
                    title
                    short
                    uid
                    image {
                        data {
                            attributes {
                                name
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const SINGLE_PROJECT = gql`
    query GetProject($uid: String!) {
        projects(filters: { uid: { eq: $uid } }) {
            data {
                attributes {
                    title
                    where
                    tech
                    date
                    description
                    video_url {
                        url
                    }
                    image {
                        data {
                            attributes {
                                name
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const CONTACT = gql`
    mutation CREATE_MESSAGE(
        $name: String!
        $email: String!
        $message: String!
    ) {
        createMessage(data: { name: $name, email: $email, message: $message }) {
            data {
                id
            }
        }
    }
`;
