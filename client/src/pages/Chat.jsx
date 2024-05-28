import Mensagem from "../components/Mensagem";

export function Chat() {
  return (
    <div className="flex w-full h-full">
      {/* Painel lateral */}
      <div className="bg-[#011f3a] h-screen w-3/12">
        <abbr title="Nova conversa">
          <div className="font-sans text-white flex ml-2 cursor-pointer select-none duration-300 hover:scale-105">
            <img
              src="favicon.ico"
              className="w-9 h-9 mt-4 ml-4 border rounded-full shadow-md shadow-[#011f3a]"
            />
            <h2 className="mt-6 ml-1.5">Nova conversa</h2>
          </div>
        </abbr>
      </div>

      {/* Tela principal */}
      <div className="bg-white h-screen w-9/12">
        {/*<img className="mx-auto w-40 mt-28" src="Mascote.png" />
        <h2 className="text-center font-sans text-3xl mt-2 font-bold text-[#011f3a]">
          Como posso ajudá-lo hoje?
  </h2>*/}
        <Mensagem
          nome="Spark"
          mensagem="
Cesar, A. (2024). Importância da infraestrutura das escolas: visão geral da importância estrutural do ambiente pedagógico. Disponível em: <https://app.uff.br\>. Universidade Federal do Fluminense."
        />
        <div className="rounded-xl border border-slate-400 w-8/12 ml-12 mb-4 h-12 bg-transparent absolute bottom-0 ">
          <button className="bg-orange-500 w-8 h-8 right-2 top-2 rounded-lg absolute font-bold text-white">
            <i className="fa-solid fa-arrow-up mt-1"></i>
          </button>
          <input
            type="text"
            placeholder="Insira um texto ou URL de um site educacional."
            className="outline-none p-3 bg-transparent font-sans font-semibold w-full h-full flex"
          />
        </div>
      </div>
    </div>
  );
}
