
import {KkukBanner, Container, BabyContainer, KkukContainer, AContainer, BContainer, LineContainer} from "./kkukevolution.style"
import Image from 'next/image';
import xbtn from "@/public/img/library/btn/x.png"
import babykkuk from "@/public/img/library/character/babykkuck.png"
import secondkkuk from "@/public/img/library/character/2ndkkuk.png"
import thirdkkuk from "@/public/img/library/character/3ndkkuk.png"
import fourthkkuk from "@/public/img/library/character/4ndkkuk.png"

export const Kkukevolution = () => {
    return (
        <Container>
            <KkukBanner>
                <Image src = {xbtn} width = {24} alt = "x버튼"/>
                <span className = "text-style">책을 많이 읽을수록 꾹꾹이가 진화해요</span>
            </KkukBanner>
            <KkukContainer>
                <BabyContainer>
                    <span className = "kkukname">아기 꾹꾹이</span>
                    <AContainer>
                        <Image src = {babykkuk} width = {55} alt = "애기꾹꾹이"/>
                        <BContainer>
                        <span className = "explain">태어난지 얼마 안된 꾹꾹이에요!</span>
                        <span className = "explain">관심과 사랑이 필요해요!</span>
                        </BContainer>
                    </AContainer>
                </BabyContainer>
                <LineContainer/>
                <BabyContainer>
                    <span className = "kkukname">유치원생 꾹꾹이</span>
                    <AContainer>
                        <Image src = {secondkkuk} width = {55} alt = "유치원생 꾹꾹이"/>
                        <BContainer>
                        <span className = "explain">자라나는 꾹꾹이에요</span>
                        <span className = "explain">꾸준한 독서로 꾹꾹이를 키워보세요</span>
                        </BContainer>
                    </AContainer>
                </BabyContainer>
                <LineContainer/>
                <BabyContainer>
                    <span className = "kkukname">질풍노도의 꾹꾹이</span>
                    <AContainer>
                        <Image src = {thirdkkuk} width = {55} alt = "질풍노도의 꾹꾹이"/>
                        <BContainer>
                        <span className = "explain">중2병이 심한 꾹꾹이에요</span>
                        <span className = "explain">독서를 통해 힘든 시기를 이겨내봐요</span>
                        </BContainer>
                    </AContainer>
                </BabyContainer>
                <LineContainer/>
                <BabyContainer>
                    <span className = "kkukname">어른 꾹꾹이</span>
                    <AContainer>
                        <Image src = {fourthkkuk} width = {55} alt = "어른 꾹꾹이"/>
                        <BContainer>
                        <span className = "explain">독서가 습관이 된 당신!</span>
                        <span className = "explain">잘하고 있어요 저와 꾸준히 독서해요</span>
                        </BContainer>
                    </AContainer>
                </BabyContainer>
            </KkukContainer>
        </Container>

    )
}