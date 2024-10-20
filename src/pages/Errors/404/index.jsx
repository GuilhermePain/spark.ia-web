import img404 from "../../../assets/imgs/svg/imgs/404.svg";
import Button from "../../../components/Button/Button";
import Header from "../../../components/Header/Header";

export function Error404() {
  return (
    <>
      <Header />
      <main className="w-4/5 mx-auto">
        <h1 className="font-bold text-3xl text-center mx-auto mt-32">
          Algo de errado não está certo!
        </h1>
        <p className="text-center text-xl">
          Parece que não conseguimos encontrar a página que você estava
          procurando.
        </p>
        <div className="w-fit mx-auto mt-2">
          <Button
            onClick={() => (document.location.href = "/")}
            text="Voltar para o início"
            typeButton="primary"
          />
        </div>

        <img
          className="w-full sm:w-3/5 md:w-1/2 lg:w-[33%] mt-4 mx-auto"
          src={img404}
        />
      </main>
    </>
  );
}
