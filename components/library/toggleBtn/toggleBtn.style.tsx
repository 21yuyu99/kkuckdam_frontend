import styled from "styled-components";

export const ToggleContainer = styled.div`
    margin:auto;
    margin-top : 20px;
    width : 92%;
    border-radius:13px;
    border : 1px solid ${props=>props.theme.colors.yellow};
    color : ${props=>props.theme.colors.letter};
    font-size:1.1em;
    font-weight:600;
    display:flex;
    text-align:center;
    >div{
        width:50%;
        padding : 10px 0;
        border-radius:13px;
    }
`
export const BtnWrapper = styled.div<{selected:boolean}>`
${props=>props.selected == true?`background-color:${props.theme.colors.yellow};`:``};
`
export const LibraryContainer = styled.div`
    margin-bottom : 100px;
    margin-top : -133px;
    margin-left : -20px;
    width : 50%;
    height : 33px;
    background-color : #FFD169;
    margin-left : 14px;
    border-radius:13px;
    text-align : center;
`



