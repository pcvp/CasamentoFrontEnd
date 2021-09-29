import Image from 'next/image'
import CoracaoImage from './../../public/Images/Coracao.png'
import Style from './index.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='d-flex flex-column justify-content-around vh-100'>
      <div className='px-4 text-center mb-1 fs-3 fs-md-4 d-flex flex-column justify-content-between'>
        Venha fazer parte do lindo momento em que diremos
        <div className='pt-2 pb-2 fs-2 fs-md-3'>Sim</div>
        diante de Deus e todos os nossos amigos e familiares
      </div>
      <div
        className={
          Style.containerOpcoesConvite + ' px-4 text-center mb-1 fs-3 fs-md-4 d-flex justify-content-between flex-wrap'
        }
      >
        <a href='https://goo.gl/maps/MkNGuRQhvXNjywGz8' className='link col-6 col-md-3 d-flex flex-column fs-6 fs-md-5'>
          <i className={Style.icone + ' fal fa-church'}></i>
          Cerimônia
        </a>
        <a
          href='https://goo.gl/maps/psqLDu2kwh8HLEi79'
          className='link col-6 col-md-3 mt-md-5 d-flex flex-column fs-6 fs-md-5'
        >
          <i className={Style.icone + ' fal fa-birthday-cake icone'}></i>
          Recepção
        </a>

        <Link href='/presente/apresentacao' passHref>
          <div className='link col-6 col-md-3 mt-4 mt-md-5 d-flex flex-column fs-6 fs-md-5'>
            <i className={Style.icone + ' fal fa-gift icone'}></i>
            Lista de presentes
          </div>
        </Link>

        <Link href='/convidado/confirmacaoDePresenca' passHref>
          <div className='link col-6 col-md-3 mt-4 mt-md-0 d-flex flex-column fs-6 fs-md-5'>
            <i className={Style.icone + ' fal fa-laptop icone'}></i>
            Confirmação de presença
          </div>
        </Link>
      </div>

      <div className='p-md-4 text-center'>
        <div className={Style.nomeNoivos + ' col-12 mt-md-0'}>Paulo e Fabiana</div>
        <div className={Style.dataCasamento + ' col-12 d-flex justify-content-center  mt-2 ps-1 pe-1'}>
          <span className='mx-2'>13.11.2021</span>
          <Image alt='Flores' src={CoracaoImage} loading='eager' width={45} height={37} />
          <span className='mx-2'>18:00 horas</span>
        </div>
      </div>
    </div>
  )
}
