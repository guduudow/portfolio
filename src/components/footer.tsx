import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiCopyright } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-accent py-4 px-6 flex flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0">
      <div className="flex items-center gap-2 text-background">
        <PiCopyright className="text-lg" />
        <span className="text-base font-medium">2024</span>
        <Image
          src="/name-secondary.svg"
          alt="name logo"
          width={50}
          height={50}
          className="w-12 h-12"
        />
        <span className="text-base font-medium">All Rights Reserved.</span>
      </div>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/ederesgure"
          className="text-background hover:text-white transition-colors"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
        <a
          href="https://www.github.com/guduudow"
          className="text-background hover:text-white transition-colors"
        >
          <FaGithub className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
}
