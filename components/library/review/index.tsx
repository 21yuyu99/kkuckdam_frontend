import { ReviewTopBarContainer, Title, BookName, BookText, TextArea, SavedTextBox } from "./review.style";
import Image from "next/image";
import back from '@/public/img/review/backicon.png'
import done from '@/public/img/review/doneicon.png'
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setReviewText } from "@/store/library";
import { useEffect } from "react";
export const ReviewTopBar = ({title,writing}:{title:string,writing:boolean}) => {
    const reviewText:string = useAppSelector((state) => state.reviewText);
    const onClickCheckHandler = () =>{
        localStorage.setItem("reviewText", reviewText);
    }
    return (
        <ReviewTopBarContainer>
            <Link href="/library"><Image src={back} alt="뒤로가기" width={24}/></Link>
            <Title>{title}</Title>
            {
                writing==true?<Link href="/library"><Image src={done} alt="완료" width={24} onClick={()=>onClickCheckHandler()}/></Link>:
                <Link href="/library/review?writing=true"><p>수정</p></Link>
            }
        </ReviewTopBarContainer>
    )
}

export const BookInfo = () => {
    
    return (
        <BookName>
            <BookText>&lt;자기관리론&gt; 데일 카네기</BookText>
        </BookName>
    )
}

export const TextBox = (writing:{writing:boolean}) => {
    const reviewText:string = useAppSelector((state) => state.reviewText);
    const dispatch = useAppDispatch();
    console.log(writing);
    useEffect(()=>{
        writing.writing==false?dispatch(setReviewText(localStorage.getItem("reviewText"))):"";
    });
    return (
        <>
        {writing.writing == true?
        <TextArea value = {reviewText} onChange={(e)=>dispatch(setReviewText(e.target.value))} placeholder="여기에 서평을 작성하세요!"/>
        :
        <SavedTextBox>{reviewText}</SavedTextBox>
        }
        </>
    )
}