import Card from "../../components/Card";
import Header from "../../components/Header/Header";
import imgQuestoes from "../../assets/imgs/svg/imgs/imgQuestoes.svg";
import imgChatbot from "../../assets/imgs/svg/imgs/imgChatbot.svg";
import imgFlashcards from "../../assets/imgs/svg/imgs/imgFlashcards.svg";
import { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simula um tempo de carregamento ou gatilho para exibir o conteúdo
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay antes de mostrar o conteúdo
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-in-out
         ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <Header />
      <main className="mt-20 md:mt-32 p-8">
        <div className="flex flex-col gap-5 md:flex-row">
          <Card
            link="/chat"
            img={imgChatbot}
            title="Chatbot"
            text=" Chatbot que gera questões a partir de textos e links enviados pelo usuário, utilizando linguagem natural para criar perguntas de múltipla escolha, verdadeiro ou falso e dissertativas."
            typeCard="inicio"
          />
          <Card
            link='/flashcards'
            img={imgFlashcards}
            title="Flashcards"
            text="Flashcards que permite criar ou receber sugestões de cartões para revisão, usando repetição espaçada e gamificação para incentivar o estudo contínuo."
            typeCard="inicio"
          />
          <Card
            link="/enem"
            img={imgQuestoes}
            title="Banco de questões"
            text="Banco de questões do ENEM, permitindo que os estudantes respondam e confiram justificativas das respostas, ajudando no entendimento dos temas."
            typeCard="inicio"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
