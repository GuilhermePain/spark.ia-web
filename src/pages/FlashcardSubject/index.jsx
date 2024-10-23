import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { TypeAnimation } from "react-type-animation";

const FlashcardSubject = () => {
  return (
    <div className="h-full">
      <Header />
      <main className="py-24 px-10">
        <h1 className="text-3xl font-bold">Química</h1>
        <hr className="border-[#fa7807] border-[2px] mt-3" />
        <div className="mt-4 text-xl">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, excepturi. Voluptatum voluptatibus, quibusdam pariatur veritatis odio aliquid, rem id eum possimus sint error eius vero. Dolorem sed animi nisi quasi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium debitis, id reiciendis beatae recusandae voluptates fuga esse fugit error illum consectetur quas rerum eaque veniam necessitatibus alias, soluta aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quae necessitatibus, dolore consequuntur minus veritatis hic sed magnam at atque. Voluptas error eum nobis aut? Ut vitae omnis error architecto!</p>
        </div>
        <div className="w-full flex justify-between md:justify-end items-center md:gap-2 gap-8 mt-5">
          <Button text='Errei' width='w-[200px]' />
          <Button text='Acertei' typeButton='primary' width='w-[200px]' />
        </div>
      </main>
    </div>
  )
}

export default FlashcardSubject;