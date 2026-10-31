"use client";

import { useState } from "react";
import { useBranding } from "./BrandingProvider";

export default function BusinessNameModal() {
  const {
    isModalOpen,
    setIsModalOpen,
    setBusinessName,
  } = useBranding();

  const [name, setName] = useState("");

  if (!isModalOpen) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim()) return;

    setBusinessName(name);
  }

  function handleClose() {
    sessionStorage.setItem("demo-modal-dismissed", "true");
    setIsModalOpen(false);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#10233F]/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl sm:p-9">
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 text-2xl text-gray-400 hover:text-gray-800"
          aria-label="Close popup"
        >
          &times;
        </button>

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl">
          ☀️
        </div>

        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-600">
          Interactive website demo
        </p>

        <h2 className="mb-3 text-2xl font-bold text-[#10233F] sm:text-3xl">
          Let us put your business on the map.
        </h2>

        <p className="mb-6 text-sm leading-6 text-gray-500">
          Enter your business name and see how your solar product website
          could look with your own branding.
        </p>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="businessName"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Your business name
          </label>

          <input
            id="businessName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Bright Energy Nigeria"
            required
            autoFocus
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-[#FF8A26] px-5 py-3.5 font-bold text-[#10233F] transition hover:bg-orange-400"
          >
            Preview My Business
          </button>
        </form>

        <button
          onClick={handleClose}
          className="mt-4 w-full text-sm font-medium text-gray-500 hover:text-gray-800"
        >
          Just explore the demo
        </button>

        <p className="mt-5 text-center text-xs text-gray-400">
          This is a preview. No account or payment required.
        </p>
      </div>
    </div>
  );
}