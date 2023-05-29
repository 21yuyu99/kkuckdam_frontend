import { ReviewTopBarContainer, Title, BookName, BookText, TextArea } from "./review.style";
import Image from "next/image";
import Back from '@/public/img/review/backicon.png'
import Done from '@/public/img/review/doneicon.png'
import Link from "next/link";
import { useState } from "react";

export const Review_TopBar = () => {
    return (
        <ReviewTopBarContainer>
            <Link href="/library"><Image src={Back} alt="뒤로가기" width={24}/></Link>
            <Title>나만의 서평 작성</Title>
            <Image src={Done} alt="완료" width={24}/>
        </ReviewTopBarContainer>
    )
}

export const Book_Info = () => {
    
    return (
        <BookName>
            <BookText>&lt;자기관리론&gt; 데일 카네기</BookText>
        </BookName>
    )
}

export const Text_Area = () => {
    const [text,setText] = useState("");
    return (
        <TextArea value = {text} onChange={(e)=>setText(e.target.value)} placeholder="여기에 서평을 작성하세요!"/>
    )
}