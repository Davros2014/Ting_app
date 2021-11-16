import React from "react";

const Button = ({
  disabled,
  onClick,
  className,
  children,
  type,
  value,
  datatoggle,
  datatarget,
  datadismiss
}) => {
  return (
    <button
      className={className}
      type={type}
      value={value}
      onClick={onClick}
      disabled={disabled}
      data-toggle={datatoggle}
      data-target={datatarget}
      data-dismiss={datadismiss}
    >
      {children}
    </button>
  );
};

export default Button;
