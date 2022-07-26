import Head from 'next/head'
import * as S from 'styles'
import * as C from 'components'
import Dashboard from 'layouts/Dashboard'


export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <S.Container />
    </>
  )
}

Home.Layout = Dashboard