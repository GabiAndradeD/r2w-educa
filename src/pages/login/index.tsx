import * as S from './style'
import * as C from 'components'
import Head from 'next/head'
import Dashboard from 'layouts/Dashboard'
import { useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    mode: 'onChange'
  })

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
              register={register('text')}
              error={errors.text?.message}
              onBlur={() => trigger('text')}
            />

            <C.InputOutlined
              id="text"
              type="text"
              label="Sobrenome"
              register={register('text')}
              error={errors.text?.message}
              onBlur={() => trigger('text')}
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

Login.Layout = Dashboard