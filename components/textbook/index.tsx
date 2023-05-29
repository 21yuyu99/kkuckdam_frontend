import { TextbookTopBar } from "./textbook.style"
import Back from '@/public/img/review/backicon.png'
import MenuBar from '@/public/img/topBar/menuBar.png'
import Image from "next/image";

export const Textbook_TopBar = () => {
    return (
        <TextbookTopBar>
            <Image src={Back} alt="뒤로가기" width={24}/>
            <Image src={MenuBar} alt="더보기" width={24}/>
        </TextbookTopBar>
    )
}