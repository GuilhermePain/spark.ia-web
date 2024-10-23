import { useState, useEffect } from "react";
import Header from "../../components/Header/Header"
import { useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaCalculator,
  FaDna,
  FaFlask,
  FaGlobe,
  FaHourglass,
  FaLightbulb,
  FaUsers
} from "react-icons/fa6";

const Flashcard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [pergunta, setPergunta] = useState({});

  const data = document.location.pathname.split("/");

  const flashcard = data[2];
  const numeroPergunta = parseInt(data[3]);

  useEffect(() => {
    // Simula um tempo de carregamento ou gatilho para exibir o conteúdo
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay antes de mostrar o conteúdo
  }, []);

  useEffect(() => {
    fetch(
      `https://spark-ia.duckdns.org/api/flashcard/${flashcard}/${numeroPergunta}`
    ).then(async (res) => setPergunta(await res.json()));
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
          <ul className="w-full grid grid-cols-2 gap-2 md:grid md:grid-cols-6">
            <li className="w-[150px] flex flex-col items-center justify-center gap-2 text-center font-bold">
              <div className="flex justify-center bg-[#fa7807] rounded-xl text-6xl text-white p-12">
                <FaCalculator />
              </div>
              Matemática
            </li>
            <li className="w-[150px] flex flex-col items-center justify-center gap-2 text-center font-bold">
              <div className="flex justify-center bg-[#fa7807] rounded-xl text-6xl text-white p-12">
                <FaHourglass />
              </div>
              História
            </li>
            <li className="w-[150px] flex flex-col items-center justify-center gap-2 text-center font-bold">
              <div className="flex justify-center bg-[#fa7807] rounded-xl text-6xl text-white p-12">
                <FaDna />
              </div>
              Biologia
            </li>
            <li className="w-[150px] flex flex-col items-center justify-center gap-2 text-center font-bold">
              <div className="flex justify-center bg-[#fa7807] rounded-xl text-6xl text-white p-12">
                <FaGlobe />
              </div>
              Geografia
            </li>
            <li className="w-[150px] flex flex-col items-center justify-center gap-2 text-center font-bold">
              <div className="flex justify-center bg-[#fa7807] rounded-xl text-6xl text-white p-12">
                <FaFlask />
              </div>
              Química
            </li>
            <li className="w-[150px] flex flex-col items-center justify-center gap-2 text-center font-bold">
              <div className="flex justify-center bg-[#fa7807] rounded-xl text-6xl text-white p-12">
                <FaBrain />
              </div>
              Filosofia
            </li>
            <li className="w-[150px] flex flex-col items-center justify-center gap-2 text-center font-bold">
              <div className="flex justify-center bg-[#fa7807] rounded-xl text-6xl text-white p-12">
                <FaLightbulb />
              </div>
              Física
            </li>
            <li className="w-[150px] flex flex-col items-center justify-center gap-2 text-center font-bold">
              <div className="flex justify-center bg-[#fa7807] rounded-xl text-6xl text-white p-12">
                <FaUsers />
              </div>
              Sociologia
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Flashcard