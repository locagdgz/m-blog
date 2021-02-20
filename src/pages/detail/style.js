import styled from "styled-components";

export const DetailWrapper = styled.div`
  .bread-div {
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
    background-color: #e1f0ff;
  }
  .detailed-title {
    font-size: 1.8rem;
    text-align: center;
    padding: 1rem;
  }
  .detailed-icon {
    span {
      margin-left: .5rem;
    }
  }
  .center {
    text-align: center;
  }
  .detailed-content {
    padding: 1.3rem;
    font-size: 1rem;
  }
  pre {
    display: block;
    background-color: #273544 !important;
    padding: 0.5rem !important;
    overflow-y: auto;
    font-weight: 300;
    font-family: Menlo, monospace;
    border-radius: 0.3rem;
  }
  pre > code {
    border: 0px !important;
    // 背景板颜色
    background-color: #273544 !important;
    color: #fff;
  }
  code {
    display: inline-block;
    background-color: #f3f3f3;
    border: 1px solid #fdb9cc;
    border-radius: 3px;
    font-size: 14px;
    padding-left: 5px;
    padding-right: 5px;
    color: #4f4f4f;
    margin: 0px 3px;
    font-family: myFamily;
  }

  .title-anchor {
    color: #888 !important;
    padding: 4px !important;
    margin: 0rem !important;
    height: auto !important;
    line-height: 1.2rem !important;
    font-size: 0.7rem !important;
    border-bottom: 1px dashed #eee;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .active {
    color: rgb(30, 144, 255) !important;
  }
  .nav-title {
    text-align: center;
    color: #888;
    border-bottom: 1px solid rgb(30, 144, 255);
  }
  .article-menu {
    font-size: 12px;
  }
  iframe {
    height: 34rem;
  }
  .detailed-content img {
    width: 100%;
    border: 1px solid #f3f3f3;
  }
  .title-level3 {
    display: none !important;
  }
  .ant-anchor-link-title {
    font-size: 12px !important;
  }
  .ant-anchor-wrapper {
    padding: 5px !important;
  }
`;
