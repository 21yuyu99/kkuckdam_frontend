import Image from "next/image"
import background from "@/public/img/detail/selfManagementBack.png"
import self from "@/public/img/book/selfManagement.png"
import bookMark from "@/public/img/detail/bookMark.png"
import star from "@/public/img/detail/star.png"
import up from "@/public/img/detail/up.png"
import down from "@/public/img/detail/down.png"
import { BookContainer,BookWrapper, BackWrapper, BookInfoContainer, BookTitle, Tag, BookWriter, IconWrapper, InfoLeftContainer, ReadingTime, InfoRightContaienr, ReadingInfoContainer, HashTagContainer, SummaryContainer, SummaryTitle, SummaryContent, SummaryFullBtn} from "./detail.style"
import { changeSummaryState } from "@/store/detail"
import { useAppDispatch, useAppSelector } from '@/store/hooks'
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
    <>
        <BookInfoContainer>
            <InfoLeftContainer>
                <BookTitle>
                    데일 카네기 자기 관리론
                </BookTitle>
                <BookWriter>
                    데일 카네기(지은이), 임상훈(옮긴이)
                </BookWriter>
            </InfoLeftContainer>
            <InfoRightContaienr>
                <Tag color="red">
                    자기계발
                </Tag>
            </InfoRightContaienr>
        </BookInfoContainer>
        <ReadingInfoContainer>
            <IconWrapper>
             <Image src={bookMark} alt="bookmark"/>
                <p>50</p>
            <Image src={star} alt="bookmark"/>
                <p>41</p>
            </IconWrapper>
            <ReadingTime>
                완독 소요 시간 15분
            </ReadingTime>
        </ReadingInfoContainer> 
    </>
    )
}

export const BookHashTag = () => {
    return(
        <HashTagContainer>
        <Tag>힘든 일이 한번에 닥칠 때</Tag>
        <Tag>논픽션</Tag>
        <Tag>베스트셀러</Tag>
        <Tag>고전</Tag>
        <Tag>워런 버핏 Pick</Tag>
        <Tag>걱정 해소법</Tag>
        </HashTagContainer>
    )
}
export const Summary = () =>{
    const summaryState:boolean = useAppSelector((state) => state.readSummary);
    const dispatch = useAppDispatch();
    const onClick = ()=>{
      dispatch(changeSummaryState());
    }
    return(
        <SummaryContainer open={summaryState}>
            <SummaryTitle>
                내용요약
            </SummaryTitle>
            <SummaryContent>
            베스트셀러 『인간관계론』 저자인 데일 카네기는 성인들에게 화술과 인간관계를 가르치는 동안 ‘걱정’이 모든 인생 문제의 주원인이자 자기관리의 핵심 요소임을 깨달았다. 그래서 ‘걱정을 멈추고 새로운 인생을 사는 법’을 교육하기로 마음먹었다. 하지만 문제가 생겼다. 교과서로 삼기에 적합한 책을 찾을 수 없었던 것이다. 결국 직접 쓸 수밖에 없었다. 이것이 또 한 권의 세계적인 베스트셀러가 탄생하게 된 배경이다.
            </SummaryContent>
            <SummaryFullBtn onClick={onClick}>
                {summaryState==false?<Image src={down} alt="자세히 보기" width={20} height={13}/>:<Image src={up} alt="닫기" width={20} height={13}/>}
            </SummaryFullBtn>
        </SummaryContainer>
    )
}