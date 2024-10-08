import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header({ toggleSidebar }: Readonly<{ toggleSidebar: () => void }>) {
  return (
    <header className="bg-blue-ikea flex items-center p-4 text-white shadow-md">
      <button onClick={toggleSidebar} className="mr-4">
        <Menu size={24} />
      </button>
      <div className="flex items-center">
        <div className="relative w-20">
          <Image
            src="/ikea_logo2.svg"
            alt="Brand Icon"
            fill={false}
            width={40}
            height={40}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <h1 className="ml-2 text-2xl font-bold">Your Brand Name</h1>
      </div>
    </header>
  );
}
