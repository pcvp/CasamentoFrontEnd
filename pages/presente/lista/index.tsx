import BaseApi from '../../../services/BaseService'
import style from './index.module.css'
import Link from 'next/link'

export async function getStaticProps() {
  const resource = '/presentes'

  const res = await fetch(BaseApi.baseUrl() + resource + '/ObterPresentes?now=' + Date.now(), {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
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
  const presentesJson = JSON.parse(json)

  if (presentesJson.length == 0) {
    return (
      <div className='d-flex flex-column justify-content-around vh-100'>
        <div className='px-4 text-center mb-1 d-flex flex-column justify-content-between'>
          <p className='fs-3'>Agradecemos demais por todo carinho demonstrado.</p>
          <p className='fs-5 my-3'>
            Mas parece que já escolheram todos os presentes que nós adicionamos na lista \o/
            <br />
            Agora é com você! Nos faça uma surpresa com algo que a gente não esperava!
          </p>

          <Link href='/home' passHref={true}>
            <button className='btn btn-link text-decoration-none my-5 mx-auto rounded'>Voltar</button>
          </Link>
        </div>
      </div>
    )
  }

  const presentes = presentesJson.map((item, i) => {
    return (
      <div className='col-6 col-sm-4 col-md-3 mb-2 mt-2' key={item.Id}>
        {/* <a href={item.UrlDaLoja} target='_blank' rel='noreferrer'> */}
        <div className='card'>
          <img
            src={item.UrlDaImagem}
            className={style.imagemPresente + ' card-img-top img-fluid'}
            alt='Imagem do presente'
          />
          <div className='card-body'>
            <h5 className={style.cardTitle + ' card-title fw-bold fs-4'}>{item.Titulo}</h5>
            <div className='d-flex justify-content-between align-items-baseline'>
              <h6 className='card-text fs-5'>{currencyFormatter.format(item.Preco)}</h6>
            </div>
          </div>
          <Link href={'/presente/visualizar?idPresente=' + item.Id} passHref={true}>
            <button className='btn btn-primary mx-auto rounded mb-3'>Ver detalhes</button>
          </Link>
        </div>
      </div>
    )
  })

  const container = (
    <div className={style.overflowXHidden + ' py-5 mx-2'}>
      <div className='row'>{presentes}</div>
    </div>
  )
  return container
}
