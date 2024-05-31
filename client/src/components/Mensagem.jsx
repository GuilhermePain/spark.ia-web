export default function Mensagem(props) {
  const formatar = (texto) => {
    const regex = /\*\*(.*?)\*\*/g;
    return texto.replace(regex, (_, p1) => {
      return `<strong className="font-bold">${p1}</strong>`;
    });
  };

  return (
    <div className="w-4/5 mx-auto flex mt-5">
      <div className="w-8 mx-auto">
        <img
          src={
            props.nome === "Spark"
              ? "Mascote.png"
              : "https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
          }
          className={`w-7 rounded-full ${
            props.nome !== "Spark" && "aspect-square object-cover"
          } mr-4 ml-0.5`}
        />
      </div>
      <div className="w-full ml-1">
        <h2 className="font-bold text-lg">{props.nome}</h2>
        <p
          className="text-lg -mt-1"
          dangerouslySetInnerHTML={{ __html: formatar(props.mensagem) }}
        ></p>
      </div>
    </div>
  );
}
