import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type ContainerSize = "default" | "wide";

const sizeClass: Record<ContainerSize, string> = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
  as?: ElementType;
}

export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClass[size], className)}>
      {children}
    </Tag>
  );
}
