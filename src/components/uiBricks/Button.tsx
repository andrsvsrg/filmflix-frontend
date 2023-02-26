import React from 'react';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;


const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  props.className = props.className ? "px-4 bg-btn-blue rounded-[20px] h-[40px] text-center flex justify-center items-center "  + props.className : "px-4 bg-btn-blue rounded-[20px] h-[35px] text-center flex justify-center items-center "

  return (
    <button {...props}  >
      {children}
    </button>
  );
}

export default Button;

// className="mr-4 px-4 bg-btn-blue rounded-[20px] h-full"
