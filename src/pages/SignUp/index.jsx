import { useEffect, useState } from "react";
import imgChat from "../../assets/imgs/svg/imgs/imgChatbot.svg";

export default function SingUp() {
  const [senhaVisível, setVisível] = useState(false);
  const [erro, setErro] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simula um tempo de carregamento ou gatilho para exibir o conteúdo
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay antes de mostrar o conteúdo
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
      setErro("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    function validarEmail(email) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    function validarUsuário(nome) {
      const regex = /^[\p{L}0-9_\s]+$/u;
      return regex.test(nome);
    }

    function validarSenha(senha) {
      const regex = /\s/;
      if (regex.test(senha))
        return new Error("Sua senha não pode conter espaços!");
      if (senha.length < 8)
        return new Error("Sua senha deve ter no mínimo 8 caracteres!");
      return true;
    }

    const formData = {
      nome,
      email,
      senha,
      confirmarSenha,
    };

    try {
<<<<<<< HEAD
      const response = await fetch(
        "https://spark-ia.duckdns.org/api/novoUsuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
=======
      const response = await fetch('https://spark-ia.duckdns.org/api/novoUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
>>>>>>> feature/landingPage

      if (!response.ok) {
        throw new Error("Erro ao tentar se registrar.");
      }

      alert("Registrado com sucesso!");
    } catch (error) {
      setErro("Erro ao tentar se registrar.");
      console.error("Erro:", error);
    }
  };

  return (
    <div
      className={`flex items-center justify-center h-[100vh] w-[100vw] bg-[#011F3B] transition-all duration-1000 ease-in-out
         ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-[85%] sm:w-[80%] h-[600px] flex flex-col items-center justify-center md:justify-around md:flex-row ">
        <div className="hidden lg:flex items-center justify-center w-1/2">
          <img src={imgChat} alt="Bot" className="max-w-full h-auto" />
        </div>

        <div className="flex flex-col justify-center items-center w-max">
          <h2 className="text-3xl font-bold text-center mb-1">Registro</h2>
          <hr className=" border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />

          <form
            onSubmit={handleRegister}
            className="flex flex-col justify-center items-center w-auto"
          >
            <div className="mb-4">
              <label className="block font-semibold">Nome</label>
              <input
                name="nome"
                type="text"
                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Email</label>
              <input
                name="email"
                type="email"
                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Senha</label>
              <input
                name="senha"
                type={senhaVisível ? "text" : "password"}
                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Confirmar Senha</label>
              <input
                name="confirmarsenha"
                type={senhaVisível ? "text" : "password"}
                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </div>

            <div className="mb-3 w-full">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  onChange={() => setVisível(!senhaVisível)}
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
            <a href="/entrar" className=" text-blue-400 hover:underline">
              Entre
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
