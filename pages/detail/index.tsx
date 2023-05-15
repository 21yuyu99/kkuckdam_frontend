import { IconWrapper, ItemContainer, ItemTitle, ListContainer } from "@/components/category/category.style";
import { BookHashTag, BookImgBox, BookInfoBox,Summary } from "@/components/detail";
import { DetailTopBar } from "@/components/topBar";
import textbook from "@/public/img/detail/textbook.png"
import livebook from "@/public/img/detail/livebook.png"
import Image from "next/image";
export default function Detail(){
    return(
        <>
        <DetailTopBar/>
        <BookImgBox/>
        <BookInfoBox/>
        <BookHashTag/>
        <Summary/>
        <ListContainer>
            <ItemContainer>
                <IconWrapper color="yellow">
                    <Image src={textbook} alt=""/>
                </IconWrapper>
                <ItemTitle>
                    텍스트북
                </ItemTitle>
            </ItemContainer>
            <ItemContainer>
                <IconWrapper color="yellow">
                    <Image src={livebook} alt=""/>
                </IconWrapper>
                <ItemTitle>
                    라이브북
                </ItemTitle>
            </ItemContainer>
        </ListContainer>
        </>
    )
}