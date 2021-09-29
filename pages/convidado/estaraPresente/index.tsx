import Link from 'next/link'
import { useState } from 'react'
import BaseApi from '../../../services/BaseService'
import { useRouter } from 'next/router'

export default function ConfirmacaoDePresenca() {
  const router = useRouter()

  const [estaraPresente, setEstaraPresente] = useState('true')

  const handleChange = e => {
    setEstaraPresente(e.target.value)
  }

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
            <div className='card-title mb-3'>
              Agora nos diga se você poderá estar ou não presente no nosso dia especial.
            </div>
            <div className='input-group mb-3'>
              <div className='col-12'>
                <div className='form-check'>
                  <input
                    className='form-check-input convidado'
                    type='radio'
                    name='estaraPresente'
                    id={'estaraPresente_True'}
                    checked={estaraPresente == 'true'}
                    onChange={handleChange}
                    value='true'
                  />
                  <label className='form-check-label' htmlFor='estaraPresente_True'>
                    Estarei presente
                  </label>
                </div>
              </div>

              <div className='col-12'>
                <div className='form-check'>
                  <input
                    className='form-check-input convidado'
                    type='radio'
                    name='estaraPresente'
                    id='estaraPresente_False'
                    onChange={handleChange}
                    value='false'
                  />
                  <label className='form-check-label' htmlFor='estaraPresente_False'>
                    Infelizmente não
                  </label>
                </div>
              </div>
            </div>

            <div className='d-flex'>
              <Link href='/convidado/confirmacaoDePresenca' passHref={true}>
                <span className='btn btn-link btn-sm fs-6 w-100 mr-1 text-decoration-none'>Voltar</span>
              </Link>
              <Link
                as={estaraPresente == 'true' ? `/convidado/presencaConfirmada` : `/convidado/presencaNaoConfirmada`}
                href={`/convidado/etapaFinal?idConvidado=${router.query.idConvidado}&estaraPresente=${estaraPresente}`}
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
