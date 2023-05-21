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
  font-size:1.6rem;
  margin:15px;
  position:relative;
  font-family:Gmarket Sans
`
export const KkukkkukContainer = styled.div`
  margin:auto;
  display:flex;
  border-radius:13px;
  position:relative;
  background-color: #FDF0D4;

  width:92%;
`
export const TextContainer = styled.div`
  padding-top:6%;
`
export const IconWrapper = styled.div`

  width:12%;
  padding-top:6%;
  padding-left:3%;
  border-radius:0 13px 13px 0;
`
export const NormalText = styled.p`

  font-size:1rem;
  color: #6D5A2F;
  display:inline;
  font-family:Gmarket Sans;
  font-weight:800;
`
export const UnderlinedText = styled.p`
  
  font-size:1rem;
  color: #6D5A2F;
  display:inline;
  text-decoration:underline;
  font-family:Gmarket Sans;
  font-weight:800;
`
export const InformText = styled.p`

  font-size:0.8rem;
  color: #6D5A2F;
  font-family:Gmarket Sans;
`