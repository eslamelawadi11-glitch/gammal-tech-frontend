import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-vipNavy text-white hover:bg-[#121a28] shadow-lg shadow-vipNavy/30 hover:shadow-vipNavy/50",
    gold: "bg-vipGoldDark text-vipNavy hover:bg-opacity-90 shadow-md",
    outline: "border-2 border-vipNavy text-vipNavy hover:bg-vipNavy hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
