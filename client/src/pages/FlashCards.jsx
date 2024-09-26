import React, { useState } from "react";
import LogoClaraSpark from "../../public/logo-branca.png";
import LogoEscuraSpark from "../../public/Mascote.png";
import { IoMenu, IoClose } from "react-icons/io5";

export default function FlashCards({ scrollPosition }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  window.addEventListener("scroll", () => {
    setScrollPos(scrollPosition());
  });

  return (
    <main>
      <header
        className={`${
          scrollPos >= 800 ? `bg-white` : `bg-[#011F3B]`
        } w-full py-3 px-10 shadow-xl`}
      >
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={scrollPos <= 800 ? LogoClaraSpark : LogoEscuraSpark}
              alt="logo spark.ia"
              className="w-10"
            />
            <h1
              className={`text-2xl ${
                scrollPos <= 800 ? "text-white" : "text-[#011F3B]"
              }`}
            >
              História
            </h1>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${
                scrollPos <= 800 ? "text-white" : "text-[##011F3B]"
              } text-4xl hover:text-[#fa7807] active:text-[#FDAD0B]`}
            >
              {!menuOpen && <IoMenu />}
            </button>
          </div>
          <ul
            className={`fixed top-0 left-0 right-0 bg-[#011F3B] text-[#FA7807] transition-transform duration-300 ease-in-out transform ${
              menuOpen ? "translate-y-0" : "-translate-y-full"
            } md:static md:flex md:items-center md:gap-6 md:translate-y-0 md:bg-transparent`}
          >
            <li className="md:hidden flex justify-end border-y-[1px] border-slate-700 p-2 w-full md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]">
              <button className="text-4xl" onClick={toggleMenu}>
                <IoClose />
              </button>
            </li>
            <li className="border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]">
              Decks
            </li>
            <li className="border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]">
              Adicionar
            </li>
            <li className="border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]">
              Procurar
            </li>
          </ul>
        </nav>
      </header>
      
      <section className=" w-[100vw] mt-10 flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center   ">
          <p className="text-3xl max-w-80 ">
            Quais Foram as principais causa da Revolução Francesa de 1789?
          </p>
          <hr className="border-red-700 border-t-2" />
        </div>
      </section>
    </main>
  );
}
