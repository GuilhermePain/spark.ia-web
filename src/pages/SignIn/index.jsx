import { useEffect, useState } from "react";
import imgChat from "../../assets/imgs/svg/imgs/imgChatbot.svg";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula um tempo de carregamento ou gatilho para exibir o conteúdo
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay antes de mostrar o conteúdo
    // Simula um tempo de carregamento ou gatilho para exibir o conteúdo
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay antes de mostrar o conteúdo
  }, []);

  const formData = {
    email: email,
    senha: senha,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://spark-ia.duckdns.org/api/autenticar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao fazer login");
      }

      const data = await response.json();
      console.log("Login bem-sucedido:", data);
      Cookies.setItem("token", data.token);
      navigate("/inicio");
    } catch (error) {
      alert("Erro ao fazer login");
      console.log(error.message);
    }
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-[#011F3B] p-12 transition-all duration-1000 ease-in-out
         ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-[85%] sm:w-[80%] h-[600px] flex flex-col items-center justify-center md:justify-around md:flex-row ">
        <div className="hidden md:flex items-center justify-center w-1/2">
          <img src={imgChat} alt="Bot" className="max-w-full h-auto" />
        </div>

        <div className="flex flex-col justify-center items-center w-max">
          <h2 className="text-3xl font-bold text-center mb-1">Entrar</h2>
          <hr className=" border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />

          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-auto">
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
                type={senhaVisivel ? "text" : "password"}
                className="bg-gray-100 sm:w-[300px] px-3 py-2 border rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#fa7807] focus:border-[#FDAD0B]"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div className="mb-3 w-full">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  onChange={() => setSenhaVisivel(!senhaVisivel)}
                  className="form-checkbox"
                />
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

          {erro && (
            <p className="text-center text-red-500 font-semibold mt-2">
              {erro}
            </p>
          )}

          <p className="text-center">
            Não tem uma conta ainda?{" "}
            <a href="/cadastro" className=" text-blue-400 hover:underline">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
