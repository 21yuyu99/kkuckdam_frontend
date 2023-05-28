import { Container, Title, KkukkkukContainer, TextContainer, InformText, TopContainer, CharacterWrapper, InformIconWrapper, MainText } from "./kkuk.style"
import Image from "next/image";
import babyKkuck from "@/public/img/library/character/babyKkuck.png";
import informIcon from "@/public/img/library/informicon.png";
export const KkukBanner = () => {
    return(
        <Container>
            <Title>희선 님의 서재</Title>
            <KkukkkukContainer>
                <CharacterWrapper>
                <Image src={babyKkuck} width={45} alt=""/>
                </CharacterWrapper>
                <TextContainer>
                    <TopContainer>
                        <MainText underline={false}>현재 당신은&nbsp;</MainText>
                        <MainText underline={true}>아기 꾹꾹이</MainText>
                        <MainText underline={false}>에요</MainText>
                        <InformIconWrapper>
                            <Image src={informIcon} alt="꾹꾹이 설명서" width={20} height={20}/>
                        </InformIconWrapper>
                    </TopContainer>
                    <InformText><br></br>다독으로 꾹꾹이를 키워보세요</InformText>
                </TextContainer>
            </KkukkkukContainer>
        </Container>
    )
}