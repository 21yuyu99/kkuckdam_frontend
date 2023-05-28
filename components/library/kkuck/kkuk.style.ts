import styled from "styled-components"

export const Container = styled.div`
`

export const Title = styled.h2`
  font-size:1.3em;
  margin:15px auto;
  padding-left:5px;
  width:92%;
  font-family:Gmarket Sans;
  font-weight:600;
  @media(min-width:600px){
    font-size:1.5em;
  }
`
export const KkukkkukContainer = styled.div`
  margin:auto;
  width:92%;
  display:flex;
  border-radius:13px;
  background-color: #FDF0D4;
  align-items:center;
  padding : 15px; 
  @media(max-width:345px){
    width:100%;
  }
`
export const TextContainer = styled.div`
font-family:Gmarket Sans;
width:85%;
padding-left:15px;
white-space:nowrap;
@media(min-width:600px){
  width:80%;
  padding-left:15%;
}
`
export const MainText = styled.p<{underline:boolean}>`
  font-size:1.2em;
  color: #6D5A2F;
  display:inline;
  @media(max-width:345px){
    font-size:1em;
  }
  @media(min-width:600px){
    font-size:1.4em;
  }
  ${props=>props.underline == true?`text-decoration:underline;`:``}
`
export const InformText = styled.p`
  color: #6D5A2F;
  @media(min-width:600px){
    font-size:1.2em;
  }
`
export const TopContainer = styled.div`
display:flex;
font-weight:700;
`
export const CharacterWrapper = styled.div`
width:15%;
text-align:center;
@media(min-width:600px){
  width:20%;
  padding-left:12%;
  >img{
    width:60px;
    height:55px;
  }
}
`
export const InformIconWrapper = styled.div`
padding-left:5px;
@media(max-width:345px){
    width:50%;
    height:50%;
}
`

// 아래로는 꾹꾹이 진화 화면에 관한 것들

export const TempContainer = styled.div`
display: flex;
justify-content: center;
position: absolute;
z-index:1;

left:0;
right:0;
margin:0 auto;

`


export const Kkukbanner = styled.div`
    position: absolute;
    width : 340px;
    height : 580px;
    margin-top:-40px;
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