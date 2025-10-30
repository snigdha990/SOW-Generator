// components/Button.tsx
"use client";

import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
