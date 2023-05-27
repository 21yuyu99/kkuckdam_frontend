import styled from "styled-components";

export const ReadIconContainer = styled.div<{img:string}>`
    margin-top:50px;
    >div{
        background-color : rgba(255, 209, 105,0.7);
        >img{
            width:50%;
            ${props => props.img == "livebook"?`height:80%;`:""}
        }
    }

`
export const ForItemGap = styled.div`
    display:flex;
    justify-content:center;
    >div>div{
        margin:0 30px;
    }
`
export const BookIndexWrapper = styled.div`
padding-bottom: 40px;
`
export const VideoWrapper = styled.div`
display:none;
>video{
    width:100%;
}
`