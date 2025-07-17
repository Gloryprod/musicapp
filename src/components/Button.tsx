import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick 
} : ButtonProps) {
  const base = "rounded transition font-semibold";
  const variants = {
    primary: "btn btn-primary",
    secondary: "btn btn-secondary",
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button 
      onClick={onClick} 
      className={`${base} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
}
