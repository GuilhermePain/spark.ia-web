import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

export function Questions() {
    const [isVisible, setIsVisible] = useState(false);
    const [questão, setQuestão] = useState({});

    useEffect(() => {
        // Simula um tempo de carregamento ou gatilho para exibir o conteúdo
        setTimeout(() => {
            setIsVisible(true);
        }, 100); // 100ms delay antes de mostrar o conteúdo
    }, []);

    const data = document.location.pathname.split("/");

    const prova = data[2];
    const númeroQuestão = parseInt(data[3]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/exam/${prova}/${númeroQuestão}`).then(
            async (res) => setQuestão(await res.json())
        );
    }, []);

    return (
        <div className={`transition-all duration-1000 ease-in-out
         ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Header />
            {questão.alternatives && (
                <main className="w-4/5 mx-auto mt-32 pb-10">
                    <div className="fixed right-12 bottom-10 flex gap-2">
                        <Button
                            typeButton='primary'
                            disabled={númeroQuestão <= 1}
                            onClick={() => {
                                document.location.href = `/enem/${prova}/${númeroQuestão - 1
                                    }`;
                            }}
                            text="Anterior"
                            className="h-12 px-4 py-0"
                        />
                        <Button
                            typeButton='primary'
                            disabled={númeroQuestão >= 180}
                            onClick={() => {
                                document.location.href = `/enem/${prova}/${númeroQuestão + 1
                                    }`;
                            }}
                            text="Próxima"
                            className="h-12 px-4 py-0"
                        />
                    </div>
                    <section>
                        <h1 className="mt-20 font-bold text-4xl">
                            {númeroQuestão}ª questão do ENEM {prova}
                        </h1>
                        {questão.content.split("\n").map((content) => {
                            return <p className="text-justify text-lg">{content}</p>;
                        })}
                        {questão.image && <img src={questão.image} />}
                    </section>
                    <section className="mt-4">
                        {questão.command.split("\n").map((command) => {
                            return <h2 className="font-semibold text-2xl">{command}</h2>;
                        })}
                        <ol>
                            {questão.alternatives.map((alt, ind) => {
                                return (
                                    <li className="text-lg">
                                        {alt.includes("https") && (
                                            <span>
                                                {"ABCDE"[ind]}){" "}
                                                <img className="inline-flex" src={alt} />
                                            </span>
                                        )}
                                        {!alt.includes("https") && (
                                            <span>
                                                {"ABCDE"[ind]}) {alt}
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </section>
                    <hr className="mt-8 border-gray-300" />
                    <section className="flex gap-4">
                        <aside>
                            <h3 className="font-bold text-xl mt-4">Item correto</h3>
                            <p className="text-lg">Opção {questão.answer}</p>
                        </aside>
                        {questão.subjects.length > 0 && (
                            <aside>
                                <h3 className="font-bold text-xl mt-4">Conteúdo</h3>
                                {questão.subjects.map((sub) => {
                                    return <p className="text-lg">{sub}</p>;
                                })}
                            </aside>
                        )}
                    </section>
                    {questão.subject && (
                        <>
                            <hr className="mt-8 border-gray-300" />

                            <section className="mt-4">
                                <h2 className="text-3xl font-bold">Comentário da questão</h2>
                                <p>{questão.subject}</p>
                            </section>
                        </>
                    )}
                </main>
            )}
        </div>
    );
}