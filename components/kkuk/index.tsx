import { Container, Title, KkukkkukContainer, TextContainer, IconWrapper, NormalText, UnderlinedText, InformText, TopContainer, CharacterWrapper, InformIconWrapper } from "./kkuk.style"
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
                        <NormalText>현재 당신은&nbsp;</NormalText>
                        <UnderlinedText>아기 꾹꾹이</UnderlinedText>
                        <NormalText>에요</NormalText>
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