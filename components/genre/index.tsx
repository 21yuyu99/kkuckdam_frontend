import { Text, Container, BarBox, GlassesWrapper, EndBar, GenreContainer, GenreWrapper, GenreName, SelectedOverlay } from "./genre.style"
import Image from "next/image"
import Glasses from '@/public/img/topBar/glasses.png'
import Check from '@/public/img/genre/check.png'

import EconomicRecipe from "@/public/img/book/economicRecipe.png"
import UltraProfit from "@/public/img/book/ultra-profit.png"
import Justice from "@/public/img/book/whatisJustice.png"
import SelfManagement from "@/public/img/book/selfManagement.png"
import NatureOfMoney from "@/public/img/book/natureOfMoney.png"
import Gunjuron from "@/public/img/book/gunjuron.png"
import Cosmos from "@/public/img/book/cosmos.png"
import NowInsideMe from "@/public/img/book/nowInsideMe.png"
import Refinement from "@/public/img/book/refinement.png"

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSearchText } from "@/store/search_result";
import { useState } from 'react'
import { useRouter } from 'next/router'

export const Genre = () => {
    const searchText = useAppSelector((state)=>state.searchText);
    const dispatch = useAppDispatch();

    const GenreList = [
        {
            image:EconomicRecipe,
            name:"경제"
        },
        {
            image:UltraProfit,
            name:"투자"
        },
        {
            image:Justice,
            name:"인문"
        },
        {
            image:SelfManagement,
            name:"자기계발"
        },
        {
            image:NatureOfMoney,
            name:"금융"
        },
        {
            image:Gunjuron,
            name:"사회"
        },
        {
            image:Cosmos,
            name:"과학"
        },
        {
            image:NowInsideMe,
            name:"에세이"
        },
        {
            image:Refinement,
            name:"교양"
        }
    ];

    const [count, setCount] = useState(0);

    const [selected, setSelected] = useState<boolean[]>([]);

    const counting = (index:number) => {
        const newSelected = [...selected];
        if(newSelected[index])  setCount(count - 1);
        else    setCount(count + 1);
        
        newSelected[index] = !newSelected[index];
        setSelected(newSelected);

    }

    const router = useRouter();
    const toMain = () => {
        router.push({ pathname : '/' })
    }


    return (
        <>
            <Text color="#F47873" size="1.4em">당신에게 도서를 추천해드릴게요</Text>
            <Text color="rgba(0, 0, 0, 0.7)" size="1.2em">좋아하는 장르를 선택하세요</Text>
            <Container>
                <GlassesWrapper>
                    <Image alt="찾기" src={Glasses} width={20}/>
                </GlassesWrapper>
                <BarBox placeholder="검색" value={searchText} onChange={(e)=>dispatch(setSearchText(e.target.value))}/>
            </Container>
            <GenreContainer>
                {
                    GenreList.map((genre, id) => (
                        <GenreWrapper key={id} onClick={()=>counting(id)}>
                            <Image src={genre.image} alt="자기관리론" width={110.2} height={169.5}/>
                            {
                                selected[id]
                                ?
                                <SelectedOverlay>
                                    <Image src={Check} alt="선택됨" width={25.09} height={19.29}/>
                                </SelectedOverlay>
                                :
                                <></>
                            }
                            <GenreName>{genre.name}</GenreName>
                        </GenreWrapper>
                    ))
                }
            </GenreContainer>
            <EndBar color={count > 0 ? "#F47873" : "#FFFFFF"} font={count > 0 ? "#FFFFFF" : "#33314A"} onClick={()=>toMain()}>
                {count > 0 ? "완료" : "건너뛰기"}
            </EndBar>
        </>
    )
}