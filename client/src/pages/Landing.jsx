import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import imgHomeLandingpage from '../../public/imgHomeLandingPage.svg';
import imgPlanoElaborado from '../../public/imgPlanoElaborado.svg';
import imgChatbot from '../../public/imgChatbot.svg'
import imgFlashcards from '../../public/imgFlashcards.svg'
import ActionButton from "../components/ActionButton";
import Footer from "../components/Footer.jsx";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgArthur from '../../public/imgArthur.svg';
import ImgElissa from '../../public/imgElissa.svg';
import ImgGuilherme from '../../public/imgGuilherme.svg';
import ImgIcaro from '../../public/imgIcaro.svg';
import ImgJeovane from '../../public/imgJeovane.svg';
import ImgJoaoPedro from '../../public/imgJoaoPedro.svg';
import ImgKairo from '../../public/imgKairo.svg';
import ImgMarcos from '../../public/imgMarcos.svg';
import ImgSamira from '../../public/imgSamira.svg';



export function Landing() {

    const getScrollPosition = () => {
        const scrollPosition = window.scrollY;
        return scrollPosition;
    }

    const members = [
        { id: "1", name: "Arthur", image: ImgArthur, position: "Desenvolvedor Front-end" },
        { id: "2", name: "Elissa",  image: ImgElissa, position: "Apresentadora"},
        { id: "3", name: "Guilherme", image: ImgGuilherme, position: "Desenvolvedor Front-end"},
        { id: "4", name: "Ícaro", image: ImgIcaro, position: "Desenvolvedor Back-end"},
        { id: "5", name: "Jeovane", image: ImgJeovane, position: "Desenvolvedor Front-end"},
        { id: "6", name: "João Pedro", image: ImgJoaoPedro, position: "Desenvolvedor UI&UX Design"},
        { id: "7", name: "Kairo", image: ImgKairo, position: " Administrador de Banco de Dados"},
        { id: "8", name: "Marcos", image: ImgMarcos, position: "Desenvolvedor Front-end"},
        { id: "9", name: "Samira", image: ImgSamira, position: "Apresentadora"}
    ];

    return (
        <div className="flex flex-col justify-normal items-center w-full min-h-screen">
            <Header scrollPosition={getScrollPosition} />
            <main className="w-full h-full mt-24">
                {/* Seção inicial */}
                <section className="w-full px-10 flex flex-col md:flex-row md:mb-[60px] items-center justify-between">
                    <aside className="md:w-1/2">
                        <h1 className="text-[#FA7807] text-[50px] font-bold">Spark.ia</h1>
                        <h1 className="text-[38px] font-bold">Seu Assistente Inteligente para Preparação no ENEM</h1>
                        <p className="text-[#818181] text-[22px] mb-4">Transforme Textos e Links em Questões de Prova em Segundos</p>
                        <ActionButton text='Experimente agora gratuitamente!' />
                    </aside>
                    <aside className="md:w-1/2 p-5">
                        <img src={imgHomeLandingpage} alt="Imagem ilustrativa do chatbot da seção inicial" className="max-w-full w-full" />
                    </aside>
                </section>
                {/* Seção Flashcards */}
                <section className="bg-[#011F3B] pt-6">
                    <h2 className="text-white text-[40px] text-bold text-center">Funcionalidades</h2>
                    <hr className="border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />
                    <div className="flex flex-col md:flex-row justify-normal items-center gap-3 px-10">
                        <Card
                            img={imgPlanoElaborado}
                            altText='imagem ilustrativa de plano elaborado'
                            title='Plano elaborado'
                            text='A primeira funcionalidade do Spark.ia é criar um plano de estudo personalizado com base nas informações coletadas do estudante. Um algoritmo gera um cronograma com blocos de estudo, revisões e exercícios, ajustando-se ao progresso do estudante.'
                            imgClassName="w-[220px] h-[220px] object-cover"
                        />
                        <Card
                            img={imgChatbot}
                            altText='imagem ilustrativa de plano elaborado'
                            title='Chatbot'
                            text='A segunda funcionalidade é um chatbot que gera questões com base nos textos e links enviados pelo usuário. Utilizando processamento de linguagem natural, o chatbot analisa o conteúdo, extrai tópicos principais e cria questões de múltipla escolha, verdadeiro ou falso e dissertativas, ajudando na fixação do conteúdo estudado.'
                            imgClassName="w-[220px] h-[220px] object-cover"
                        />
                        <Card
                            img={imgFlashcards}
                            altText='imagem ilustrativa de plano elaborado'
                            title='Flashcards'
                            text='A terceira funcionalidade é a implementação de flashcards para memorização. Os estudantes podem criar flashcards manualmente ou receber sugestões baseadas nos conteúdos estudados ou nas perguntas do chatbot. A revisão usa técnicas de repetição espaçada e gamificação para incentivar o uso regular, com pontuação, recompensas e estatísticas de desempenho.'
                            imgClassName="w-[220px] h-[220px] object-cover"
                        />

                    </div>
                    <div className="w-full text-center p-8">
                        <h3 className="text-white text-[24px] font-bold mb-4">
                            Experimente o Spark.ia e transforme seus estudos!
                        </h3>
                        <ActionButton text='Começar agora mesmo!' />
                    </div>
                </section>
                {/* Seção Sobre nós */}
                <section className="p-6 md:w-full">
                    <h2 className="text-[#011F3B] text-[40px] text-bold text-center">Sobre nós</h2>
                    <hr className="border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />
                    <p className="text-justify text-xl">A Spark.ia é um projeto desenvolvido por alunos do ensino médio da escola EEEP Edson Queiroz, sabidos do quão difícil e requisitada é a vaga na universidade, pensamos em realizar um projeto que atendesse essas necessidades.</p>
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        {
                            members.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <img
                                        className="
                                            w-[200px]
                                            rounded-full
                                            mt-10
                                            mx-auto
                                        "
                                        src={item.image} 
                                        alt="Imagem de um integrante do grupo"
                                     />
                                     <h2 className="text-center">{item.name}</h2>
                                     <p className="text-center">{item.position}</p>
                                </SwiperSlide>
                            ))

                        }
                    </Swiper>
                </section>
            </main>
            <Footer />
        </div>
    );
}
