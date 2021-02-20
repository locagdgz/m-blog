import React, { memo, useEffect, useState } from "react";
import { Row, Col, Breadcrumb, Affix } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import moment from "moment";

import { DetailWrapper } from "./style";
import Author from "@/components/author";
import Advert from "@/components/advert";
import Tocify from "@/components/tocify/tocify.tsx";
import { getArticle } from "@/service/article";

export default memo(function Detail(props) {
  const articleId = props.match.params.id;

  const [detailedArticle, setDetailedArticle] = useState({});

  const [html, setHtml] = useState("");

  const [tocify, setTocify] = useState(new Tocify());

  const renderer = new marked.Renderer();

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  useEffect(() => {
    getArticle(articleId).then((resp) => {
      setDetailedArticle(resp.detailed_article);
      setHtml(marked(resp.detailed_article.articleContent));
    });
  }, []);

  const {
    addTime,
    articleContent,
    //   introduce,
    title,
    typeName,
    viewCount,
  } = detailedArticle;
  return (
    <>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <DetailWrapper>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{typeName}</Breadcrumb.Item>
                <Breadcrumb.Item>{title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">{title}</div>

              <div className="center detailed-icon">
                <span>
                  <CalendarOutlined />{" "}
                  {moment.unix(addTime).format("YYYY-MM-DD HH:mm:ss")}
                </span>
                <span>
                  <FolderOutlined /> {typeName}
                </span>
                <span>
                  <FireOutlined /> {viewCount}人
                </span>
              </div>
              <div
                className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
          </DetailWrapper>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
    </>
  );
});
