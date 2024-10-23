import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import imgBlackLogo from "../../assets/imgs/png/blackLogo.png";
import { TypeAnimation } from "react-type-animation";

export default function Mensagem(props) {
  console.log(props.mensagem);

  return (
    <div className="w-4/5 mx-auto flex mt-5">
      <div className="w-8 mx-auto">
        <img
          src={
            props.nome === "Spark"
              ? imgBlackLogo
              : "https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
          }
          className={`w-7 rounded-full ${
            props.nome !== "Spark" && "aspect-square object-cover"
          } mr-4 ml-0.5`}
        />
      </div>
      <div className="w-full ml-1">
        <h2 className="font-bold text-lg">{props.nome}</h2>
        {props.nome === "Spark" ? (
          <TypeAnimation
            sequence={[props.mensagem]}
            wrapper="p"
            cursor={false}
            speed={50}
            repeat={0}
          />
        ) : (
          <Markdown remarkPlugins={[remarkGfm]}>{props.mensagem}</Markdown>
        )}
      </div>
    </div>
  );
}
