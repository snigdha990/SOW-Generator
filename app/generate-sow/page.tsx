"use client";

import React, { useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

interface SOWResponse {
  [key: string]: string; // dynamic SOW sections
}

export default function GenerateSOWPage() {
  const [client, setClient] = useState("");
  const [contractor, setContractor] = useState("");
  const [rawDescription, setRawDescription] = useState("");
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear().toString());
  const [result, setResult] = useState<SOWResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleGenerateSOW = async () => {
    if (!client || !contractor || !rawDescription) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await axios.post(`${apiUrl}/generate-sow`, {
        client,
        contractor,
        raw_description: rawDescription,
        current_year: currentYear,
      });

      setResult(res.data);
    } catch (err: any) {
      console.error(err);
      setError(err?.response?.data?.message || "Error generating SOW. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    saveAs(blob, filename);
  };

  return (
    <div className="bg-zinc-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">📄 AI SOW Generator</h1>
        <p className="text-gray-600">Fill in the project details to generate the SOW.</p>

        <div className="space-y-4">
          <TextInput
            value={client}
            onChange={(e) => setClient(e.target.value)}
            placeholder="Client Name"
            className="bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 focus:ring focus:ring-indigo-300"
          />
          <TextInput
            value={contractor}
            onChange={(e) => setContractor(e.target.value)}
            placeholder="Contractor Name"
            className="bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 focus:ring focus:ring-indigo-300"
          />
          <TextArea
            value={rawDescription}
            onChange={(e) => setRawDescription(e.target.value)}
            placeholder="Project Description"
            className="bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 focus:ring focus:ring-indigo-300"
          />
          <TextInput
            value={currentYear}
            onChange={(e) => setCurrentYear(e.target.value)}
            placeholder="Year"
            className="bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 focus:ring focus:ring-indigo-300"
          />
        </div>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        <Button onClick={handleGenerateSOW} disabled={loading}>
          {loading ? "Generating..." : "Generate SOW"}
        </Button>

        {result && (
          <div className="mt-6 space-y-4">
            {Object.entries(result).map(([filename, content]) => (
              <div
                key={filename}
                className="p-4 border border-gray-300 rounded-lg bg-gray-50"
              >
                <h2 className="font-semibold text-gray-700 mb-2">{filename}</h2>
                <pre className="whitespace-pre-wrap text-gray-800">{content}</pre>
                <Button
                  onClick={() => handleDownload(filename, content)}
                  className="mt-2"
                >
                  Download
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
