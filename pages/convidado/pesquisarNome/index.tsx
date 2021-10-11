import Link from 'next/link'
import { useState } from 'react'
import BaseApi from '../../../services/BaseService'

export async function getServerSideProps({ query }) {
  const resource = '/convidado'

  const res = await fetch(BaseApi.baseUrl() + resource + '/ObterConvidadosPeloNome?nome=' + query.nome, {
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

export default function ConfirmacaoDePresenca({ json }) {
  const convidadosJson = JSON.parse(json)
  const [convidadoSelecionado, setConvidadoSelecionado] = useState(-1)

  const handleChange = e => {
    setConvidadoSelecionado(e.target.value)
  }

  const convidados = convidadosJson.map((item, i) => {
    return (
      <div className='col-12' key={item.Id}>
        <div className='form-check'>
          <input
            className='form-check-input convidado'
            type='radio'
            name='convidado'
            id={'convidado_' + item.Id}
            onChange={handleChange}
            value={item.Id}
          />
          <label className='form-check-label' htmlFor={'convidado_' + item.Id}>
            {item.Nome}
          </label>
        </div>
      </div>
    )
  })

  return (
    <div className='my-5 py-2 mx-2'>
      <div className='px-4 d-flex flex-column justify-content-between text-center'>
        <div className='mb-1 fs-3'>Vem com a gente ou vai perder a festa?</div>
        <div className='pt-2 pb-2 fs-5 fs-md-3'>
          Para confirmar a sua presença no casamento só precisa escrever o seu nome e clicar em Pesquisar. Aparecerá o
          seu nome e só terá que dizer se estará ou não no casamento : )
        </div>
      </div>
      <div className='row-pesquisa-convidados'>
        <div className='col-12 col-sm-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4 mb-5 mt-4 pesquisa'>
          <div className='card p-3'>
            <div className={convidados.length > 0 ? 'card-title mb-3' : 'd-none'}>Por favor, selecione seu nome</div>
            <div className={convidados.length == 0 ? 'card-title my-5 text-center' : 'd-none'}>
              Infelizmente não foi possível encontrar seu nome na lista.
            </div>
            <div className='input-group mb-3'>{convidados}</div>

            <div className='d-flex'>
              <Link href='/convidado/confirmacaoDePresenca' passHref={true}>
                <span className='btn btn-link btn-sm fs-6 w-100 mr-1 text-decoration-none'>Voltar</span>
              </Link>
              <Link
                as={convidadoSelecionado > -1 ? `/convidado/estaraPresente` : '#'}
                href={convidadoSelecionado > -1 ? `/convidado/estaraPresente?idConvidado=${convidadoSelecionado}` : '#'}
                passHref={true}
              >
                <span className='btn btn-primary btn-sm fs-6 w-100 ml-1 pesquisar-button'>Continuar</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
