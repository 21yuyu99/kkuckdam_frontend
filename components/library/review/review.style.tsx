import styled from "styled-components"

export const ReviewTopBarContainer = styled.div`
    font-family: 'Gmarket Sans';
    display:flex;
    justify-content:center;
    align-items:center;
    height:8%;
    padding:3%;
    text-align:center;
    a>img{
        vertical-align:middle;
    }
    a>p{
        color:${props=>props.theme.colors.primary};
        font-size:1.1em;
    }
    >a{
        width:10%;
    }
`

export const Title = styled.h2`
    font-size:1.25em;
    width:80%;
    font-family:Gmarket Sans;
    text-align:center;
    font-weight:500;
`

export const BookName = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:5%;
    background-color: #FDF0D4;
`
export const BookText = styled.p`
    font-family:Gmarket Sans;
    font-weight:500;
`
export const SavedTextBox = styled.div`
    width:100%;
    height:77%;
    font-weight:400;
    font-family:Gmarket Sans;
    padding:20px 0 0 24px;
    border:none;
    font-size:1em;
`
export const TextArea = styled.textarea`
    width:100%;
    height:77%;
    font-weight:400;
    font-family:Gmarket Sans;
    padding:20px 0 0 24px;
    border:none;
    font-size:1em;
`