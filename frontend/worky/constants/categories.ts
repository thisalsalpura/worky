import {
  faPenNib,
  faMicrochip,
  faVideo,
  faSignature,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

export const categories = [
  {
    id: "design",
    title: "Graphic & Design",
    icon: faPenNib,
  },
  {
    id: "tech",
    title: "Programming & Tech",
    icon: faMicrochip,
  },
  {
    id: "video",
    title: "Video & Animation",
    icon: faVideo,
  },
  {
    id: "writing",
    title: "Writing & Translation",
    icon: faSignature,
  },
  {
    id: "music",
    title: "Music & Audio",
    icon: faMusic,
  },
] as const;