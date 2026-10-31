"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { business } from "@/config/business";

interface BrandingContextType {
  businessName: string;
  setBusinessName: (name: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const BrandingContext = createContext<BrandingContextType | undefined>(
  undefined
);

export function BrandingProvider({ children }: { children: ReactNode }) {
  const [businessName, setBusinessNameState] = useState(business.name);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const savedName = localStorage.getItem("demo-business-name");
    const dismissed = sessionStorage.getItem("demo-modal-dismissed");

    if (savedName) {
      setBusinessNameState(savedName);
    }

    if (dismissed) {
      setIsModalOpen(false);
    }
  }, []);

  function setBusinessName(name: string) {
    const cleanName = name.trim();

    if (!cleanName) return;

    setBusinessNameState(cleanName);
    localStorage.setItem("demo-business-name", cleanName);
    sessionStorage.setItem("demo-modal-dismissed", "true");
    setIsModalOpen(false);
  }

  return (
    <BrandingContext.Provider
      value={{
        businessName,
        setBusinessName,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </BrandingContext.Provider>
  );
}

export function useBranding() {
  const context = useContext(BrandingContext);

  if (!context) {
    throw new Error("useBranding must be used inside BrandingProvider");
  }

  return context;
}