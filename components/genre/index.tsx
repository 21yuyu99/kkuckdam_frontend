import { Text, Container, BarBox, GlassesWrapper, EndBar, GenreContainer, GenreWrapper, GenreName, SelectedOverlay } from "./genre.style"
import Image from "next/image"
import SelfManagement from "@/public/img/book/selfManagement.png"
import Glasses from '@/public/img/topBar/glasses.png'
import Check from '@/public/img/genre/check.png'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSearchText } from "@/store/search_result";
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Genre = () => {
    const searchText = useAppSelector((state)=>state.searchText);
    const dispatch = useAppDispatch();

    const GenreList = [
        // 각 장르별 이미지 나오면 그걸로 바꿔주기
        {
            image:SelfManagement,
            name:"경제"
        },
        {
            image:SelfManagement,
            name:"경제"
        },
        {
            image:SelfManagement,
            name:"경제"
        },
        {
            image:SelfManagement,
            name:"경제"
        },
        {
            image:SelfManagement,
            name:"경제"
        },
        {
            image:SelfManagement,
            name:"경제"
        },
        {
            image:SelfManagement,
            name:"경제"
        },
        {
            image:SelfManagement,
            name:"경제"
        },
        {
            image:SelfManagement,
            name:"경제"
        },
        {
            image:SelfManagement,
            name:"경제"
        },
        {
            image:SelfManagement,
            name:"경제"
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
                            <Image src={genre.image} alt="자기관리론" width={110.2} height={131.1}/>
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