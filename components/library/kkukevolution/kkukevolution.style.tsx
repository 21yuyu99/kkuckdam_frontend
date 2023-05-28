import styled from "styled-components"


export const Container = styled.div`
display: flex;
justify-content: center;  

`


export const KkukBanner = styled.div`
    position: absolute;
    width : 340px;
    height : 550px;
    margin-top : -40px;
    display : flex;
    border-radius : 13px 13px 0 0;
    background-color : #FDF0D4;
    border-style : solid;
    border-color : #33314A;
    align-items : center;
    z-index : 1;
    
    > img{
        position : absolute;
        top : 10px;
        right : 10px;
    }
    .text-style{
        position : absolute;
        top : 35px;
        font-size : 16px;
        width : 100%;
        text-align : center;
    }
`
export const KkukContainer = styled.div`
    display : flex;
    flex-direction : column;

`

export const BabyContainer = styled.div`

    display : flex;
    flex-direction : column;
    z-index : 1;
    margin-top : 35px;
    margin-left : 10px;
    .kkukname{
        margin-bottom : 20px;
        color : #D46863;
    }

`
export const AContainer = styled.div`

    display : flex;
    flex-direction : row;
    margin-left : 20px;

`
export const BContainer = styled.div`
    display : flex;
    flex-direction : column;
    margin-left : 20px;
    margin-top : 10px;
    font-size : 13px;
    color : #33314A;
`

export const LineContainer = styled.div`   
    display : flex;
    border-style : solid;
    border-color : #999999;
    border-radius : 13px;
    margin-top : 15px;
    margin-bottom : -20px;
    flex: 1; 
    width: 100%;
    z-index : 1;
`
