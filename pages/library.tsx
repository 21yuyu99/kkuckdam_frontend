import { Main } from '@/styles/home.style'
import { KkukBanner } from '@/components/library/kkuck'
import {ToggleBtn} from '@/components/library/toggleBtn'
import {BookShelf, EmptyBookShelf} from '@/components/library/bookshelf'
import {ReviewBanner} from '@/components/library/reviewbanner'
import {UserReadBookList} from '@/components/library/readbook'
import {BottomBar} from '@/components/bottomBar'
import Head from 'next/head'
import { BottomMargin, Margin } from '@/styles/library.style'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Report } from '@/components/library/report'
import { changeBottomState } from '@/store/bottomBar'

export default function library() {
  const toggleState:string = useAppSelector((state)=>state.toggleState);
  const dispatch = useAppDispatch();
   dispatch(changeBottomState("library"));
  return (
    <>
      <Head>
        <title>꾹담</title>
      </Head>
      <Main>
        <KkukBanner/>
        <ToggleBtn/>
        {toggleState == "library"?
        <>
          <BookShelf/>
          <EmptyBookShelf/>
          <Margin/>
          <ReviewBanner/>    
        </>
        :
        <>
        <Report/>
        </>
        }      
        <UserReadBookList/>
        <BottomBar/>
        <BottomMargin/>
      </Main>
    </>
  )
}