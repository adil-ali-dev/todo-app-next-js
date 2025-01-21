import React from "react";

interface ButtonProps {
  children: React.ReactNode; 
  classNames?: string; 
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  icon?: React.ReactNode;
  disabled?: boolean; 
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  classNames = "", 
  onClick, 
  icon, 
  disabled = false 
}) => {
  return (
    <button
      disabled={disabled}
      className={`${classNames} ${disabled ? " !cursor-default" : " flex justify-center items-center h-12 hover:scale-105 transition-transform duration-250"}`}
      onClick={onClick}
    >
      {children}
      {icon && (
        <span className="ml-2 mt-2 relative h-6 pr-8 overflow-hidden">
          <span className="transition-all duration-200 second absolute">
            {icon}
          </span>
        </span>
      )}
    </button>
  );
};

export default Button;
