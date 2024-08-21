import React from 'react';
import { IoClose, IoPersonSharp } from "react-icons/io5";
import LogoClaraSpark from '../../public/logo-branca.png';

export default function Choice() {
  const { user } = useUser();

  return (
    <header className={`w-full py-3 px-10 fixed top-0 z-50 shadow-xl bg-[#011F3B]`}>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img src={LogoClaraSpark} alt="logo spark.ia" className='w-10' />
          <h1 className={`text-2xl`}>Spark.ia</h1>
        </div>
        <div className='md:hidden'>
          <button className={`text-4xl hover:text-[#fa7807] active:text-[#FDAD0B]`}>
          </button>
        </div>
        <ul className={`fixed top-0 left-0 right-0 bg-[#011F3B] text-white transition-transform duration-300 ease-in-out transform md:static md:flex md:items-center md:gap-6 md:translate-y-0 md:bg-transparent`}>
          <li className='md:hidden flex justify-end border-y-[1px] border-slate-700 p-2 w-full md:border-none md:w-auto hover:text-[#fa7807] active:text-[#FDAD0B]'>
            <button className='text-4xl'>
              <IoClose />
            </button>
          </li>
        </ul>
        <div className='hidden gap-2 md:flex'>
          <a href='/cadastro'>
            <button className='bg-[#FA7807] text-white rounded-[10px] px-4 py-2 hover:bg-[#FDAD0B] flex justify-center items-center'>
              <IoPersonSharp className='w-[20px] h-[20px]' />
              {user.nome}
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
