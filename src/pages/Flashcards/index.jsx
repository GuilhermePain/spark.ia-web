import { useState, useEffect } from "react";
import Header from "../../components/Header/Header"
import { useNavigate } from "react-router-dom";
import { FaCalculator } from "react-icons/fa6";

const Flashcards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula um tempo de carregamento ou gatilho para exibir o conteúdo
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay antes de mostrar o conteúdo
  }, []);

  return (
    <div className={`h-full transition-all duration-1000 ease-in-out
         ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="flex flex-col pt-24 pb-8 px-6 md:px-10">
        <h1 className="text-3xl font-bold">
          Escolha uma disciplina
        </h1>
        <hr className="border-[#fa7807] border-[2px] mt-3" />
        <div className="w-full mt-5">
          <ul className="w-full grid grid-cols-2 gap-2 md:grid md:grid-cols-3">
            <li className="w-[150px] flex flex-col items-center justify-center gap-2 text-center font-bold">
              <div className="flex justify-center bg-[#fa7807] rounded-xl text-6xl text-white p-12">
                <FaCalculator />
              </div>
              Geografia
            </li>
            <li className="w-[150px] flex flex-col items-center justify-center gap-2 text-center font-bold">
              <div className="flex justify-center bg-[#fa7807] rounded-xl text-6xl text-white p-12">
                <FaCalculator />
              </div>
              Geografia
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Flashcards