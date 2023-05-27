import styled from "styled-components";



export const ReportContainer = styled.div`
    margin : -50px 0 0 30px;
    display : flex;

`
export const Answer = styled.div`
    display : flex;
    flex-direction : column;
`


export const Bubble = styled.div`
    position: relative;
    margin-left : 20px;
    margin-top : -10px;
    width: 240px;
    height: 68px;
    padding: 0px;
    background: #FFD169;
    border-radius: 25px;
    background-color: rgba( 255, 209, 105, 0.3 );

    &::after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 15px 20.3px 15px 0;
        border-color: transparent #FFD169;
        opacity : 0.3;
        display: block;
        width: 0;
        z-index: 1;
        left: -20px;
        top: 20px;
    }
`

export const Bubble2 = styled.div`
    position : relative;
    margin-left : 20px;
    margin-top : 20px;
    width: 240px;
    height: 68px;
    padding: 0px;
    background:#FFD169;
    border-radius: 25px;
    background-color: rgba( 255, 209, 105, 0.3 );
`
export const Bubble3 = styled.div`
    position : relative;
    margin-left : 20px;
    margin-top : 20px;
    width: 240px;
    height: 68px;
    padding: 0px;
    background:#FFD169;
    border-radius: 25px;
    background-color: rgba( 255, 209, 105, 0.3 );

`
export const Kkuksay = styled.div`
    display : flex;
    flex-direction : column;
    margin-top : 15px;    
`
export const User_name = styled.div`
    text-align : center;
    
    
`
export const Num_book = styled.div`
    text-align : center; 
    .write-style {
        color : #F47873;
        opacity : 1;
        font-weight : bold;
    }
    
`
export const Time_book = styled.div`
    text-align : center; 
    .write-style {
        color : #F47873;
        opacity : 1;
        font-weight : bold;
    }
    
`
export const User_interest = styled.div`
    text-align : center; 
    .write-style {
        color : #F47873;
        opacity : 1;
        font-weight : bold;
    }
    
`










