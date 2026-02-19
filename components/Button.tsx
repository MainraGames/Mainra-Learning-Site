import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-mainra-orange text-white hover:bg-opacity-90 shadow-lg hover:shadow-orange-500/30",
    secondary: "bg-mainra-blue text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/30",
    outline: "border-2 border-mainra-orange text-mainra-orange hover:bg-mainra-orange hover:text-white",
    ghost: "text-mainra-grey hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};