import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


export function Questions() {
  const [isVisible, setIsVisible] = useState(false);
  const [questão, setQuestão] = useState({});
  const [mostrarComentario, setMostrarComentario] = useState(false);

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
    fetch(`https://spark-ia.duckdns.org/api/exam/${prova}/${númeroQuestão}`).then(
      async (res) => setQuestão(await res.json())
    );
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <Header />
      {questão.alternatives && (
        <main className="w-4/5 mx-auto mt-32 pb-10">
          <div className="fixed right-8 bottom-10 flex gap-2">
            <Button
              typeButton="primary"
              disabled={númeroQuestão <= 1}
              onClick={() => {
                document.location.href = `/enem/${prova}/${númeroQuestão - 1}`;
              }}
              text={<FaArrowLeft />}
              className="h-12 px-4 py-0"
            />
            <Button
              typeButton="primary"
              disabled={númeroQuestão >= 180}
              onClick={() => {
                document.location.href = `/enem/${prova}/${númeroQuestão + 1}`;
              }}
              text={<FaArrowRight />}
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
                  <li className="text-lg" key={ind}>
                    {alt.includes("https") ? (
                      <span>
                        {"ABCDE"[ind]}) <img className="inline-flex" src={alt} />
                      </span>
                    ) : (
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
              <h3 className="font-bold text-xl mt-4">Resposta</h3>
              <p className="text-lg">
                item {" "}
                {!mostrarComentario && (
                  <>
                    <span className="text-[#FA7807]" onClick={() => setMostrarComentario(true)}>(Exibir)</span>
                  </>
                )}
              </p>
            </aside>
          </section>
          {mostrarComentario && (
            <section className="mt-2">
              <h2 className="text-2xl font-bold">Comentário da questão</h2>
              <TypeAnimation
                sequence={[questão.comment, 500]} // A animação exibe o comentário
                speed={50} // Velocidade de digitação
                wrapper="p"
                className="text-lg"
              />            </section>
          )}
        </main>
      )}
    </div>
  );
}
