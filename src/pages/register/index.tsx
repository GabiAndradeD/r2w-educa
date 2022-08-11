import * as S from './style'
import * as C from 'components'
import Head from 'next/head'
import Dashboard from 'layouts/Dashboard'
import { useForm } from 'react-hook-form'

type Inputs = {
  email: string
  password: string
}

export default function Register() {
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
        <title>Register</title>
      </Head>
      <S.Container>
        <C.LayoutAuthentication
          description="Preencha alguns dados para criar sua conta."
        >
          <S.Form onSubmit={() => 'Função ao submeter'}>
            <S.inputLine>
              <C.InputOutlined
                id="primeiro-nome"
                type="text"
                label="Primeiro Nome"
                register={register('email')}
                error={errors.email?.message}
                onBlur={() => trigger('email')}
              />
              <S.divider />
              <C.InputOutlined
                id="sobrenome"
                type="text"
                label="Sobrenome"
                register={register('email')}
                error={errors.email?.message}
                onBlur={() => trigger('email')}
              />
            </S.inputLine>
            <C.InputOutlined
              id="email"
              type="email"
              label="E-mail"
              register={register('email')}
              error={errors.email?.message}
              onBlur={() => trigger('email')}
              icon={<S.IconEmail />}
            />
            <S.inputLine>
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
              <S.divider />
              <C.InputOutlined
                id="password"
                type="password"
                label="Repetir Senha"
                register={register('password')}
                error={errors.password?.message}
                onBlur={() => trigger('password')}
                icon={<S.IconPassword />}
                changeVisibiltyPassword={true}
              />
            </S.inputLine>
            <C.Button
              text="Registrar"
              color="default"
              fullWidth={true}
              size="small"
              aria-label="Registrar"
              icon={<S.IconSignIn />}
            />
          </S.Form>
        </C.LayoutAuthentication>
      </S.Container>
    </>
  )
}

Register.Layout = Dashboard