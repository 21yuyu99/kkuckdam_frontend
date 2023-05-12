import { pretendard } from "@/styles/global.style";
import styled from "styled-components";
export const Container = styled.div`
display:flex;
align-items:center;
border: solid 1.5px #a9a9a9;
border-radius : 12px;
width:65%;
height:35px;
`
export const BarBox = styled.input`
width:100%;
margin-left:15px;
font-size:1em;
border : none;
&:focus{
  outline : none;
}
&::placeholder{
  color:#878787;
  ${pretendard.style}
}
`
export const GlassesWrapper = styled.div`
padding:0 15px;
`