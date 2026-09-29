import {
    faSquareFacebook,
    faSquareInstagram,
    faSquareLinkedin,
    faSquareThreads,
    faSquareXTwitter,
    faSquareYoutube
} from "@fortawesome/free-brands-svg-icons";

export const social_medias = [
    {
        id: "1",
        name: "Instagram",
        href: "/",
        icon: faSquareInstagram
    },
    {
        id: "2",
        name: "Facebook",
        href: "/",
        icon: faSquareFacebook
    },
    {
        id: "3",
        name: "Threads",
        href: "/",
        icon: faSquareThreads
    },
    {
        id: "4",
        name: "X Twitter",
        href: "/",
        icon: faSquareXTwitter
    },
    {
        id: "5",
        name: "Youtube",
        href: "/",
        icon: faSquareYoutube
    },
    {
        id: "6",
        name: "LinkedIn",
        href: "/",
        icon: faSquareLinkedin
    }
] as const;