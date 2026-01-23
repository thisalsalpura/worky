'use client';
import React from 'react';

interface ButtonProps {
  name: string;
  btn_class?: string;
  front_classes: string;
  back_classes: string;
  text_color?: string;
}

const Button = ({ name, btn_class = '', front_classes, back_classes, text_color = '' }: ButtonProps) => {
  return (
    <button className={`${btn_class} cus-btn-con`}>
      <div className={`${front_classes || ''} cus-btn-front clip-custom`}>
        <p className={`${text_color} text-lg text-center font-body font-semibold`}>{name}</p>
      </div>
      <div className={`${back_classes || ''} cus-btn-back clip-custom`}></div>
    </button>
  );
}

export default Button;