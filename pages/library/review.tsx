import { Main } from '@/styles/home.style'
import { BottomBar } from '@/components/bottomBar'
import { Review_TopBar, Book_Info, Text_Area } from '@/components/review'

import Head from 'next/head'

export default function Review() {
    return (
      <>
        <Head>
            <title>꾹담</title>
        </Head>
        <Main>
            <Review_TopBar/>
            <Book_Info/>
            <Text_Area/>
            <BottomBar/>
        </Main>
      </>
    )
  }