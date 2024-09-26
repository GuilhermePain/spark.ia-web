<<<<<<< HEAD:client/src/components/Header.jsx
import React, { useState } from 'react';
import LogoClaraSpark from '../../public/logo-branca.png';
import LogoEscuraSpark from '../../public/Mascote.png'
import { IoMenu, IoClose } from "react-icons/io5";
import ActionButton from './ActionButton';
import { useNavigate } from 'react-router-dom';

export default function Header({ scrollPosition, userExisting }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  window.addEventListener('scroll', () => {
    setScrollPos(scrollPosition());
  });

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user');
    navigate('/login')
  }

  return (
    <header className={`${scrollPos >= 800 ? `bg-white` : `bg-[#011F3B]`} w-full py-3 px-10 fixed top-0 z-50 shadow-xl`}>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img src={scrollPos <= 800 ? LogoClaraSpark : LogoEscuraSpark} alt="logo spark.ia" className='w-10' />
          <h1 className={`text-2xl ${scrollPos <= 800 ? 'text-white' : 'text-[#011F3B]'}`}>Spark.ia</h1>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className={`${scrollPos <= 800 ? 'text-white' : 'text-[##011F3B]'} text-4xl hover:text-[#fa7807] active:text-[#FDAD0B]`}>
            {!menuOpen && <IoMenu />}
          </button>
        </div>
        <ul className={`fixed top-0 left-0 right-0 bg-[#011F3B] text-[#FA7807] transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'} md:static md:flex md:items-center md:gap-6 md:translate-y-0 md:bg-transparent`}>
          <li className='md:hidden flex justify-end border-y-[1px] border-slate-700 p-2 w-full md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]'>
            <button className='text-4xl' onClick={toggleMenu}>
              <IoClose />
            </button>
          </li>
          <li className={`${userExisting ? 'flex' : 'hidden'} md:hidden flex-col items-center gap-5 border-y-[1px] border-slate-700 p-2 w-full text-white text-center md:border-none md:w-auto`}>
            <div className='rounded-full bg-red-500 w-28 h-28'>
              &nbsp;
            </div>
            {/* {userExisting.nome} */}
            <ActionButton text='Sair' width={28} onClick={logout} />
          </li>
          <li className={`${userExisting ? 'hidden' : 'block'} border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]`}>Início</li>
          <li className={`${userExisting ? 'hidden' : 'block'} border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]`}>Funcionalidades</li>
          <li className={`${userExisting ? 'hidden' : 'block'} "border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]`}>Sobre nós</li>
        </ul>
        <div className='hidden gap-2 md:flex'>
          <a href='/login'>
            <button className='bg-transparent border-[#fa7807] border-2 text-[#FA7807] rounded-[10px] px-4 py-2 hover:bg-[#FDAD0B] hover:border-[#FDAD0B]'>
              Entrar
            </button>
          </a>
          <a href='/cadastro'>
            <button className='bg-[#FA7807] text-white rounded-[10px] px-4 py-2 hover:bg-[#FDAD0B]'>
              Registrar
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
=======
import React, { useState } from 'react';
import LogoClaraSpark from '../../public/logo-branca.png';
import LogoEscuraSpark from '../../public/Mascote.png'
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header( {scrollPosition} ) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  window.addEventListener('scroll', () => {
    setScrollPos(scrollPosition());
  });

  return (
    <header className={`${scrollPos >= 800 ? `bg-white` : `bg-[#011F3B]`} w-full py-3 px-10 fixed top-0 z-50 shadow-xl`}>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img src={scrollPos <= 800 ? LogoClaraSpark : LogoEscuraSpark} alt="logo spark.ia" className='w-10'/>
          <h1 className={`text-2xl ${scrollPos <= 800 ? 'text-white' : 'text-[#011F3B]'}`}>Spark.ia</h1>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className={`${scrollPos <= 800 ? 'text-white' : 'text-[##011F3B]'} text-4xl hover:text-[#fa7807] active:text-[#FDAD0B]`}>
            {!menuOpen && <IoMenu/>}
          </button>
        </div>
        <ul className={`fixed top-0 left-0 right-0 bg-[#011F3B] text-[#FA7807] transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'} md:static md:flex md:items-center md:gap-6 md:translate-y-0 md:bg-transparent`}>
          <li className='md:hidden flex justify-end border-y-[1px] border-slate-700 p-2 w-full md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]'>
            <button className='text-4xl'onClick={toggleMenu}>
              <IoClose />
            </button>
          </li>
          <li className='border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]'>Início</li>
          <li className='border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]'>Funcionalidades</li>
          <li className='border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-white active:text-[#FDAD0B]'>Sobre nós</li>
        </ul>
        <div className='hidden gap-2 md:flex'>
          <a href='/login'>
            <button className='bg-transparent border-[#fa7807] border-2 text-[#FA7807] rounded-[10px] px-4 py-2 hover:bg-[#FDAD0B] hover:border-[#FDAD0B]'>
              Entrar
            </button>
          </a>
          <a href='/cadastro'>
            <button className='bg-[#FA7807] text-white rounded-[10px] px-4 py-2 hover:bg-[#FDAD0B]'>
              Registrar
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
>>>>>>> b263b14ae1da7711954e2a2a40d9f173bbb186d1:src/components/Header.jsx
