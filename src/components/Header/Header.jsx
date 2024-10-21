import { useEffect, useState } from "react";
import LogoClaraSpark from "../../assets/imgs/png/whiteLogo.png";
import { IoMenu, IoClose } from "react-icons/io5";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookies";
import { useJwt } from "react-jwt";
import { FaUser } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState('')
  const navigate = useNavigate();

  const hideLinks = document.location.pathname !== "/";

  const token = Cookies.getItem("token");
  const { decodedToken, isExpired } = useJwt(token);

  useEffect(() => {
    if (decodedToken && !isExpired) {
      setUser(decodedToken?.nome);
    }
  }, [isExpired, decodedToken]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    Cookies.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header
      className={`bg-[#011F3B] w-full py-3 px-10 fixed top-0 z-50 shadow-xl`}
    >
      <nav className="flex justify-between items-center">
        <a href="/">
          <div className="flex items-center gap-3">
            <img src={LogoClaraSpark} alt="logo spark.ia" className="w-10" />
            <h1 className={`text-white text-2xl`}>Spark.ia</h1>
          </div>
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-white text-4xl hover:text-[#fa7807] active:text-[#FDAD0B]`}
          >
            {!menuOpen && <IoMenu />}
          </button>
        </div>
        <ul
          className={`fixed text-xl md:text-base top-0 left-0 right-0 bg-[#011F3B] text-white transition-transform duration-300 ease-in-out transform ${menuOpen ? "translate-y-0" : "-translate-y-full"
            } md:static md:flex md:items-center md:gap-6 md:translate-y-0 md:bg-transparent`}
        >
          <li className="md:hidden flex px-5 justify-end border-y-[1px] border-slate-700 p-2 w-full md:border-none mdhover:text-[#fa7807] active:text-[#FDAD0B]">
            <button
              className="text-4xl hover:text-[#fa7807]"
              onClick={toggleMenu}
            >
              <IoClose />
            </button>
          </li>
          {!hideLinks && (
            <>
              <li
                className={`block border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]`}
              >
                <a href="#inicio">Início</a>
              </li>
              <li
                className={`block border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]`}
              >
                <a href="#funcionalidades">Funcionalidades</a>
              </li>
              <li
                className={`block border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]`}
              >
                <a href="#sobreNos">Sobre nós</a>
              </li>
            </>
          )}
          <li className="md:hidden flex flex-col gap-2 items-center justify-between px-5 border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]">
            <div className="flex gap-2 items-center">
              <FaUser />
              {user}
            </div>
            <Button
              text='Sair'
              width='w-[120px]'
              typeButton='primary'
              onClick={logout}
            />
          </li>
        </ul>
        <div className="hidden gap-2 md:flex">
          {
            user ? (
              <div className="flex items-center text-white gap-4 ">
                <p className="flex items-center gap-1 md:text-base hover:text-[#FA7807] cursor-pointer">
                  <FaUser />
                  {user}
                </p>
                <Button text='Sair' typeButton='primary' onClick={logout} />
              </div>
            ) : (
              <>
                <a href="/entrar">
                  <Button text="Entrar" />
                </a>
                <a href="/cadastro">
                  <Button text='Cadastrar' typeButton='primary' />
                </a>
              </>
            )
          }
        </div>
      </nav>
    </header>
  );
}
