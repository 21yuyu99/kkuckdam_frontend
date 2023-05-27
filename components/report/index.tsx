
import {ReportContainer,Bubble, Answer, Bubble2, Bubble3, Kkuksay, User_name, Num_book, Time_book, User_interest} from "./report.style"
import Image from 'next/image';
import kkuk from '@/public/img/library/kkuk.png';

export const Report = () => {
    return (
        <ReportContainer>
            <Image src = {kkuk} alt = "꾹꾹이" width = {55} height = {49}/>
            <Answer>
                <Bubble>
                    <Kkuksay>
                        <User_name>
                            <span>김민재짱짱</span>
                            <span>님은 현재</span>
                        </User_name>
                        <Num_book>
                            <span className ="write-style">5권</span>
                            <span>의 라이브북을 시청하셨습니다.</span>
                        </Num_book>
                    </Kkuksay>
                </Bubble>
                <Bubble2>
                    <Kkuksay>
                        <User_name>
                            <span>김민재짱짱</span>
                            <span> 님은</span>
                        </User_name>
                        <Time_book>
                            <span>총 </span>
                            <span className ="write-style">35분 </span>
                            <span>동안 지식을 쌓으셨습니다!</span>
                        </Time_book>
                    </Kkuksay>
                </Bubble2>
                
                <Bubble3>
                <Kkuksay>
                        <User_name>
                            <span>김민재짱짱</span>
                            <span> 님의 관심분야 입니다!</span>
                        </User_name>
                        <User_interest>
                            <span className ="write-style">#주식 #경제 #자기개발 </span>
                        </User_interest>
                    </Kkuksay>
                </Bubble3>
            </Answer>
        </ReportContainer>
    )
}