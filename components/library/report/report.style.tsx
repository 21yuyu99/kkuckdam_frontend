import styled from "styled-components";

export const ReportContainer = styled.div`
    margin-top:40px;
    display : flex;
    width:92%;
    justify-content:center;
`
export const KkuckWrapper = styled.div`
width:30%;
text-align:center;
padding-top:10px;
`
export const BubbleContainer = styled.div`
    display : flex;
    flex-direction : column;
    width:70%;
`
export const BubbleWrapper = styled.div<{triangle:boolean}>`
    font-family: 'Gmarket Sans';
    font-weight:500;
    padding:15px 0;
    border-radius: 25px;
    background-color: rgba( 255, 209, 105, 0.13);
    position: relative;
    margin-bottom:15px;
    text-align:center;
    ${props=>props.triangle == true?
        `    &::after {
            content: '';
            position: absolute;
            border-style: solid;
            border-width: 15px 20.3px 15px 0;
            border-color : transparent rgba( 255, 209, 105, 0.13);
            display: block;
            left: -20px;
            top: 20px;
        }`
        :
        ``
    }
    >p>span{
        color:#F47873;
        font-weight:bold;
    }
`










