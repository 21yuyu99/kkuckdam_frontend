
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { BtnWrapper, ToggleContainer} from "./toggleBtn.style"
import { changeToggleState } from "@/store/library";

export const ToggleBtn = () =>{
    const toggleState:string = useAppSelector((state)=>state.toggleState);
    const dispatch = useAppDispatch();
    const onClickHandler = (selected:string)=>{
      dispatch(changeToggleState(selected));
    }
    return(
            <ToggleContainer>
                {toggleState == "library"?
                    <>
                 <BtnWrapper selected = {true} onClick={()=>onClickHandler("library")}>
                    서재
                </BtnWrapper>
                <BtnWrapper selected = {false} onClick={()=>onClickHandler("report")}>
                    레포트
                </BtnWrapper>
                    </>
                    :
                    <>
                    <BtnWrapper selected = {false} onClick={()=>onClickHandler("library")}>
                       서재
                   </BtnWrapper>
                   <BtnWrapper selected = {true} onClick={()=>onClickHandler("report")}>
                       레포트
                   </BtnWrapper>
                    </>
                }
            </ToggleContainer>

            
    )
}