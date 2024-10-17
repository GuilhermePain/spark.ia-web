import React, { useState } from 'react';
import LogoClaraSpark from '../../assets/imgs/png/whiteLogo.png';
import { IoMenu, IoClose } from "react-icons/io5";
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookies';

export default function Header({ userExisting }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const token = Cookies.getItem('token');

  userExisting = token;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user');
    navigate('/login')
  }

  return (
    <header className={`bg-[#011F3B] w-full py-3 px-10 fixed top-0 z-50 shadow-xl`}>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img src={LogoClaraSpark} alt="logo spark.ia" className='w-10' />
          <h1 className={`text-white text-2xl`}>Spark.ia</h1>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className={`text-white text-4xl hover:text-[#fa7807] active:text-[#FDAD0B]`}>
            {!menuOpen && <IoMenu />}
          </button>
        </div>
        <ul className={`fixed top-0 left-0 right-0 bg-[#011F3B] text-white transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'} md:static md:flex md:items-center md:gap-6 md:translate-y-0 md:bg-transparent`}>
          <li className='md:hidden flex justify-end border-y-[1px] border-slate-700 p-2 w-full md:border-none mdhover:text-[#fa7807] active:text-[#FDAD0B]'>
            <button className='text-4xl hover:text-[#fa7807]' onClick={toggleMenu}>
              <IoClose />
            </button>
          </li>
          <li className={`${userExisting ? 'flex' : 'hidden'} md:hidden flex-col items-center gap-5 border-y-[1px] border-slate-700 p-2 w-full text-white text-center md:border-none md:w-auto`}>
            <div className='rounded-full bg-red-500 w-28 h-28'>
              &nbsp;
            </div>
            <Button text='Sair' width={28} onClick={logout} />
          </li>
          <li className={`${userExisting ? 'hidden' : 'block'} border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]`}>Início</li>
          <li className={`${userExisting ? 'hidden' : 'block'} border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]`}>Funcionalidades</li>
          <li className={`${userExisting ? 'hidden' : 'block'} "border-y-[1px] border-slate-700 p-2 w-full text-center md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]`}>Sobre nós</li>
        </ul>
        <div className='hidden gap-2 md:flex'>
          {
            userExisting 
            ? <Button text='Sair' />
            : <a href='/entrar'>
            <Button
              text='Entrar'
            />
          </a>
          
          }
        </div>
      </nav>
    </header>
  );
}
