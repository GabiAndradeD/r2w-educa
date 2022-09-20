import * as S from 'styles'
import Head from 'next/head'
import Common from 'layouts/Common'
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
        <p>Página Inicial</p>
      </S.Container>
    </>
  )
}

Home.Layout = Common