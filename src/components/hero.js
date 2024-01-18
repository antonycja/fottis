"use client";
import Contents from "@/constants/data";
import Image from "next/image";
import FormModal from "@/components/modal";
import { useState, useEffect } from "react";

export default function HeroSection() {
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
    <>
      {isActive && <FormModal closeModal={setIsActive} />}
      <div className="bg-color bg-slate-200 fixed top-0 z-10 h-full w-full"></div>
      <section
        id="home"
        className="hero-section flex z-20 ml-4 h-[80vh]"
      >
        <div className="content grid grid-cols-2 justify-between gap-8 z-30">
          <div className="text-side flex flex-col gap-4 justify-center ml-20">
            <article className="text flex flex-col gap-4">
              <div className="hero-title text-7xl font-extrabold text-blue-950">
                <h1>{Contents.hero.title}</h1>
              </div>
              <div className="hero-text text-lg">
                <h3>{Contents.hero.text}</h3>
              </div>
            </article>
            <div className="hero-cta-btn flex gap-3">
              <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-white border-2 border-white hover:border-blue-500 px-3 py-1.5 rounded-full"
              >
                {Contents.hero.mainBtn}
              </button>
              {Contents.hero.secBtn.length > 0 && (
                <button className="hover:bg-blue-500 bg-white border-2 hover:border-white border-blue-500 hover:text-white px-3 py-1.5 rounded-full">
                  {Contents.hero.secBtn}
                </button>
              )}
            </div>
          </div>
          <div className="image-side min-w-full my-auto">
            <Image
              src={Contents.hero.image}
              width={1000}
              height={500}
              alt="Phone image that represents fotty finance"
            />
          </div>
        </div>
      </section>
    </>
  );
}
