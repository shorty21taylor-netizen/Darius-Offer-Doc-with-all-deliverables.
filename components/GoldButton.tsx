import { type ReactNode } from "react";

interface GoldButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

export default function GoldButton({ href, onClick, children, external, className = "" }: GoldButtonProps) {
  const classes = `btn-gold text-base ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
