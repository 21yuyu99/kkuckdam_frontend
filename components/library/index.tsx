import { KkukkkukContainer, CurrentTextContainer, UnderlinedText, CurrentText, InformText, KkukkkukWrapper, InformWrapper } from "./library"
import Image from "next/image";
import Kkukkkuk from "@/public/img/library/kkukkkuk.png";
import InformIcon from "@/public/img/library/informicon.png";
export const KkukBanner = () => {
    return(
        <KkukkkukContainer>
            <CurrentTextContainer>
                <CurrentText>현재 당신은 </CurrentText>
                <UnderlinedText>아기 꾹꾹이</UnderlinedText>
                <CurrentText>에요</CurrentText>
            </CurrentTextContainer>
            <InformText>다독으로 꾹꾹이를 키워보세요</InformText>
            <KkukkkukWrapper>
                <Image src={Kkukkkuk} alt="히히"/>
            </KkukkkukWrapper>
            <InformWrapper>
                <Image src={InformIcon} alt="히히"/>
            </InformWrapper>
        </KkukkkukContainer>
    )
}