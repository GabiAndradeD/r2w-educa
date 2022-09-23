import * as S from './style'
import * as C from 'components'
import Head from 'next/head'
import Common from 'layouts/Common'
import { useForm } from 'react-hook-form'

// type Inputs = {
//   email: string
//   password: string
// }

export default function Login() {

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <S.Container>
        <C.LayoutAuthentication
          description="Faça login para iniciar a sua sessão"
        >
          <S.Form onSubmit={() => 'Função ao submeterubmit'}>
            <C.InputOutlined
              id="text"
              type="text"
              label="Primeiro Nome"
            />

            <C.InputOutlined
              id="text"
              type="text"
              label="Sobrenome"
            />

            <C.Button
              text="Entrar"
              color="default"
              fullWidth={true}
              size="small"
              aria-label="Entrar na conta"
              icon={<S.IconSignIn />}
            />
          </S.Form>
        </C.LayoutAuthentication>
      </S.Container>
    </>
  )
}

Login.Layout = Common