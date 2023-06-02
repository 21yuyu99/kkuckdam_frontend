import Image from "next/image"
import self_manage_back from "@/public/img/detail/selfManagementBack.png"
import market_studies_back from "@/public/img/detail/market_studies_back.png"
import market_studies from "@/public/img/book/MarketOverview.png";
import self from "@/public/img/book/selfManagement.png"
import bookMark from "@/public/img/detail/bookMark.png"
import star from "@/public/img/detail/star.png"
import up from "@/public/img/detail/up.png"
import down from "@/public/img/detail/down.png"
import { BookContainer,BookWrapper, BackWrapper, BookInfoContainer, BookTitle, Tag, BookWriter, IconWrapper, InfoLeftContainer, ReadingTime, InfoRightContaienr, ReadingInfoContainer, HashTagContainer, SummaryContainer, SummaryTitle, SummaryContent, SummaryFullBtn, BookIndexContainer, GrayLine, IndexNum, IndexTitle, IndexBtnWrapper, DetailIndexWrapper, DetailIndexContainer, DetailIndexLeftWrapper, DetailIndexRightWrapper} from "./detail.style"
import { changeSummaryState } from "@/store/detail"
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect, useReducer, useState } from "react"
import { useRouter } from "next/router";
export const BookImgBox = (id:{id:string}) => {
    const bookList = [
        {
            back : self_manage_back,
            book : self
        },
        {
            back : market_studies_back,
            book : market_studies
        }
    ]
    return(
        <BookContainer>
            <BackWrapper>
                {id.id!="2"?
                <Image src={bookList[0].back} alt=""/>
            :
            <Image src={bookList[1].back} alt=""/>}
            </BackWrapper>
            <BookWrapper>
            {id.id!="2"?
                <Image src={bookList[0].book} alt=""/>
            :
            <Image src={bookList[1].book} alt=""/>}
            </BookWrapper>
        </BookContainer>
    )
}

export const BookInfoBox = (id:{id:string})=>{
    return(
    <>
        <BookInfoContainer>
            <InfoLeftContainer>
                <BookTitle>
                    {id.id!="2"?"데일 카네기 자기 관리론": "시장학개론"}
                </BookTitle>
                <BookWriter>
                    {id.id!="2"?"데일 카네기(지은이), 임상훈(옮긴이)": "김승호"}
                </BookWriter>
            </InfoLeftContainer>
            <InfoRightContaienr>
                <Tag color="red">
                    {id.id!="2"?"자기계발":"경제/경영"}
                </Tag>
            </InfoRightContaienr>
        </BookInfoContainer>
        <ReadingInfoContainer>
            <IconWrapper>
             <Image src={bookMark} alt="bookmark"/>
                <p>{id.id!="2"?50:33}</p>
            <Image src={star} alt="bookmark"/>
                <p>{id.id!="2"?41:43}</p>
            </IconWrapper>
            <ReadingTime>
                완독 소요 시간 {id.id!="2"?15:20}분
            </ReadingTime>
        </ReadingInfoContainer> 
    </>
    )
}

export const BookHashTag = (id:{id:string}) => {
    const tag1 = [
        "힘든 일이 한번에 닥칠 때","논픽션","베스트셀러","고전","워런 버핏 Pick","걱정 해소법"
    ]
    const tag2 = [
       "유능한 리더","성공 기업", "경영수업", "기업가 철학", "논픽션", "경영 철학"
    ]
    return(
        <HashTagContainer>
            {id.id !=="2"?
            tag1.map((tag,idx)=>
             <Tag key={idx}>{tag}</Tag>
            )
            :
            tag2.map((tag,idx)=>
             <Tag key={idx}>{tag}</Tag>
            )
            }
        </HashTagContainer>
    )
}
export const Summary = (id:{id:string}) =>{
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
                {id.id!=="2"?
                "베스트셀러 『인간관계론』 저자인 데일 카네기는 성인들에게 화술과 인간관계를 가르치는 동안 ‘걱정’이 모든 인생 문제의 주원인이자 자기관리의 핵심 요소임을 깨달았다. 그래서 ‘걱정을 멈추고 새로운 인생을 사는 법’을 교육하기로 마음먹었다. 하지만 문제가 생겼다. 교과서로 삼기에 적합한 책을 찾을 수 없었던 것이다. 결국 직접 쓸 수밖에 없었다. 이것이 또 한 권의 세계적인 베스트셀러가 탄생하게 된 배경이다."
                :
                "이 책은 한국과 미국, 전 세계를 오가며 ‘사장을 가르치는 사장’으로 알려진 『돈의 속성』의 저자 김승호 회장의 신간이다. 평생 사장으로 살아온 그의 경영철학 모두를 10여 년에 걸쳐 정리해 온 그는, 이번 『사장학개론』 책을 통해 120가지 주제로 그 내용을 모두 담아 완성했다. 지난 7년간 3천 명의 사장 제자들을 만나 [사장학 수업]을 진행하며 현실에서 겪는 다양한 문제에 대해, 사장들이 묻는 공통적인 어려움이 존재했으며 그 문제들을 목차로 구성해 방향제시를 더했다."}
            </SummaryContent>
            <SummaryFullBtn onClick={onClick}>
                {summaryState==false?<Image src={down} alt="자세히 보기" width={20} height={13}/>:<Image src={up} alt="닫기" width={20} height={13}/>}
            </SummaryFullBtn>
        </SummaryContainer>
    )
}
export const BookIndex = (id:{id:string}) => {
    const router = useRouter();
    interface indexContentType{
        num : string,
        content : string
    }
    interface bookIndexType{
        num : string,
        title : string,
        open : boolean,
        content : indexContentType[]
    }
    const bookIndexList:bookIndexType[][] = [
    [
        {
            num : "1부",
            title : "걱정에 대해 알아야 할 기본 지식",
            open : false,
            content : [
                {
                    num : "1장",
                    content : "오늘을 충실하게 살아가라"
                },
                {
                    num : "2장",
                    content : "걱정을 해결해줄 마법의 공식"
                },
                {
                    num : "3장",
                    content : "걱정이 삶에 미치는 영향"
                }
            ]
        },
        {
            num : "2부",
            title : "걱정을 분석하는 기본 기술",
            open : false,
            content : [
                {
                    num : "1장",
                    content : "문제를 분석하고 해결하는 법"
                },
                {
                    num : "2장",
                    content : "직업상의 걱정을 반으로 줄이는 법"
                },
            ]
        },
        {
            num : "3부",
            title : "걱정이 나를 망치기 전에 걱정하는 습관을 없애는 법",
            open : false,
            content : [
                {
                    num : "1장",
                    content : "마음속에서 걱정을 몰아내는 법"
                },
                {
                    num : "2장",
                    content : "딱정벌레 때문에 쓰러지지 말라"
                },
                {
                    num : "3장",
                    content : "온갖 걱정을 떨쳐버리는 법"
                },
                {
                    num : "4장",
                    content : "피할 수 없는 일을 대하는 법"
                },
                {
                    num : "5장",
                    content : "걱정을 '손절매' 하라"
                },
                {
                    num : "6장",
                    content : "톱밥을 다시 켜지 말라"
                }
            ]
        },
        {
            num:"4부",
            title : "평화와 행복을 부르는 7가지 자세",
            open : false,
            content : [
                {
                    num : "1장",
                    content : "삶을 바꿔줄 한 문장"
                },
                {
                    num : "2장",
                    content : "지혜롭게 보복하는 법"
                },
                {
                    num : "3장",
                    content : "감사할 줄 모르는 사람에게 상처받지 않는 법"
                },
                {
                    num : "4장",
                    content : "백만 달러보다 가치 있는 것"
                },
                {
                    num : "5장",
                    content : "나를 찾고 내 모습대로 사는 법"
                },
                {
                    num : "6장",
                    content : "레몬을 얻으면 레모네이드를 만들라"
                },
                {
                    num : "7장",
                    content : "2주 만에 우울증을 치료하는 법"
                }
            ]
        },
        {
            num : "5부",
            title : "걱정을 이겨내게 해줄 강력한 법칙",
            open : false,
            content : [
                {
                    num : "1장",
                    content : "부모님께 배운 걱정 극복 비결"
                }
            ]
        },
        {
            num : "6부",
            title : "비판을 받아도 걱정하지 않는 법",
            open : false,
            content : [
                {
                    num : "1장",
                    content : "죽은 개를 걷어차는 사람은 없다"
                },
                {
                    num : "2장",
                    content : "부당한 비난에 대처하는 법"
                },
                {
                    num : "3장",
                    content : "내가 저지른 바보짓들"
                }
            ]
        },
        {
            num : "7부",
            title : "피로와 걱정을 예방하고 활력과 의욕을 높이는 6가지 법칙",
            open : false,
            content : [
                {
                    num : "1장",
                    content : "하루 1시간 더 활동할 수 있는 비결"
                },
                {
                    num : "2장",
                    content : "피로의 원인과 대처법"
                },
                {
                    num : "3장",
                    content : "가정주부가 피로를 풀고 젊게 사는 법"
                },
                {
                    num : "4장",
                    content : "피로와 걱정을 예방하는 4가지 업무 습관"
                },
                {
                    num : "5장",
                    content : "피로, 걱정, 분노를 일으키는 주범",
                },
                {
                    num : "6장",
                    content : "불면증을 걱정하지 않는 법"
                }
            ]
        },
        {
            num : "8부",
            title : "행복과 성공이라는 두 마리 토끼를 잡는 법",
            open : false,
            content :[
                {
                    num : "1장",
                    content : "인생에서 가장 중요한 결정"
                }
            ]
        },
        {
            num : "9부",
            title : "돈 걱정을 줄이는 법",
            open : false,
            content :[
                {
                    num : "1장",
                    content : "걱정의 70퍼센트는 돈 문제다"
                }
            ]
        },
        {
            num : "10부",
            title : "나는 이렇게 걱정을 극복했다!",
            open : false,
            content :[
                {
                    num : "",
                    content : "저자에게 영감을 준 32편의 생생한 이야기"
                }
            ]
        }
    ],
    [
        {
            num : "1부",
            title : "나는 장사를 하는가? 사업을 하는가?",
            open : false,
            content : [
                {
                    num : "",
                    content : ""
                }
            ]
        },
        {
            num : "2부",
            title : "수업의 4가지 경로",
            open : false,
            content : [
                {
                    num : "",
                    content : ""
                }
            ]
        },
        {
            num : "3부",
            title : "당신 사업의 PER는 얼마인가?",
            open : false,
            content : [
                {
                    num : "",
                    content : ""
                }
            ]
        },
        {
            num : "4부",
            title : "명령, 지시를 정확하게 하라",
            open : false,
            content : [
                {
                    num : "",
                    content : ""
                }
            ]
        },
        {
            num : "5부",
            title : "나쁜 지시와 올바른 지시",
            open : false,
            content : [
                {
                    num : "",
                    content : ""
                }
            ]
        },
        {
            num : "6부",
            title : "매출이 오르면 사람을 쓸까? 사람을 써서 매출을 올릴까?",
            open : false,
            content : [
                {
                    num : "",
                    content : ""
                }
            ]
        }
    ]
]   
    let [indexList,setIndex] = useState<bookIndexType[][]>(bookIndexList);
        
    const onClickHandler = (id:number,idx:number)=>{
        indexList[id][idx].open = !indexList[id][idx].open;
        setIndex([...indexList]);
    }
    return(
        <>
        <GrayLine/>
        { id.id!=="2"?
            indexList[0].map((index,key)=>
                {
                    return(
                            <>
                            <BookIndexContainer key={key}>
                            <IndexNum>{index.num}</IndexNum>
                            <IndexTitle>{index.title}</IndexTitle>
                            <IndexBtnWrapper onClick={()=> onClickHandler(0,indexList[0].indexOf(index))}>
                                {index.open==false?<Image src={down} alt="자세히 보기" width={20} height={13}/>:<Image src={up} alt="닫기" width={20} height={13}/>}
                            </IndexBtnWrapper>
                            </BookIndexContainer>
                            {index.open==false?<></>:<>{
                                index.content.map(
                                    (detail,idx)=>
                                    <DetailIndexContainer key={idx}>
                                        <DetailIndexLeftWrapper/>
                                        <DetailIndexWrapper>{detail.num}&nbsp;&nbsp;{detail.content}</DetailIndexWrapper>
                                        <DetailIndexRightWrapper/>
                                    </DetailIndexContainer>
                                )
                            }</>}
                            </>
                    )
                }
                ):
                indexList[1].map((index,key)=>
                {
                    return(
                            <>
                            <BookIndexContainer key={key}>
                            <IndexNum>{index.num}</IndexNum>
                            <IndexTitle>{index.title}</IndexTitle>
                            <IndexBtnWrapper onClick={()=> onClickHandler(1,indexList[1].indexOf(index))}>
                                {index.open==false?<Image src={down} alt="자세히 보기" width={20} height={13}/>:<Image src={up} alt="닫기" width={20} height={13}/>}
                            </IndexBtnWrapper>
                            </BookIndexContainer>
                            {index.open==false?<></>:<>{
                                index.content.map(
                                    (detail,idx)=>
                                    <DetailIndexContainer key={idx}>
                                        <DetailIndexLeftWrapper/>
                                        <DetailIndexWrapper>{detail.num}&nbsp;&nbsp;{detail.content}</DetailIndexWrapper>
                                        <DetailIndexRightWrapper/>
                                    </DetailIndexContainer>
                                )
                            }</>}
                            </>
                    )
                }
                )
        }
        </>
    )
}