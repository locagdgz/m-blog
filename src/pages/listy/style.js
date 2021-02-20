import styled from "styled-components";

export const ListyWrapper = styled.div`
  .list-title {
    font-size: 1.3rem;
    color: #1e90ff;
    padding: 0 0.5rem;
  }
  .list-context {
    color: #777;
    padding: 0.5rem;
    img {
      width: 100%;
      border-radius: 5px;
      border: 1px solid #f0f0f0;
      max-width: 1000px !important;
      display: block;
      margin: 8px auto;
    }
  }
  .list-icon {
    padding: 0.5rem 0;
    color: #aaa;
  }
  .list-icon span {
    display: inline-block;
    padding: 0 10px;
  }
  pre {
    display: block;
    background-color: #283646 !important;
    padding: 0.5rem !important;
    overflow-y: auto;
    font-weight: 300;
    font-family: Menlo, monospace;
    border-radius: 0.3rem;
  }

  pre > code {
    border: 0px !important;
    background-color: #283646 !important;
    color: #fff;
  }
  code {
    display: inline-block;
    background-color: #f3f3f3;
    border: 1px solid #fdb9cc;
    border-radius: 3px;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
    color: #4f4f4f;
    margin: 0px 3px;
  }
`;
