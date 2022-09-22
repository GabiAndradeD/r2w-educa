import { Fragment } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store/configStore'
import GlobalStyles from 'styles/GlobalStyles'
import 'styles/loading.css'
import { Page } from 'types/page'
import * as C from 'components'


type Props = AppProps & { Component: Page }

export default function App({ Component, pageProps }: Props) {
  const Layout = Component.Layout || Fragment

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<C.Load />} persistor={persistor}>
          <Layout>
            <Head>
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
              />
              <title>R2W Educa</title>
            </Head>
            <Component {...pageProps} />
            <GlobalStyles />
          </Layout>
          <C.WarnPortrait />
        </PersistGate>
      </Provider>
      {/* <C.VLibras /> */}
    </>
  )
}
