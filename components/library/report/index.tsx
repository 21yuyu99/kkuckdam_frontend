
import {ReportContainer,BubbleWrapper,BubbleContainer, KkuckWrapper} from "./report.style"
import Image from 'next/image';
import kkuck from '@/public/img/library/character/babyKkuck.png';

export const Report = () => {
    return (
        <ReportContainer>
            <KkuckWrapper>
                <Image src = {kkuck} alt = "꾹꾹이" width = {55} height = {49}/>
            </KkuckWrapper>
            <BubbleContainer>
                <BubbleWrapper triangle = {true}>
                    <p>희선 님은 현재</p>
                    <p><span>5권</span>의 라이브 북을 시청하셨습니다.</p>
                </BubbleWrapper>
                <BubbleWrapper triangle = {false}>
                            <p>희선 님은</p>
                            <p>총&nbsp;<span>35분&nbsp;</span>동안 지식을 쌓으셨습니다!</p>
                </BubbleWrapper>
                <BubbleWrapper triangle = {false}>
                            <p>희선 님의 관심분야 입니다!</p>
                            <p><span>#주식 #경제 #자기개발</span></p>
                </BubbleWrapper>
            </BubbleContainer>
        </ReportContainer>
    )
}