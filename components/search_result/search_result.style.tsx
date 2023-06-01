import styled from "styled-components";

export const BookListContainer = styled.div`
    width:97%;
    margin-top : 10px;
    margin-left:3%;
`

export const BookBoxContainer = styled.div `
box-shadow : 0 6px 6px -5px gray;
font-weight:600;
width:100%;
margin-bottom:20px;
display:flex;
>img{
    border-radius:6px;
}
`
export const BookInfoContainer = styled.div`
    display : flex;
    flex-direction:column;
    width:100%;
    align-items:baseline;
`
export const Bookname = styled.span`
    font-size:1.1em;
    margin-top:10px;
`
export const BookPopularity = styled.span`
font-size:0.8em;
display:flex;
align-items:center;
width:40%;
>span{
    padding:0 5px;
    &:last-child{
        padding-right:0;
    }
}
`
export const Writer = styled.div `
    color : #656565;
    margin-left:10px;
    font-weight:400;
    font-size:0.8em;
    margin-top:10px;
`
export const Timer = styled.div`
    color : #656565;
    font-size:0.9em;
    width:60%;
`
export const ReadingInfoContainer = styled.div`
display:flex;
margin-top:auto;
margin-bottom:10px;
width:100%;
`