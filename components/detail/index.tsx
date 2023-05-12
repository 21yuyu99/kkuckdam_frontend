import Image from "next/image"
import background from "@/public/img/detail/selfManagementBack.png"
import self from "@/public/img/book/selfManagement.png"
import bookMark from "@/public/img/detail/bookMark.png"
import star from "@/public/img/detail/star.png"
import { BookContainer,BookWrapper, BackWrapper, InfoContainer, BookTitle, Tag, BookWriter, IconWrapper, InfoLeftContainer, ReadingTime, InfoRightContaienr } from "./detail.style"
export const BookImgBox = () => {
    return(
        <BookContainer>
            <BackWrapper>
                <Image src={background} alt=""/>
            </BackWrapper>
            <BookWrapper>
                <Image src={self} alt=""/>
            </BookWrapper>
        </BookContainer>
    )
}

export const BookInfoBox = ()=>{
    return(
        <InfoContainer>
            <InfoLeftContainer>
                <BookTitle>
                    데일 카네기 자기 관리론
                </BookTitle>
                <BookWriter>
                    데일 카네기(지은이), 임상훈(옮긴이)
                </BookWriter>
                <IconWrapper>
                    <Image src={bookMark} alt="bookmark"/>
                    50
                    <Image src={star} alt="bookmark"/>
                    41
                </IconWrapper>
            </InfoLeftContainer>
            <InfoRightContaienr>
                <Tag>
                    자기계발
                </Tag>
                <ReadingTime>
                    완독 소요 시간 15분
                </ReadingTime>
            </InfoRightContaienr>
        </InfoContainer>
    )
}