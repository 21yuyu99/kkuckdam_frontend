import { Main } from '@/styles/home.style'
import Head from 'next/head'
import { Genre } from '@/components/genre'

export default function selectGenre() {
    return (
        <>
            <Head>
                <title>꾹담</title>
            </Head>
            <Main>
                <Genre/>
            </Main>
        </>
    )
}