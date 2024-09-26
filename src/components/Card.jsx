export default function Card({ img, altText, title, text }) {
  return (
    <div className="bg-white rounded-[20px] flex flex-col items-center justify-center md:w-[600px] md:h-[500px]">
        <div>
            <img src={img} alt={altText} className="h-[200px]"/>
        </div>
        <div className="w-full p-5 flex flex-col justify-center items-center gap-2">
            <h3 className="text=[#011F3B] font-bold text-2xl text-center">{title}</h3>
            <hr className="border-[#fa7807] opacity-30 w-80 m-auto"/>
            <p className="text-center text-[#818181]">{text}</p>
        </div>
    </div>
  )
}
