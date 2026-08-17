"use client";

import { forwardRef } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  id?: string;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#016241] text-white hover:bg-[#014d33] active:scale-[0.98] shadow-sm",
  secondary:
    "bg-transparent border border-[#016241] text-[#016241] hover:bg-[#016241]/8 active:scale-[0.98]",
  ghost:
    "bg-transparent text-[#284339] hover:bg-[#284339]/8 active:scale-[0.98]",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1dba57] active:scale-[0.98] shadow-sm",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      className = "",
      disabled,
      onClick,
      children,
      id,
      type = "button",
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-none tracking-wide transition-all duration-200 cursor-pointer select-none";
    const styles = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${
      disabled ? "opacity-50 pointer-events-none" : ""
    } ${className}`;

    if (href) {
      return external ? (
        <a
          id={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles}
        >
          {children}
        </a>
      ) : (
        <Link id={id} href={href} className={styles}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        id={id}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={styles}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
