import { useRouter } from "next/router";
import { Textbook_TopBar } from "@/components/textbook";
import Back from '@/public/img/review/backicon.png'
import MenuBar from '@/public/img/topBar/menuBar.png'
import Image from "next/image";
export default function TextBook(){
    return (
        <>
        <Textbook_TopBar/>
        </>
    )
}