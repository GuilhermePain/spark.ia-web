export default function Mensagem(props) {
  return (
    <div className="w-4/5 mx-auto flex mt-5">
      <div className="w-8 mx-auto">
        <img src="Mascote.png" className="w-6 mr-4 ml-0.5" />
      </div>
      <div className="w-full ml-1">
        <h2 className="font-bold text-lg">{props.nome}</h2>
        <p className="text-lg -mt-1">{props.mensagem}</p>
      </div>
    </div>
  );
}
