import { MainBanner } from '@/components/banner'
import { BottomBar } from '@/components/bottomBar'
import { Category } from '@/components/category'
import { ForYouBook, Recommend } from '@/components/recommend'
import { MainTopBar } from '@/components/topBar'
import { SearchBar } from '@/components/topBar/searchBar'
import { Main } from '@/styles/home.style'
import Head from 'next/head'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function Home() {
//   const test = useSelector((state) => {
//     return state.test;
//  });
// useEffect(()=>{
//   console.log(test);
// });
  return (
    <>
      <Head>
        <title>꾹담</title>
      </Head>
      <MainTopBar/>
      <Main>
        <MainBanner/>
        <Category/>
        <Recommend/>
        <BottomBar/>
      </Main>
    </>
  )
}