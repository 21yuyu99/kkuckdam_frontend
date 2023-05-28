import { Main } from '@/styles/home.style'
import { KkukBanner } from '@/components/library/kkuck'
import {Nav} from '@/components/library/toggleBtn'
import {ReviewBanner} from '@/components/library/reviewbanner'
import {UserReadBookList} from '@/components/library/lib_userreadbook'
import {BottomBar} from '@/components/bottomBar'
import {Report} from '@/components/report'
import Head from 'next/head'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function library_report() {
  return (
    <>
      <Head>
        <title>꾹담</title>
      </Head>
      <Main>
        <KkukBanner/>
        <Nav/>
        <Report/>
        <UserReadBookList/>
        <BottomBar/>
      </Main>
    </>
  )
}