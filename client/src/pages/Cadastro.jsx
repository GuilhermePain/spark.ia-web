import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import chatImage from "../assets/chat.png";

export default function Cadastro() {
  const [senhaVisível, setVisível] = useState(false);
  const [erro, setErro] = useState(null);
  const location = useLocation();
  const alertRef = useRef(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setErro(searchParams.get("erro"));
    if (searchParams.get("sucesso") === "true" && !alertRef.current) {
      alert("Registro feito com sucesso!");
      alertRef.current = true;
    }
  }, [location.search]);

  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-[#011F3B] ">
      <div className="bg-white p-8 rounded-lg shadow-md w-[85%] sm:w-[70%] h-[550px] flex flex-col items-center justify-center md:justify-around md:flex-row ">
        <div className="hidden lg:flex items-center justify-center w-1/2">
          <img src={chatImage} alt="Bot" className="w-[408px] h-[408px]" />
        </div>

        <div className="flex flex-col justify-center items-center w-max">
          <h2 className="text-3xl font-bold text-center mb-1">Registro</h2>
          <hr className=" border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />

          <form
            action="/api/novousuario"
            method="POST"
            className="flex flex-col justify-center items-center w-auto"
          >
            <div className="mb-4">
              <label className="block font-semibold">Nome</label>
              <input
                name="nome"
                type="text"
                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Email</label>
              <input
                name="email"
                type="email"
                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Senha</label>
              <input
                name="senha"
                type={senhaVisível ? "text" : "password"}
                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Confirmar Senha</label>
              <input
                name="confirmarsenha"
                type={senhaVisível ? "text" : "password"}
                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
              />
            </div>

            <div className="mb-3 w-full">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  onChange={() => {
                    setVisível(!senhaVisível);
                  }}
                  className="form-checkbox"
                />
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
          {erro && (
            <p className="text-center text-red-500 font-semibold mt-2">
              {erro}
            </p>
          )}
          <p className="text-center">
            Já tem uma conta?{" "}
            <a href="/login" className=" text-blue-400 hover:underline">
              Entre
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
