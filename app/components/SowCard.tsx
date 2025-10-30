"use client";

import React from "react";
import Button from "./Button";

interface SOWCardProps {
  title: string;
  content: string;
  onDownload: () => void;
}

export default function SOWCard({ title, content, onDownload }: SOWCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <pre className="bg-gray-100 p-2 rounded overflow-x-auto text-sm">{content}</pre>
      <Button onClick={onDownload}>Download</Button>
    </div>
  );
}
