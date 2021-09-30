import Link from 'next/link'
import BaseApi from '../../../services/BaseService'

export async function getServerSideProps(context) {
  const resource = '/presentes'
  const now = Date.now()

  const res = await fetch(BaseApi.baseUrl() + resource + '/ObterPresentes?now=' + now, {
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
  const presentesJson = JSON.parse(json)
  console.log(presentesJson)
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

  return (
    <div className='d-flex flex-column justify-content-around vh-100'>
      <div className='px-4 text-center mb-1 d-flex flex-column justify-content-between'>
        <p className='fs-3'>Nós separamos os links para vocês :)</p>
        <p className='fs-5 my-2'>Mas fiquem a vontade se quiserem comprar em outro lugar.</p>

        <Link href={'/presente/lista?data=' + Date.now()} as='/presente/lista' passHref={true}>
          <a className='btn btn-primary mx-auto rounded' style={{ width: 38 }}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </Link>
      </div>
    </div>
  )
}
