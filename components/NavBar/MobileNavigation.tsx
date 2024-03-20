"use client";

import { useMobileMenuStore } from "@/utils/menuStore";
import clsx from "clsx";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "pricing" },
  { name: "Product", href: "product" },
  { name: "App", href: "application" },
  { name: "Login", href: "login" },
];

export default function MobileNavigation() {
  const show = useMobileMenuStore((store) => store.mobileMenuOpen);
  const toogle = useMobileMenuStore((store) => store.mobileMenuToggle);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 z-[19] h-full w-[60vw] bg-teal-700 pt-20 transition-all duration-500",
          show ? "right-0" : "-right-[65vw]",
          "flex flex-col items-center",
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => toogle()}
            className={clsx(
              "w-[100%] py-2 pl-[20vw] text-2xl text-white transition-all duration-150 hover:scale-110 hover:pl-[22vw]",
            )}
          >
            {link.name}
          </Link>
        ))}

        <div className="absolute bottom-0 left-0 flex h-[50px] w-[60vw] items-center justify-center gap-5 bg-teal-600 text-white">
          <span>Theme</span>
          <span>Color</span>
        </div>
      </nav>

      <span
        className={clsx(
          "fixed inset-0 z-[15] bg-black/25 backdrop-blur-[2px] transition-all",
          show ? "block opacity-100" : "hidden opacity-0",
        )}
        onClick={() => toogle()}
      />
    </>
  );
}