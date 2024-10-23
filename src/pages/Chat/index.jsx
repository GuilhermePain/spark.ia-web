import { useEffect, useState } from "react";
import Mensagem from "../../components/Message/Message";
import imgBlackLogo from '../../assets/imgs/png/blackLogo.png';

export function Chat() {
  const [conversa, setConversa] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      // Simula um tempo de carregamento ou gatilho para exibir o conteúdo
      setTimeout(() => {
          setIsVisible(true);
      }, 100); // 100ms delay antes de mostrar o conteúdo
  }, []);

  useEffect(() => {
    fetch("/api/iniciarchat", { method: "POST" });
  }, []);

  const novaMensagem = async () => {
    if (prompt.length > 0) {
      const input = document.querySelector("input");
      let p = prompt;
      setConversa([...conversa, { remetente: "Você", texto: prompt }]);

      setPrompt("");
      input.value = "";

      const res = await fetch("/api/perguntar/" + encodeURIComponent(p), {
        method: "POST",
      });
      setConversa([
        ...conversa,
        { remetente: "Você", texto: prompt },
        { remetente: "Spark", texto: await res.json() },
      ]);
    }
  };

  return (
    <div className={`flex w-full h-full transition-all duration-1000 ease-in-out
         ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Painel lateral */}
      <div className="bg-[#011f3a] hidden md:block h-screen w-3/12">
        <abbr title="Nova conversa">
          <div className="font-sans text-white flex ml-2 cursor-pointer select-none duration-300 hover:scale-105">
            <img
              src='../../../public/favicon.ico'
              className="w-9 h-9 mt-4 ml-4 border rounded-full shadow-md shadow-[#011f3a]"
            />
            <h2 className="mt-6 ml-1.5">Nova conversa</h2>
          </div>
        </abbr>
      </div>

      {/* Tela principal */}
      <div className="bg-white h-screen w-full md:w-9/12 pb-20 overflow-scroll">
        {conversa.length === 0 && (
          <>
            <img className="mx-auto w-20 md:w-40 mt-28" src={imgBlackLogo} />
            <h2 className="text-center font-sans text-2xl md:text-3xl mt-2 font-bold text-[#011f3a]">
              Como posso ajudá-lo hoje?
            </h2>
          </>
        )}
        {conversa.map((mensagem, ind) => {
          return (
            <Mensagem
              key={ind}
              nome={mensagem.remetente}
              mensagem={mensagem.texto}
            />
          );
        })}
        <div className="rounded-xl border border-slate-400 w-full md:w-8/12 md:ml-12 mb-4 h-12 bg-white absolute bottom-0 ">
          <button
            onClick={novaMensagem}
            className="bg-orange-500 w-8 h-8 right-2 top-2 rounded-lg absolute font-bold text-white"
          >
            <i className="fa-solid fa-arrow-up mt-1"></i>
          </button>
          <input
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                novaMensagem();
              }
            }}
            type="text"
            placeholder="Insira um texto ou URL de um site educacional."
            className="outline-none p-3 bg-transparent font-sans font-semibold w-full h-full flex"
          />
        </div>
      </div>
    </div>
  );
}
