import BaseApi from '../../../services/BaseService'
import style from './index.module.css'
import Link from 'next/link'

export async function getServerSideProps({ query }) {
  const resource = '/presentes'

  const res = await fetch(BaseApi.baseUrl() + resource + '/ObterPresente?idPresente=' + query.idPresente)
  const json = await res.json()

  return {
    props: {
      json: json
    }
  }
}

export default function listaDePresentes({ json }) {
  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const presente = JSON.parse(json)

  return (
    <div className='col-12 vh-100 flex-column justify-content-around py-5 my-5 col-md-4 mx-auto'>
      <div className='card mx-2'>
        <img
          src={presente.UrlDaImagem}
          className={style.imagemPresente + ' card-img-top img-fluid'}
          alt='Imagem do presente'
        />
        <div className='card-body'>
          <h5 className={style.cardTitle + ' card-title fw-bold fs-4'}>{presente.Titulo}</h5>
          <div className='d-flex justify-content-between align-items-baseline'>
            <h6 className='card-text fs-5'>{currencyFormatter.format(presente.Preco)}</h6>
          </div>
        </div>

        <div className='d-flex'>
          <Link href={presente.UrlDaLoja} passHref={true}>
            <button className='btn btn-link mx-auto rounded mb-3 text-decoration-none'>Visitar loja</button>
          </Link>
          <Link href={'/presente/confirmar?idPresente=' + presente.Id} passHref={true}>
            <button className='btn btn-primary mx-auto rounded mb-3'>Escolher esse!</button>
          </Link>
        </div>
      </div>
      <div className='mt-5'>
        <Link href='/presente/lista' passHref={true}>
          <span className='btn btn-link btn-sm fs-6 w-100 mr-1 mt-5 text-decoration-none'>Voltar</span>
        </Link>
      </div>
    </div>
  )
}
