import { Container, Title, KkukkkukContainer, TextContainer, IconWrapper, NormalText, UnderlinedText, InformText } from "./kkuk.style"
import Image from "next/image";
import Kkukkkuk from "@/public/img/library/kkukkkuk.png";
import InformIcon from "@/public/img/library/informicon.png";
export const KkukBanner = () => {
    return(
        <Container>
            <Title>김민재짱짱 님의 서재</Title>
            <KkukkkukContainer>
                    <Image src={Kkukkkuk} alt=""/>
                <TextContainer>
                    <NormalText>현재 당신은 </NormalText>
                    <UnderlinedText>아기 꾹꾹이</UnderlinedText>
                    <NormalText>에요</NormalText>
                    <InformText><br></br>다독으로 꾹꾹이를 키워보세요</InformText>
                </TextContainer>
                <IconWrapper>
                    <Image src={InformIcon} alt="" width={20} height={20}/>
                </IconWrapper>
            </KkukkkukContainer>
        </Container>
    )
}