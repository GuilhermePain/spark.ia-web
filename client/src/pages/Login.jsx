import React from "react";
import chatImage from "../assets/chat.png";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  let [params] = useSearchParams();
  const err = params.get("erro");
  const [senhaVisível, setVisível] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#011F3B] p-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full h-full max-w-6x2 max-h-[calc(100vh-80px)] flex flex-col md:flex-row ]">
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img src={chatImage} alt="Bot" className="max-w-full h-auto" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center p-20">
          <h2 className="text-3xl font-bold text-center mb-1">Entrar</h2>
          <hr className=" border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />
          <form method="POST" action="/api/autenticar">
            <div className="mb-4">
              <label className="block">Email</label>
              <input
                name="email"
                type="email"
                className="bg-gray-100 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Senha</label>
              <input
                name="senha"
                type={senhaVisível ? "text" : "password"}
                className="bg-gray-100 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  onChange={(_) => {
                    setVisível(!senhaVisível);
                  }}
                  type="checkbox"
                  className="form-checkbox"
                />
                <span className="ml-2 text-gray-700">Mostrar senha</span>
              </label>
            </div>
            <button
              type="submit"
              className="flex items-center font-bold duration-300 justify-center bg-[#fa7807] text-white py-2 w-48 rounded-lg hover:bg-[#FDAD0B] active:bg-[#FA7807] focus:outline-none focus:ring-2 focus:ring-[#fa7807] mx-auto"
            >
              Entrar
            </button>
          </form>
          {err && (
            <p className="text-center text-red-500 font-semibold mt-2">{err}</p>
          )}
          <p className="text-center">
            Não tem uma conta?{" "}
            <a href="/cadastro" className=" text-blue-400 hover:underline">
              Registre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
