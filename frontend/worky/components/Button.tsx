'use client';
import React from 'react';

interface ButtonProps {
  name: string;
  front_classes: string;
  back_classes: string;
  text_color?: string;
  fullWidth?: boolean;
}

const Button = ({ name, front_classes, back_classes, text_color, fullWidth = false }: ButtonProps) => {
  return (
    <button className={`cus-btn-con ${fullWidth ? 'w-full' : 'w-auto'}`}>
      <div className={`${front_classes || ''} cus-btn-front clip-custom`}>
        <p className={`${text_color} text-lg text-center font-body font-semibold`}>{name}</p>
      </div>
      <div className={`${back_classes || ''} cus-btn-back clip-custom`}></div>
    </button>
  );
}

export default Button;