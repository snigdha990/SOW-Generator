import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names conditionally
export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs));
}
