import { useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import Card from "../../components/Card/index.jsx";
import imgHomeLandingpage from "../../assets/imgs/svg/imgs/imgLandingPage.svg";
import imgQuestoes from "../../assets/imgs/svg/imgs/imgQuestoes.svg";
import imgChatbot from "../../assets/imgs/svg/imgs/imgChatbot.svg";
import imgFlashcards from "../../assets/imgs/svg/imgs/imgFlashcards.svg";
import Button from "../../components/Button/Button.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ImgArthur from "../../assets/imgs/svg/imgs/imgArthur.svg";
import ImgElissa from "../../assets/imgs/svg/imgs/imgElissa.svg";
import ImgGuilherme from "../../assets/imgs/svg/imgs/imgGuilherme.svg";
import ImgIcaro from "../../assets/imgs/svg/imgs/imgIcaro.svg";
import ImgJeovane from "../../assets/imgs/svg/imgs/imgJeovane.svg";
import ImgJoaoPedro from "../../assets/imgs/svg/imgs/imgJoaoPedro.svg";
import ImgKairo from "../../assets/imgs/svg/imgs/imgKairo.svg";
import ImgMarcos from "../../assets/imgs/svg/imgs/imgMarcos.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../assets/css/Swiper.css";

const members = [
  {
    id: "1",
    name: "Arthur",
    image: ImgArthur,
    position: "Desenvolvedor Front-end",
  },
  { id: "2", name: "Elissa", image: ImgElissa, position: "Apresentadora" },
  {
    id: "3",
    name: "Guilherme",
    image: ImgGuilherme,
    position: "Desenvolvedor Fullstack",
  },
  {
    id: "4",
    name: "Ícaro",
    image: ImgIcaro,
    position: "Desenvolvedor Back-end",
  },
  {
    id: "5",
    name: "Jeovane",
    image: ImgJeovane,
    position: "Desenvolvedor Front-end",
  },
  {
    id: "6",
    name: "João Pedro",
    image: ImgJoaoPedro,
    position: "Desenvolvedor UI&UX Design",
  },
  {
    id: "7",
    name: "Kairo",
    image: ImgKairo,
    position: " Administrador de Banco de Dados",
  },
  {
    id: "8",
    name: "Marcos",
    image: ImgMarcos,
    position: "Desenvolvedor Fullstack",
  },
];

export function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simula um tempo de carregamento ou gatilho para exibir o conteúdo
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay antes de mostrar o conteúdo
  }, []);

  return (
    <div
      className={`flex flex-col justify-normal items-center w-full min-h-screen transition-all duration-1000 ease-in-out
         ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <Header />
      <main className="w-full h-full mt-24">
        {/* Seção inicial */}
        <section
          id="inicio"
          className="w-full px-10 flex flex-col md:flex-row md:mb-[60px] items-center justify-between"
        >
          <aside className="md:w-1/2">
            <h1 className="text-[#FA7807] text-[50px] font-bold">Spark.ia</h1>
            <h1 className="text-[38px] font-bold">
              Seu Assistente Inteligente para Preparação no ENEM
            </h1>
            <p className="text-[#818181] text-[22px] mb-4">
              Transforme Textos e Links em Questões de Prova em Segundos
            </p>
            <a href="/inicio">
              <Button
                text="Experimentar agora!"
                px="px-20"
                typeButton="primary"
              />
            </a>
          </aside>
          <aside className="md:w-[45%] p-5">
            <img
              src={imgHomeLandingpage}
              alt="Imagem ilustrativa do chatbot da seção inicial"
              className="max-w-full w-full"
            />
          </aside>
        </section>
        {/* Seção Flashcards */}
        <section id="funcionalidades" className="bg-[#011F3B] pt-6">
          <h2 className="text-white text-[40px] text-bold text-center">
            Funcionalidades
          </h2>
          <hr className="border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />
          <div className="flex flex-col md:flex-row justify-normal items-center gap-3 px-10">
            <Card
              img={imgQuestoes}
              altText="imagem ilustrativa de plano elaborado"
              title="Banco de questões"
              text="O Spark.ia oferece um amplo banco de questões do ENEM, cobrindo todas as áreas do exame. Os estudantes podem acessar as questões, respondê-las e verificar se acertaram, além de conferir a justificativa do item correto, ajudando no entendimento de cada tema abordado."
              imgClassName="w-[220px] h-[220px] object-cover"
            />
            <Card
              img={imgChatbot}
              altText="imagem ilustrativa de plano elaborado"
              title="Chatbot"
              text="A segunda funcionalidade é um chatbot que gera questões com base nos textos e links enviados pelo usuário.O chatbot analisa o conteúdo, extrai tópicos principais e cria questões de múltipla escolha, verdadeiro ou falso e dissertativas, ajudando na fixação do conteúdo estudado."
              imgClassName="w-[220px] h-[220px] object-cover"
            />
            <Card
              img={imgFlashcards}
              altText="imagem ilustrativa de plano elaborado"
              title="Flashcards"
              text="A funcionalidade de flashcards permite que os estudantes criem cartões manualmente ou recebam sugestões baseadas em conteúdos estudados e perguntas do chatbot. A revisão utiliza repetição espaçada e gamificação, incentivando o uso regular."
              imgClassName="w-[220px] h-[220px] object-cover"
            />
          </div>
          <div className="w-full text-center p-8">
            <h3 className="text-white text-[24px] font-bold mb-4">
              Experimente o Spark.ia e transforme seus estudos!
            </h3>
            <a href="/cadastro">
              <Button
                typeButton="primary"
                text="Começar agora mesmo!"
                padding="p-3"
              />
            </a>
          </div>
        </section>
        {/* Seção Sobre nós */}
        <section className="p-6 md:w-full">
          <h2 className="text-[#011F3B] text-[40px] text-bold text-center">
            Sobre nós
          </h2>
          <hr className="border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />
          <p className="text-justify text-xl">
            A Spark.ia é um projeto desenvolvido por alunos do ensino médio da
            escola EEEP Edson Queiroz, sabendo do quão difícil e requisitada é a
            vaga na universidade, pensamos em realizar um projeto que atendesse
            essas necessidades.
          </p>
          <Swiper
            breakpoints={{ 768: { slidesPerView: 3 } }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
          >
            {members.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  className="w-[200px] rounded-full mt-10 mx-auto"
                  src={item.image}
                  alt="Imagem de um integrante do grupo"
                />
                <h2 className="text-center text-3xl font-semibold mt-2">
                  {item.name}
                </h2>
                <p className="text-center text-xl mb-12">{item.position}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
      <Footer />
    </div>
  );
}
