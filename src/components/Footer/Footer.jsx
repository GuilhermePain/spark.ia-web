import imgLogoSpark from '../../assets/imgs/png/whiteLogo.png';
import Button from '../Button/Button';
import iconEmail from '../../assets/imgs/svg/icons/iconEmail.svg';
import iconInstagram from '../../assets/imgs/svg/icons/iconInstagram.svg';

function Footer() {
  return (
    <footer className='w-full flex flex-col bg-[#011F3B] p-5 gap-4'>
      <section className='flex flex-col md:flex-row md:w-full md:justify-evenly md:items-center gap-2'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex- items-center gap-3'>
            <img src={imgLogoSpark} alt="logo spark.ia" className='w-10' />
            <h1 className='text-2xl text-white font-bold'>Spark.ia</h1>
          </div>
          <div className='text-white'>
            <div className='flex gap-2'>
              <img src={iconEmail} alt="" />
              <p>spark-ia@gmail.com</p>
            </div>
            <div className='flex gap-2'>
              <img src={iconInstagram} alt="" />
              <p>spark.ia</p>
            </div>
          </div>
        </div>
        <div className='bg-white h-[2px]'></div>
        <div>
          <ul className='text-white'>
            <li>Início</li>
            <li>Funcionalidades</li>
            <li>Sobre nós</li>
          </ul>
        </div>
        <div className='bg-white h-[2px]'></div>
        <div>
          <p className='text-white text-[22px] mb-2 font-bold'>Transforme seus <br />estudos com Spark.ia</p>
          <Button
          typeButton='primary'
            text='Cadastre-se agora!'
            padding='p-3'
          />
        </div>
      </section>
      <div className='bg-[#FA7807] h-[2px] text-white text-center mb-6'>
        <p className='pt-3'>&copy; Spark.ia - 2024</p>
      </div>
    </footer>
  )
}

export default Footer