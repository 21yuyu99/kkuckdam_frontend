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
export const BookIndexContainer = styled.div`
display:flex;
align-items:center;
margin:25px 10px 15px 10px;
`
export const GrayLine = styled.div`
margin:15px 0;
height: 2px;
width: 100%;
background: #E0E0E0;
`
export const IndexNum = styled.span`
border-left : 4px solid #F47873;
padding-left: 8px;
width: 17%;
font-weight:600;
font-size:1.2em;
`
export const IndexTitle = styled.span`
width : 73%;
font-weight:600;
font-size:1.1em;
`
export const IndexBtnWrapper = styled.div`
width : 10%;
text-align:right;
>img{
    vertical-align:middle;
}
`
export const DetailIndexWrapper = styled.div`
padding:10px 0;
border-bottom: 1px solid #E0E0E0;
width : 69%;
`
export const DetailIndexContainer = styled.div`
display:flex;
margin:0 20px;
`
export const DetailIndexLeftWrapper = styled.div`
width: 16%;
`
export const DetailIndexRightWrapper = styled.div`
width : 15%;
`