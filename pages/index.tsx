import { MainBanner } from '@/components/banner'
import { Category } from '@/components/category'
import { MainTopBar } from '@/components/topBar'
import { SearchBar } from '@/components/topBar/searchBar'
import { Main } from '@/styles/home.style'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>꾹담</title>
      </Head>
      <MainTopBar/>
      <Main>
        <MainBanner/>
        <Category/>
      </Main>
    </>
  )
}