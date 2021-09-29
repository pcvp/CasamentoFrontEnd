import BaseApi from '../../../services/BaseService'
import Style from './index.module.css'
import Link from 'next/link'

export async function getServerSideProps({ query }) {
  const resource = '/presentes'

  const res = await fetch(BaseApi.baseUrl() + resource + '/MarcarPresenteComoNaoDisponivel/' + query.idPresente, {
    method: 'POST',
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

export default function Confirmar() {
  return (
    <div className='d-flex flex-column justify-content-around vh-100'>
      <div className='px-4 text-center mb-1 d-flex flex-column justify-content-between'>
        <p className='fs-3'>Obaa! Agradecemos demais por todo carinho demonstrado.</p>
        <p className='fs-5 my-3'>
          Sempre que olharmos para o seu presente,
          <br /> lembraremos que nosso dia ficou ainda mais especial, graças a você !
        </p>

        <Link href='/home' passHref={true}>
          <button className='btn btn-link text-decoration-none my-5 mx-auto rounded'>Voltar</button>
        </Link>
      </div>
    </div>
  )
}
