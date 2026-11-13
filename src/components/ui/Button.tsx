import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-violet to-brand-electric text-white shadow-lg shadow-brand-violet/25 hover:shadow-brand-violet/40 hover:brightness-110",
  secondary: "glass text-slate-100 hover:border-white/20 hover:bg-white/10",
  ghost: "text-slate-300 hover:bg-white/5 hover:text-white",
  outline:
    "border border-white/15 bg-white/[0.04] text-white hover:border-brand-violet-light/60 hover:bg-white/[0.08]",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";

interface SharedProps {
  variant?: ButtonVariant;
  children: ReactNode;
  showArrow?: boolean;
  className?: string;
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps & {
  href: string;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  children,
  showArrow = false,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props && props.href) {
    const { href, onClick } = props;
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
        {showArrow && <ArrowRight className="h-4 w-4" aria-hidden />}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </button>
  );
}
