import styled from "styled-components"
export const BookContainer = styled.div`
position:relative;
`
export const BackWrapper = styled.div`
>img{
    width : 100%;
    height : 30%;
}
`
export const BookWrapper = styled.div`
position:absolute;
bottom:0;
display:flex;
width:100%;
height:100%;
align-items:center;
justify-content:center;
>img{
    width:50%;
    height:75%;
}
`
export const InfoContainer = styled.div`
height:15%;
display:flex;
padding : 0 15px;
` 
export const BookTitle = styled.div`
    font-size:1.5em;
    font-weight:600;
`
export const Tag = styled.div`
border : 1px solid ${props=>props.theme.colors.primary};
color : ${props=>props.theme.colors.primary};
padding : 6px 12px;
border-radius : 22px;
display:inline-block;
`
export const BookWriter = styled.div`
    color : #656565;
`
export const IconWrapper = styled.div`
display : flex;
color : #656565;
>img{
    width : 15px;
    height: 15px;
    margin-right:5px;
}
`
export const InfoLeftContainer = styled.div`
width:70%;
padding-top:15px;
>div{
    margin-bottom:8px;
}
`
export const ReadingTime = styled.div`

`
export const InfoRightContaienr = styled.div`
    padding-top:8px;
    width : 30%;
`