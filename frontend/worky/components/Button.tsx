'use client';
import React from 'react';

interface ButtonProps {
  name: string;
  front_classes: string;
  back_classes: string;
}

const Button = ({ name, front_classes, back_classes }: ButtonProps) => {
  return (
    <button className='cus-btn-con'>
      <div className={`${front_classes || ''} cus-btn-front clip-custom`}>
        <p className='text-lg text-center font-body font-semibold'>{name}</p>
      </div>
      <div className={`${back_classes || ''} cus-btn-back clip-custom`}></div>
    </button>
  );
}

export default Button;