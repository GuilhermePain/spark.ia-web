import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import imgHomeLandingpage from '../../public/imgHomeLandingPage.svg';
import imgPlanoElaborado from '../../public/imgPlanoElaborado.svg';
import imgChatbot from '../../public/imgChatbot.svg'
import imgFlashcards from '../../public/imgFlashcards.svg'
import ActionButton from "../components/ActionButton";

export function Landing() {

    const getScrollPosition = () => {
        const scrollPosition = window.scrollY;
        return scrollPosition;
    }

    return (
        <div className="flex flex-col justify-normal items-center w-full min-h-screen">
            <Header scrollPosition={getScrollPosition}/>
            <main className="w-full h-full mt-24">
                <section className="w-full px-10 flex flex-col md:flex-row md:mb-[60px] items-center justify-between">
                    <aside className="md:w-1/2">
                        <h1 className="text-[#FA7807] text-[50px] font-bold">Spark.ia</h1>
                        <h1 className="text-[38px] font-bold">Seu Assistente Inteligente para Preparação no ENEM</h1>
                        <p className="text-[#818181] text-[22px] mb-4">Transforme Textos e Links em Questões de Prova em Segundos</p>
                        <ActionButton />
                    </aside>
                    <aside className="md:w-1/2 p-5">
                        <img src={imgHomeLandingpage} alt="Imagem ilustrativa do chatbot da seção inicial" className="max-w-full h-full" />
                    </aside>
                </section>
                <section className="bg-[#011F3B] pt-6">
                    <h2 className="text-white text-[40px] text-bold text-center">Funcionalidades</h2>
                    <hr className="border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />
                    <div className="flex flex-col justify-normal items-center gap-3 px-10">
                        <Card 
                            img={imgPlanoElaborado} 
                            altText='imagem ilustrativa de plano elaborado'
                            title='Plano elaborado'
                            text='A primeira funcionalidade do Spark.ia é criar um plano de estudo personalizado com base nas informações coletadas do estudante. Um algoritmo gera um cronograma com blocos de estudo, revisões e exercícios, ajustando-se ao progresso do estudante.'
                        />
                        <Card 
                            img={imgChatbot} 
                            altText='imagem ilustrativa de plano elaborado'
                            title='Chatbot'
                            text='A segunda funcionalidade é um chatbot que gera questões com base nos textos e links enviados pelo usuário. Utilizando processamento de linguagem natural, o chatbot analisa o conteúdo, extrai tópicos principais e cria questões de múltipla escolha, verdadeiro ou falso e dissertativas, ajudando na fixação do conteúdo estudado.'
                        />
                        <Card 
                            img={imgFlashcards} 
                            altText='imagem ilustrativa de plano elaborado'
                            title='Flashcards'
                            text='A terceira funcionalidade é a implementação de flashcards para memorização. Os estudantes podem criar flashcards manualmente ou receber sugestões baseadas nos conteúdos estudados ou nas perguntas do chatbot. A revisão usa técnicas de repetição espaçada e gamificação para incentivar o uso regular, com pontuação, recompensas e estatísticas de desempenho.'
                        />
                        
                    </div>
                </section>
            </main>
        </div>
    );
}
