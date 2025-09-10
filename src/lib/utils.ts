import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStaticAssetPath(path: string): string {
  if (process.env.NODE_ENV === 'production') {
    return `/iamfern${path}`;
  }
  return path;
}