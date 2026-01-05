import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const classnames = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
