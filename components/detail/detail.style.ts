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
export const BookInfoContainer = styled.div`
display:flex;
` 
export const BookTitle = styled.div`
    font-size:1.5em;
    font-weight:600;
`
export const Tag = styled.div`
${props=>props.color == "red"? 
`border : 2px solid ${props.theme.colors.primary};
color : ${props.theme.colors.primary};
`
:`border : 1px solid #878787;
color : #878787;
`};
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
padding-left:10px;
>img{
    width : 15px;
    height: 15px;
    margin-right:5px;
}
>p{
    margin-right:10px;
}
`
export const InfoLeftContainer = styled.div`
padding-top:15px;
padding-left:10px;
>div{
    margin-bottom:8px;
}
`
export const ReadingTime = styled.div`
    display:inline-block;
    font-weight:600;
    margin-left:auto;
    padding-right:15px;
`
export const InfoRightContaienr = styled.div`
    padding-top:8px;
    margin-left:auto;
    padding-right:8px;
`
export const ReadingInfoContainer = styled.div`
display:flex;
`
export const HashTagContainer = styled.div`
margin-top : 30px;
margin-bottom:20px;
text-align:center;
>${Tag} {
    margin : 5px;
}
`
export const SummaryContainer = styled.div<{open:boolean}>`
${props=>props.open?`;`:`height:10%;`}
display:flex;
width:90%;
justify-content:space-around;
margin:auto;
`
export const SummaryTitle = styled.p`
    color : #878787;
    width : 20%;
`
export const SummaryContent = styled.div`
    width:70%;
    font-weight:400;
    overflow:hidden;
`
export const SummaryFullBtn = styled.div`
    width : 10%;
    text-align:center;
`