import Link from 'next/link'
import { useState } from 'react'

export default function ConfirmacaoDePresenca() {
  const [nome, setNome] = useState('')

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
            <div className='input-group mb-3'>
              <input
                type='text'
                className='form-control input-nome'
                aria-label='Nome'
                aria-describedby='input-nome'
                placeholder='Digite seu nome'
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
            </div>
            <div className='d-flex'>
              <Link href='/' passHref={true}>
                <span className='btn btn-link btn-sm fs-6 w-100 mr-1 text-decoration-none'>Voltar</span>
              </Link>
              <Link
                passHref={true}
                as={nome.length > 0 ? `/convidado/pesquisarNome/${nome}` : ''}
                href={nome.length > 0 ? `/convidado/pesquisarNome?nome=${nome}` : ''}
              >
                <span className='btn btn-primary btn-sm fs-6 w-100 ml-1 pesquisar-button'>Pesquisar</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
