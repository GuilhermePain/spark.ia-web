import React from 'react'
import chatImage from "../assets/chat.png";

export default function Cadastro(){
    return(
        <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-[#011F3B] ">
            <div className="bg-white p-8 rounded-lg shadow-md w-[85%] sm:w-[70%] h-[550px] flex flex-col items-center justify-center md:justify-around md:flex-row ">
                <div className="hidden lg:flex items-center justify-center w-1/2">
                    <img src={chatImage} alt="Bot" className="w-[408px] h-[408px]" />
                </div>

                <div className="flex flex-col justify-center items-center w-max">
                    <h2 className="text-3xl font-bold text-center mb-1">Registro</h2>
                    <hr className=" border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />

                    <form className='flex flex-col justify-center items-center w-auto'>
                        <div className="mb-4">
                            <label className="block font-semibold">Nome</label>
                            <input
                                type="text"
                                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold">Email</label>
                            <input
                                type="email"
                                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-semibold">Senha</label>
                            <input
                                type="password"
                                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-semibold">Confirmar Senha</label>
                            <input
                                type="password"
                                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                                required
                            />
                        </div>

                        <div className="mb-3 w-full">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2 text-gray-700">Mostrar senha</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="flex items-center justify-center bg-[#fa7807] text-white py-2 w-48 rounded-lg hover:bg-[#FDAD0B] active:bg-[#FA7807] focus:outline-none focus:ring-2 focus:ring-[#fa7807] mx-auto"
                            >
                            Registrar
                        </button>
                    </form>
                    <p className="text-center mt-2">
                        ja tem uma conta?{" "}
                        <a href="#" className=" text-blue-400 hover:underline">
                        Entre
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}