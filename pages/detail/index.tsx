import { IconWrapper, ItemContainer, ItemTitle, ListContainer } from "@/components/category/category.style";
import { BookHashTag, BookImgBox, BookIndex, BookInfoBox,Summary } from "@/components/detail";
import { DetailTopBar } from "@/components/topBar";
import textbook from "@/public/img/detail/textbook.png"
import livebook from "@/public/img/detail/livebook.png"
import Image from "next/image";
import { useRouter } from "next/router";
import { BookIndexWrapper, ForItemGap, ReadIconContainer } from "@/styles/detail.style";
export default function Detail(){
    const router = useRouter();
    return(
        <>
        <DetailTopBar/>
        <BookImgBox id={router.query.id as string}/>
        <BookInfoBox/>
        <BookHashTag/>
        <Summary/>
        <ForItemGap>
            <ListContainer>
                <ItemContainer>
                    <ReadIconContainer>
                        <IconWrapper color="yellow">
                            <Image src={textbook} alt=""/>
                        </IconWrapper>
                    </ReadIconContainer>
                    <ItemTitle>
                        텍스트북
                    </ItemTitle>
                </ItemContainer>
                
                <ItemContainer>
                    <ReadIconContainer>
                        <IconWrapper color="yellow">
                            <Image src={livebook} alt=""/>
                        </IconWrapper>
                    </ReadIconContainer>
                    <ItemTitle>
                        라이브북
                    </ItemTitle>
                </ItemContainer>
            </ListContainer>
        </ForItemGap>
        <BookIndexWrapper>
            <BookIndex/>
        </BookIndexWrapper>
        </>
    )
}