import React, { useState } from 'react';
import LogoSpark from '../../public/logo-branca.png';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='bg-[#011F3B] p-3 fixed top-0 left-0 right-0 z-50'>
      <nav className='flex justify-between items-center'>
        <div className='flex justify-normal items-center gap-3'>
          <img src={LogoSpark} alt="logo spark.ia" className='w-10'/>
          <h1 className='text-xl text-white'>Spark.ia</h1>
        </div>
        <button onClick={toggleMenu} className='text-white text-4xl'>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </nav>
      {/* Menu deslizante */}
      <div className={`fixed top-0 left-0 right-0 bg-[#011F3B] text-white transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='w-full flex justify-end'>
        {menuOpen ? 
        <button onClick={toggleMenu}>
          <IoClose className='text-4xl text-white hover:text-[#fa7807]'/>
        </button> :
         <IoMenu />}
        </div>
        <ul className='flex flex-col items-center text-3xl'>
          <li className='border-y-[1px] border-slate-700 p-2 w-full text-center hover:text-[#fa7807]'>Início</li>
          <li className='border-y-[1px] border-slate-700 p-2 w-full text-center hover:text-[#fa7807]'>Funcionalidades</li>
          <li className='border-y-[1px] border-slate-700 p-2 w-full text-center hover:text-[#fa7807]'>Sobre nós</li>
        </ul>
      </div>
    </header>
  );
}
