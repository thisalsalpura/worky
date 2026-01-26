'use client';
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  name: string;
  href?: string;
  btn_class?: string;
  front_classes: string;
  back_classes: string;
  text_color?: string;
}

const Button = ({ name, href = '/', btn_class = '', front_classes, back_classes, text_color = '' }: ButtonProps) => {
  return (
    <Link href={`${href}`} className={`${btn_class} cus-btn-con`}>
      <button className={`${front_classes || ''} cus-btn-front clip-custom`}>
        <p className={`${text_color} text-lg text-center font-body font-semibold`}>{name}</p>
      </button>
      <button className={`${back_classes || ''} cus-btn-back clip-custom`} />
    </Link>
  );
}

export default Button;