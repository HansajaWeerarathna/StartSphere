import Logo from "@/assets/logo.svg";
import Link from "next/link";
import XPng from "@/assets/social-x.svg";
import InstaPng from "@/assets/social-instagram.svg";
import YtPng from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="h-6 w-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>

          <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center">
            <Link
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Developers
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white text-xs  md:text-sm transition"
            >
              Compnay
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Changelog
            </Link>
          </nav>

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XPng className="text-white/40 hover:text-white transition" />
            <InstaPng className="text-white/40 hover:text-white transition" />
            <YtPng className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
