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
    "bg-[#016241] text-white hover:bg-[#014d33] shadow-[0_10px_24px_-16px_rgba(1,98,65,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#016241]",
  secondary:
    "bg-transparent border border-[#016241] text-[#016241] hover:bg-[#016241]/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#016241]",
  ghost:
    "bg-transparent text-[#284339] hover:bg-[#284339]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#284339]",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1dba57] shadow-[0_12px_28px_-16px_rgba(37,211,102,0.9)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[38px]",
  md: "px-5 py-3 text-sm min-h-[44px]",
  lg: "px-6 py-3.5 text-base min-h-[50px]",
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
      "inline-flex items-center justify-center gap-2 font-semibold rounded-[6px] tracking-normal transition-all duration-200 cursor-pointer select-none focus-visible:ring-0 hover:-translate-y-0.5 active:translate-y-0";
    const styles = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${
      disabled ? "opacity-40 pointer-events-none" : ""
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
