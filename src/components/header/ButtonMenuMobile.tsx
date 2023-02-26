import React, {DetailedHTMLProps, FC} from 'react';

type ButtonProps = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const  ButtonMenuMobile:  FC<ButtonProps> = ({children, ...props}) => {
  const classes = props.className ? "burger my-auto " + props.className : "burger my-auto "

  return (
      <button className={classes} {...props} >
        <span className="burger-line top-line"></span>
        <span className="burger-line mid-line"></span>
        <span className="burger-line bottom-line"></span>
      </button>
  );
}

export default ButtonMenuMobile;