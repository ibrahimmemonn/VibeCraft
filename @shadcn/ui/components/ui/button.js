"use client";

import * as React from "react";

const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  disabled = false,
  onClick,
  type = "button",
  ...props
}) => {
  // Define the base styles
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none";

  // Define variant styles
  const variantStyles = {
    default:
      "bg-black text-white hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer",
    outline:
      "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
    ghost:
      "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
  };

  // Define size styles
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  // Combine styles
  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant] || variantStyles.default}
    ${sizeStyles[size] || sizeStyles.default}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  return (
    <button
      type={type}
      className={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
