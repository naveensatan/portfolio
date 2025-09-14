import { clsx, type ClassValue } from "clsx";
import { RefObject } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (
  sectionRef: RefObject<HTMLDivElement | null>
) => {
  sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};
