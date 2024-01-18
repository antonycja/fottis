"use client";
import Image from "next/image";
import Link from "next/link";
import Contents from "@/constants/data";

import FormModal from "@/components/modal";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "scroll";
    return () => {};
  }, [isActive]);

  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <nav className=" bg-slate-200 fixed top-0 w-screen z-[100]">
      {isActive && <FormModal closeModal={setIsActive} />}
      <header
        className={`mx-20 m-3 flex justify-between justify-items-center items-center ${
          isActive && ""
        }`}
      >
        <div className="logo">
          <Image
            src={Contents.nav.textLogo}
            width={75}
            height={75}
            alt="text logo"
          />
        </div>
        <ul className="links flex gap-12 font-semibold text-gray-600">
          {Contents.nav.navLinks.map((navLink, index) => (
            <li
              className="hover:text-gray-950 hover:cursor-pointer border-b-2 border-b-transparent hover:border-b-black capitalize"
              key={index}
            >
              <Link
                href={
                  navLink.toLowerCase() === "home"
                    ? `/#${navLink}`
                    : `/#${navLink}`
                }
              >
                {navLink}
              </Link>
            </li>
          ))}
        </ul>
        <div className="buttons">
          <div className="sign_up">
            <button
              onClick={handleClick}
              className="rounded-full px-5 py-2 text-white bg-blue-600 hover:bg-blue-800 hover:text-black transition ease-in-out duration-300 font-medium capitalize"
            >
              {Contents.nav.btnText}
            </button>
          </div>
        </div>
      </header>
    </nav>
  );
}
