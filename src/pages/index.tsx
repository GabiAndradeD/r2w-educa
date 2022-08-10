import * as S from 'styles'
import * as C from 'components'
import Head from 'next/head'
import Dashboard from 'layouts/Dashboard'
import { useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

export default function Home() {
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
        <title>Página Inicial</title>
      </Head>
      <S.Container>
        <C.LayoutAuthentication
          description="Faça login para iniciar a sua sessão"
        >
          <S.Form onSubmit={() => 'Função ao submeterubmit'}>
            <C.InputOutlined
              id="email"
              type="email"
              label="E-mail"
              register={register('email')}
              error={errors.email?.message}
              onBlur={() => trigger('email')}
              icon={<S.IconEmail />}
            />

            <C.InputOutlined
              id="password"
              type="password"
              label="Senha"
              register={register('password')}
              error={errors.password?.message}
              onBlur={() => trigger('password')}
              icon={<S.IconPassword />}
              changeVisibiltyPassword={true}
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

Home.Layout = Dashboard