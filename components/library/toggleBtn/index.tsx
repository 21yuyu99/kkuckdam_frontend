
import { LibraryWrapper, ReportWrapper, ToggleContainer} from "./toggleBtn.style"
import Image from 'next/image';


export const ToggleBtn = () =>{
    return(
            <ToggleContainer>
                <LibraryWrapper>
                    서재
                </LibraryWrapper>
                <ReportWrapper>
                    레포트
                </ReportWrapper>
            </ToggleContainer>

            
    )
}
{/* <NavContainer>
<span>서재</span>
<span>레포트</span>
</NavContainer>
<LibraryContainer>
</LibraryContainer> */}