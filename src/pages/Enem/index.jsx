import Header from "../../components/Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Enem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [enemApplications, setEnemApplications] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simula um tempo de carregamento ou gatilho para exibir o conteúdo
    setTimeout(() => {
        setIsVisible(true);
    }, 100); // 100ms delay antes de mostrar o conteúdo
}, []);

  const getEnemApplications = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/exam', {
        method: 'GET'
      })

      const data = await response.json();

      setEnemApplications(data);

    } catch (error) {
      console.log(error);
      setErrorMessage("Erro ao buscar aplicações do ENEM.");
    }
  }

  const goToQuestionsEnemApplication = (enem) => {
    navigate(`/enem/${enem}/1`);
  }

  useEffect(() => {
    getEnemApplications();
  }, [])

  return (
    <div className={`h-full transition-all duration-1000 ease-in-out
         ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="flex flex-col pt-24 pb-8 px-6 md:px-10">
        <h1 className="text-3xl font-bold">
          Escolha uma aplicação do ENEM
        </h1>
        <hr className="border-[#fa7807] border-[2px] mt-3" />
        <div className="w-full mt-5">
          <ul className="w-full flex flex-col gap-2 md:grid md:grid-cols-3">
            {
              enemApplications.map((enem, index) => (
                <li
                  className="border shadow-md p-4 rounded-2xl text-xl font-bold text-[#011F3B] flex justify-between items-center"
                  key={index}
                >
                  {enem}
                  <Button
                    text='Ver questões'
                    width='w-[150px]'
                    fontSize='text-base'
                    typeButton='primary'
                    onClick={() => goToQuestionsEnemApplication(enem)}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Enem;