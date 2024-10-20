import Button from "../Button/Button";

export default function Card({ img, altText, title, text, typeCard, link }) {

  const redirect = () => {
    window.location.href = link;
  }

  return (
    <div className="bg-white shadow-2xl rounded-[20px] flex flex-col items-center justify-center h-[500px] md:w-[600px] md:h-[500px] cursor-pointer">
        <div>
            <img src={img} alt={altText} className="h-[200px]"/>
        </div>
        <div className="w-full p-5 flex flex-col justify-center items-center gap-2">
            <h3 className="text=[#011F3B] font-bold text-2xl text-center">{title}</h3>
            <div className="bg-[#fa7807] h-[2px] w-60 md:w-80 m-auto"></div>
            <p className="text-center text-[#818181]">{text}</p>
        </div>
        {
          typeCard == 'inicio' && <Button onClick={redirect} text='Estudar' typeButton='primary' px='px-14' />
        }
    </div>
  )
}
