import { PadContainer, Pad, Container, ContentContainer, TextbookTopBarContainer, EmptyComponent, Title, Content, Box, BoxBottomContainer, LeftBox, RightBox, BigText, SmallText, ImageWrapper } from "./textbook.style"
import Back from '@/public/img/review/backicon.png'
import MenuBar from '@/public/img/topBar/menuBar.png'
import Image from "next/image";
import { useState } from 'react'
import { useRouter } from 'next/router'
import Kkuk4th from '@/public/img/library/character/4ndkkuk.png'

const bookContent = [
    [
        '현대의학의 아버지, 윌리엄 오슬러 경은 말했다.', <br/>,
        '"친한 친구들은 제 두뇌가 평범하다는 사실을 잘 압니다" 그렇다면 그의 성공 비결은 무엇이었을까?'
    ],
    [
        "그는 자신이 '오늘의 삶'을 충실하게 살고 있기 때문이라고 설명했다."
    ],
    [
        "내일을 위해 어떤 노력도 하지 말라고 충고하는 것일까?", <br/>,
        "아니다."
    ],
    [
        "내일을 맞는 최선의 방법은", <br/>,
        <u>{"오늘 해야 할 일을 잘하는 데에 있다"}</u>, "고 강조한다.", <br/>,
        "내일 일을 생각해야 한다.", <br/>,
        "하지만 걱정해서는 안된다."
    ],
    [
        '"아무리 힘든일이라도 누구나 하루동안은 할 수 있다."', <br/>,
        "-로버트 루이스 스티븐슨-", <br/>, <br/>, <br/>,
        "Carpediem", <br/>,
        "오늘을 즐기라. 오늘을 붙잡으라."
    ]
]

export const ShowBook = (count:number) => {
    return (
        <Content>
            {bookContent[count]}
        </Content>
    )
}

export const ReadingDone = () => {
    const router = useRouter();
    const toDetail = (id:number) => {
        router.push({
            pathname : '/detail',
            query : {id : id}
        })
    }
    return (
        <Box>
            <BigText>다음 내용이 궁금하다면</BigText>
            <SmallText>7일 무료 체험해보세요</SmallText>
            <ImageWrapper>
                <Image src={Kkuk4th} alt="어른 꾹꾹이" width={97}/>
            </ImageWrapper>
            <BoxBottomContainer>
                <LeftBox onClick={()=>toDetail(1)}>다음에 하기</LeftBox>
                <RightBox>7일 무료 체험하기</RightBox>
            </BoxBottomContainer>
        </Box>
    )
}


export const TextbookFrame = () => {
    const [ count, setCount ] = useState(0);
    const [ able, setAble ] = useState(true);
    
    const nextPage = () => {
        if(able){
            if(count < bookContent.length - 1){
                setCount(count + 1);
            }
            else {
                setCount(count + 1);
                setAble(false);
            }
        }
    }
    
    const prevPage = () => {
        if(able){
            if (count > 0) {
                setCount(count - 1);
            }
        }
    }

    const router = useRouter();
    const toDetail = (id:number) => {
        router.push({
            pathname : '/detail',
            query : {id : id}
        })
    }
    
    return (
        <>
            <Container movable={able}>
                <TextbookTopBarContainer>
                    <Image src={Back} alt="뒤로가기" width={24} onClick={()=>toDetail(1)}/>
                    <EmptyComponent></EmptyComponent>
                    <Image src={MenuBar} alt="더보기" width={24}/>
                </TextbookTopBarContainer>
                <Title>1장 오늘을 충실하게 살아가라</Title>
                <PadContainer>
                    <Pad onClick={prevPage}/>
                    <Pad onClick={nextPage}/>
                </PadContainer>
                <ContentContainer>
                    { able ? ShowBook(count) : ReadingDone() }
                </ContentContainer>
            </Container>
        </>
    )
}