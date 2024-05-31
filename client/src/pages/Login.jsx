import React from "react";
import chatImage from "../assets/chat.png";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#011F3B] p-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full h-full max-w-6x2 max-h-[calc(100vh-80px)] flex flex-col md:flex-row ]">
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img src={chatImage} alt="Bot" className="max-w-full h-auto" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center p-20">
          <h2 className="text-3xl font-bold text-center mb-5">Entrar</h2>
          <hr className=" border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />
          <form>
            <div className="mb-4">
              <label className="block">Email</label>
              <input
                type="email"
                className="bg-gray-100 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Senha</label>
              <input
                type="password"
                className="bg-gray-100 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Mostrar senha</span>
              </label>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center bg-[#fa7807] text-white py-2 w-48 rounded-lg hover:bg-[#FDAD0B] active:bg-[#FA7807] focus:outline-none focus:ring-2 focus:ring-[#fa7807] mx-auto"
            >
              Entrar
            </button>
          </form>
          <p className="text-center mt-4">
            Não tem uma conta?{" "}
            <a href="#" className=" text-blue-400 hover:underline">
              Registre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};