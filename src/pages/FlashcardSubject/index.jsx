import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const FlashcardSubject = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pergunta, setPergunta] = useState({});
  const [resposta, setResposta] = useState("");
  const [mostrar, setMostrar] = useState(false);

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
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://spark-ia.duckdns.org/api/flashcard/${flashcard}/${numeroPergunta}`
        );

        if (!res.ok) {
          // Se a resposta não for 200 OK, verifica se é 404 e redireciona
          if (res.status === 404) {
            document.location.href = "/flashcard";
          } else {
            throw new Error("Erro ao buscar a pergunta");
          }
        }

        const perguntaData = await res.json();
        setPergunta(perguntaData);
      } catch (error) {
        console.error("Erro ao carregar os dados do flashcard:", error);
      }
    };

    fetchData();
  }, [flashcard, numeroPergunta]);

  const mostrarResposta = () => {
    setResposta(pergunta.content);
    setMostrar(true);
  };

  const proximaPergunta = () => {
    document.location.href = `/flashcard/${flashcard}/${numeroPergunta + 1}`;
  };

  return (
    <div
      className={`h-full transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header />
      <main className="py-24 px-10">
        <h1 className="text-3xl font-bold">{pergunta.title}</h1>
        <hr className="border-[#fa7807] border-[2px] mt-3" />
        {!mostrar ? (
          <div className="flex justify-center items-center mt-5">
            <Button
              text="Mostrar Resposta"
              typeButton="primary"
              onClick={mostrarResposta}
            />
          </div>
        ) : (
          <div className="mt-5">
            <TypeAnimation
              sequence={[resposta]}
              wrapper="p"
              cursor={false}
              speed={99}
              repeat={0}
            />
            <div className="w-full flex justify-between md:justify-end items-center md:gap-2 gap-8 mt-5">
              <Button
                text="Errei"
                width="w-[200px]"
                onClick={proximaPergunta}
              />
              <Button
                text="Acertei"
                typeButton="primary"
                width="w-[200px]"
                onClick={proximaPergunta}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default FlashcardSubject;
