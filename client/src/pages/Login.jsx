import React, { useState } from "react";
import chatImage from "../assets/chat.png";
import { useSearchParams, useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'; // Correção da importação

export default function Login() {
  const navigate = useNavigate();
  let [params] = useSearchParams();
  const err = params.get("erro");
  const [senhaVisível, setVisível] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const logarUsuario = async (e) => {
    e.preventDefault();

    const dados = { email, senha };

    try {
      const response = await fetch("http://localhost:3001/api/autenticar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao autenticar usuário.");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      const decodedToken = jwtDecode(data.token); 
      const userData = { nome: decodedToken.nome };
      localStorage.setItem("user", JSON.stringify(userData)); 
      
      navigate("/choice");

    } catch (error) {
      alert("Erro ao autenticar usuário: " + error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#011F3B] p-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-[85%] sm:w-[80%] h-[600px] flex flex-col items-center justify-center md:justify-around md:flex-row ">
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img src={chatImage} alt="Bot" className="max-w-full h-auto" />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center p-20">
          <h2 className="text-3xl font-bold text-center mb-1">Entrar</h2>
          <hr className="border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />
          <form onSubmit={logarUsuario}>
            <div className="mb-4">
              <label className="block">Email</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Senha</label>
              <input
                name="senha"
                type={senhaVisível ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="bg-gray-100 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  onChange={() => setVisível(!senhaVisível)}
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
            <a href="/cadastro" className="text-blue-400 hover:underline">
              Registre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
