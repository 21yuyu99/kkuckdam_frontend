import { Result } from '@/components/search_result'
import { Main } from '@/styles/home.style'
import { MainTopBar } from '@/components/topBar'
import Head from 'next/head'

export default function search_result() {

  return (
    <>
      <Head>
        <title>꾹담</title>
      </Head>
      <MainTopBar/>
      <Main>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Result/>
        </div>
      </Main>
    </>
  )
}