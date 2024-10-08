"use client";

import { Search, List, XCircle } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isMobile: boolean;
}

interface SidebarItem {
  icon: React.ElementType;
  text: string;
  link: string;
}

export default function Sidebar({ isOpen, setIsOpen, isMobile }: Readonly<SidebarProps>) {
  const sidebarItems: SidebarItem[] = [
    { icon: Search, text: "Search a transaction", link: "/admin/search-transaction" },
    { icon: List, text: "Transaction list", link: "/admin/transactions" },
    { icon: XCircle, text: "Rejected transactions", link: "/admin/rejected-transactions" },
  ];

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed left-0 top-0 z-50 h-full overflow-hidden bg-gray-800 text-white transition-all duration-300 ease-in-out ${isOpen ? "w-64" : "w-0"} ${isMobile ? "shadow-lg" : ""} `}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="mb-4 text-white transition-colors duration-200 hover:text-gray-300"
            aria-label="Close sidebar"
          >
            &times;
          </button>
          <nav>
            <h2
              className={`mb-2 font-bold transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"} `}
            >
              Transactions
            </h2>
            <ul className="space-y-2">
              {sidebarItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="flex items-center rounded p-2 transition-colors duration-200 hover:bg-gray-700"
                    onClick={handleItemClick}
                  >
                    <item.icon
                      size={20}
                      className={`transition-all duration-300 ease-in-out ${isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"} `}
                    />
                    <span
                      className={`ml-2 transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"} `}
                    >
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
