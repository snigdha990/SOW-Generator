import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="px-4 md:px-36 text-gray-700 bg-zinc-100 py-10 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Description */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            AI SOW Generator
          </h3>
          <p className="mt-2 text-sm leading-relaxed">
            Quickly create professional Statements of Work (SOW) with AI assistance. 
            Streamline client communications, define project scope clearly, 
            and generate high-quality documents in minutes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/generate-sow" className="hover:underline">Generate SOW</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Connect With Us</h4>
          <ul className="flex gap-4 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600">Twitter</a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-600">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AI SOW Generator. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
