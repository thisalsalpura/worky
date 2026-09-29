import {
  faPenNib,
  faMicrochip,
  faVideo,
  faSignature,
  faMusic
} from '@fortawesome/free-solid-svg-icons';

export const categories = [
  {
    id: '1',
    title: 'Graphic & Design',
    icon: faPenNib
  },
  {
    id: '2',
    title: 'Programming & Tech',
    icon: faMicrochip
  },
  {
    id: '3',
    title: 'Video & Animation',
    icon: faVideo
  },
  {
    id: '4',
    title: 'Writing & Translation',
    icon: faSignature
  },
  {
    id: '5',
    title: 'Music & Audio',
    icon: faMusic
  }
] as const;