import { pretendard } from "@/styles/global.style";
import styled from "styled-components"

export const Text = styled.p<{color:string, size:string}>`
    margin-top:16px;
    margin-left:16px;
    line-height:15px;
    font-family:Gmarket Sans;
    font-weight:400;

    color:${props=>props.color};
    font-size:${props=>props.size};
`

// search bar 크기, 위치 조정

export const Container = styled.div`
display:flex;
align-items:center;
border: solid 1.5px #a9a9a9;
border-radius : 57px;
width:92%;
height:43px;
margin:15px auto;
`
export const BarBox = styled.input`
width:100%;
font-size:1.3em;
border : none;
border-radius:57px;
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

// 완료 버튼

export const EndBar = styled.div<{color:string, font:string}>`
    position:fixed;
    bottom:3%;
    z-index:999;
    width:33%;
    height:8%;

    border-radius:57px;
    border:2px solid #F47873;

    font-family:Roboto;
    font-weight:600;
    font-size:1.1em;
    color:${props=>props.font};
    
    left:0;
    right:0;
    margin:auto;
    
    display:flex;
    align-items:center;
    justify-content:center;

    background-color:${props=>props.color};
`


// 각 장르 요소들

export const GenreContainer = styled.div`
    width:97%;
    margin:8% auto;
    display:grid;
    
    grid-template-columns:repeat(3, 1fr);
    row-gap:20px;
    
`

export const GenreWrapper = styled.div`
    

    display:flex;
    flex-direction:column;
    gap:8px;
    align-items:center;
    
    
`

export const GenreName = styled.p`
    

    font-family:Roboto;
    font-size:0.9em;
    text-align:center;
    letter-spacing:0.5px;
`

export const SelectedOverlay = styled.div`
    
    position:absolute;
    border-radius:6px;
    width:110.2px;
    height:131.1px;
    background-color:rgba(244, 120, 115, 0.7);

    display:flex;
    align-items:center;
    justify-content:center;
`