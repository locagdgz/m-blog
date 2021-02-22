import styled from "styled-components";

export const HeaderWrapper = styled.div`
    background-color: #fff;
    padding: .4rem;
    overflow: hidden;
    height: 3.2rem;
    border-bottom:1px solid #eee;
    position:fixed ;
    z-index: 999;
    width: 100%;

    .header-logo{
        color:#1e90ff;
        font-size: 1.4rem;
        text-align: left;
    }
    .header-txt{
        font-size: 0.6rem;
        color: #999;
        display: inline-block;
        padding-left: 0.3rem;
    }
    .ant-menu{
        line-height: 2.8rem;
    }
    .ant-menu-item{
        font-size:1rem !important;
        padding-left:1rem;
        padding-right:1rem;
    }
`