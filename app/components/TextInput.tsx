"use client";

import React, { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function TextInput({ className = "", ...props }: TextInputProps) {
  return (
    <input
      className={`w-full px-4 py-2 rounded border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${className}`}
      {...props}
    />
  );
}
