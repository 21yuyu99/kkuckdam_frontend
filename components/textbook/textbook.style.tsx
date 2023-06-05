import styled from "styled-components"

// 루트 컴포넌트
// 다 읽었으면 배경색 뿌옇게

export const Container = styled.div<{movable:boolean}>`
${props=>props.movable === true ? 'background-color:#FFFFFF;' : 'background-color:rgba(0,0,0,0.7);'}
height:100%;
`

// 가상의 패드.
// 왼쪽 부분 누르면 이전 페이지, 오른쪽 부분 누르면 다음 페이지

export const PadContainer = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    display:flex;
`

export const Pad = styled.div`
    width:50%;
`

// 탑 바

export const TextbookTopBarContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:10%;
    padding:5%;
`

export const EmptyComponent = styled.div`
    width:90%;
`

// 제목

export const Title = styled.h2`
    width:100%;
    font-size:1.2em;
    font-weight:800;
    font-family:Gmarket Sans;
    text-align:center;
    font-color:#000000;
`

// 본문

export const ContentContainer = styled.div`
    width:100%;
    height:78%;
    text-align:center;
    display:grid;
`

export const Content = styled.p`
    width:85%;
    
    font-size:0.95em;
    font-weight:400;
    font-family:Gmarket Sans;
    font-color:#000000;
    line-height:46px;
    margin:auto;
`

// 다 읽었을 때 나오는 컴포넌트

export const Box = styled.div`
    width:85%;
    height:55%;
    background-color:#FFFFFF;
    border-radius:8px 8px 8px 8px;
    position:relative;
    margin:auto;
`

export const BoxBottomContainer = styled.div`
    width:100%;
    height:20%;
    display:flex;
    border-radius:8px 8px 8px 8px;
    position:absolute;
    
    bottom:0;
    
`

export const LeftBox = styled.div`
    width:50%;
    background-color:#E7E7E7;
    border-radius:0 0 0 8px;
    display:flex;
    align-items:center;
    justify-content:center;

    font-size:0.95em;
    font-weight:600;
    font-family:Roboto;
    color:#696969;
`

export const RightBox = styled.div`
    width:50%;
    background-color:#F47873;
    border-radius:0 0 8px 0;
    display:flex;
    align-items:center;
    justify-content:center;

    font-size:0.95em;
    font-weight:700;
    font-family:Roboto;
    color:#2D2D2D;
`

export const BigText = styled.h2`
    width:100%;
    font-size:1.8em;
    font-weight:800;
    font-family:Gmarket Sans;
    color:#F47873;
    
    position:relative;
    top:25%;
    text-align:left;
    margin-left:26px;
`

export const SmallText = styled.p`
    width:100%;
    font-size:0.95em;
    font-weight:500;
    font-family:Gmarket Sans;
    color:#282828;
    line-height:30px;

    position:relative;
    top:25%;
    text-align:left;
    margin-left:26px;
`

export const ImageWrapper = styled.div`
    position:absolute;
    right:12px;
    bottom:27%;
`