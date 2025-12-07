import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  fullWidth = false
}) => {
  const baseStyles = "py-4 px-8 font-serif font-bold tracking-widest transition-all duration-300 text-lg relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-kuon-gold to-kuon-goldLight text-kuon-black hover:brightness-110 shadow-[0_0_20px_rgba(184,161,121,0.3)]",
    outline: "bg-transparent border border-kuon-gold text-kuon-gold hover:bg-kuon-gold hover:text-kuon-black"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out skew-y-12"></div>
      )}
    </button>
  );
};