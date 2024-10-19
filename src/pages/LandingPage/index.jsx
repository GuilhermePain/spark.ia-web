import Header from "../../components/Header/Header.jsx";
import Card from "../../components/Card/index.jsx";
import imgHomeLandingpage from '../../assets/imgs/svg/imgs/imgLandingPage.svg';
import imgQuestoes from '../../assets/imgs/svg/imgs/imgQuestoes.svg';
import imgChatbot from '../../assets/imgs/svg/imgs/imgChatbot.svg';
import imgFlashcards from '../../assets/imgs/svg/imgs/imgFlashcards.svg';
import Button from "../../components/Button/Button.jsx";
import Footer from '../../components/Footer/Footer.jsx';

export function LandingPage() {
    return (
        <div className="flex flex-col justify-normal items-center w-full min-h-screen">
            <Header />
            <main className="w-full h-full mt-24">
                {/* Seção inicial */}
                <section className="w-full px-10 flex flex-col md:flex-row md:mb-[60px] items-center justify-between">
                    <aside className="md:w-1/2">
                        <h1 className="text-[#FA7807] text-[50px] font-bold">Spark.ia</h1>
                        <h1 className="text-[38px] font-bold">Seu Assistente Inteligente para Preparação no ENEM</h1>
                        <p className="text-[#818181] text-[22px] mb-4">Transforme Textos e Links em Questões de Prova em Segundos</p>
                        <Button
                            link='/entrar'
                            text='Experimentar agora!'
                            px='px-20'
                            typeButton='primary'
                        />
                    </aside>
                    <aside className="md:w-[45%] p-5">
                        <img src={imgHomeLandingpage} alt="Imagem ilustrativa do chatbot da seção inicial" className="max-w-full w-full" />
                    </aside>
                </section>
                {/* Seção Flashcards */}
                <section className="bg-[#011F3B] pt-6">
                    <h2 className="text-white text-[40px] text-bold text-center">Funcionalidades</h2>
                    <hr className="border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />
                    <div className="flex flex-col md:flex-row justify-normal items-center gap-3 px-10">
                        <Card
                            img={imgQuestoes}
                            altText='imagem ilustrativa de plano elaborado'
                            title='Banco de questões'
                            text='O Spark.ia oferece um amplo banco de questões do ENEM, cobrindo todas as áreas do exame. Os estudantes podem acessar as questões, respondê-las e verificar se acertaram, além de conferir a justificativa do item correto, ajudando no entendimento de cada tema abordado.'
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
                        <Button
                            link='/entrar'
                            typeButton='primary'
                            text='Começar agora mesmo!'
                            padding='p-3'
                        />
                    </div>
                </section>
                {/* Seção Sobre nós */}
                <section className="p-6 md:w-full">
                    <h2 className="text-[#011F3B] text-[40px] text-bold text-center">Sobre nós</h2>
                    <hr className="border-t-2 border-[#fa7807] w-48 rounded-lg mx-auto mb-5" />
                    <p className="text-justify text-xl">A Spark.ia é um projeto desenvolvido por alunos do ensino médio da escola EEEP Edson Queiroz, sabidos do quão difícil e requisitada é a vaga na universidade, pensamos em realizar um projeto que atendesse essas necessidades.</p>

                </section>
            </main>
            <Footer />
        </div>
    );
}
