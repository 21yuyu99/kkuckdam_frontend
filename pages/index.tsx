import { MainBanner } from '@/components/banner'
import { BottomBar } from '@/components/bottomBar'
import { Category } from '@/components/category'
import { Recommend } from '@/components/recommend'
import { MainTopBar } from '@/components/topBar'
import { changeBottomState } from '@/store/bottomBar'
import { useAppDispatch } from '@/store/hooks'
// import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Main } from '@/styles/home.style'
import Head from 'next/head'
// import { addHeartColor} from '@/store/test'

export default function Home() {
  // const heart = useAppSelector((state) =>state.heart);
  // const dispatch = useAppDispatch();
  // const onClick = ()=>{
  //   dispatch(addHeartColor());
  // }
  const dispatch = useAppDispatch();
  dispatch(changeBottomState("home"));
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
      </Main>
      <BottomBar/>
    </>
  )
}