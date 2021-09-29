import Link from 'next/link'
import { encode as base64_encode } from 'base-64'
import QRCode from 'react-qr-code'
import BaseApi from '../../../services/BaseService'
import Styles from './index.module.css'

export async function getServerSideProps({ query }) {
  const resource = '/convidado'

  var parametros = {
    Id: parseInt(query.idConvidado),
    EstaraPresente: query.estaraPresente == 'true'
  }

  const res = await fetch(BaseApi.baseUrl() + resource + '/AtualizarPresenca', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(parametros)
  })

  const json = await res.json()

  return {
    props: {
      json: json
    }
  }
}

export default function EtapaFinal({ json }) {
  const convidadoJson = JSON.parse(json)

  const QRCodePayload = base64_encode(JSON.stringify(convidadoJson))

  return (
    <>
      <div
        className={
          'text-center d-flex flex-column justify-content-around vh-100 py-5 mx-2 ' +
          (convidadoJson.EstaraPresente ? undefined : 'd-none')
        }
      >
        <div className='col-12 ps-4 pe-4 fs-3'>Uhul!! Sua presença foi confirmada!</div>

        <div className='col-12 my-3'>
          <QRCode value={QRCodePayload} />
        </div>

        <div className='col-12 fs-5'>Esse QRCode é o seu convite individual, e deverá ser apresentado na recepção.</div>

        <Link href='/home' passHref={true}>
          <span className='btn btn-link btn-sm fs-6 my-2 w-100 text-decoration-none'>Voltar</span>
        </Link>
      </div>

      <div
        className={
          'text-center d-flex flex-column justify-content-around vh-100 py-5 my-5' +
          (convidadoJson.EstaraPresente ? ' d-none' : undefined)
        }
      >
        <div className='col-12 ps-4 pe-4 mt-5 mb-1 fs-3'>
          Poxaaa! Estávamos contando com sua presença, mas pode deixar que iremos comer seu pedaço do bolo
        </div>

        <div className='col-12 mt-5 fs-5'>Caso mude de ideia, você pode confirmar sua presença até dia 06/11</div>

        <Link href='/home' passHref={true}>
          <span className='btn btn-link btn-sm fs-6 my-3 w-100 text-decoration-none'>Voltar</span>
        </Link>
      </div>
    </>
  )
}
