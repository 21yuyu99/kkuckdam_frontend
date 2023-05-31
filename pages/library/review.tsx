import { Main } from '@/styles/home.style'
import { BottomBar } from '@/components/bottomBar'
import { ReviewTopBar,BookInfo, TextBox } from '@/components/library/review'

import Head from 'next/head'
import { useRouter } from 'next/router';

export default function Review() {
  const router = useRouter();
    return (
      <>
        <Head>
            <title>꾹담</title>
        </Head>
        <Main>
          {router.query['writing'] == "true"?
          <>
          <ReviewTopBar title="나만의 서평 작성" writing={true}/>
          <BookInfo/>
          <TextBox writing={true}/>
          </>
            :
          <>
          <ReviewTopBar title="나만의 서평" writing={false}/>
          <BookInfo/>
          <TextBox writing={false}/>
          </>
          }
            <BottomBar/>
        </Main>
      </>
    )
  }