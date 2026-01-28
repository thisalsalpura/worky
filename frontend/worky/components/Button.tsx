'use client';
import Link from 'next/link';

interface ButtonProps {
  name: string;
  href?: string;
  onClick?: () => void;
  btn_class?: string;
  front_classes: string;
  back_classes: string;
  text_color?: string;
}

const Button = ({ name, href = '/', onClick, btn_class = '', front_classes, back_classes, text_color = '' }: ButtonProps) => {
  if (onClick) {
    return (
      <button onClick={onClick} className={`${btn_class} cus-btn-con`}>
        <div className={`${front_classes || ''} cus-btn-front clip-custom`}>
          <p className={`${text_color} text-lg text-center font-body font-semibold`}>{name}</p>
        </div>
        <div className={`${back_classes || ''} cus-btn-back clip-custom`} />
      </button>
    );
  } else {
    return (
      <Link href={`${href}`} className={`${btn_class} cus-btn-con`}>
        <div className={`${front_classes || ''} cus-btn-front clip-custom`}>
          <p className={`${text_color} text-lg text-center font-body font-semibold`}>{name}</p>
        </div>
        <div className={`${back_classes || ''} cus-btn-back clip-custom`} />
      </Link>
    );
  }
}

export default Button;