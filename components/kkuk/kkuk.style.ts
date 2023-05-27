import styled from "styled-components"
// 2023.05.16 00:42
/*
  컴포넌트는 기본적으로 위에서 아래로 배치됨
  https://studiomeal.com/archives/197

  flex라는 걸 좀 더 알아보거나
  각 컴포넌트를 담는 컨테이너를 따로 만들어서 수동 배치
*/
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