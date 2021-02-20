import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, List } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import moment from 'moment'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import { ListyWrapper } from "./style";
import Author from "@/components/author";
import Advert from "@/components/advert";

import { listArticle } from "@/service/article";

export default memo(function Listy() {
  const [mylist, setMylist] = useState([]);

  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize:false,
    xhtml: false,
    highlight: function (code) {
            return hljs.highlightAuto(code).value;
    }

  }); 

  useEffect(() => {
    listArticle(1, 10).then((resp) => {
      setMylist(resp.article_list);
    });
  }, []);
  return (
    <>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <ListyWrapper>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={(item) => (
                <List.Item>
                  <div className="list-title">
                    <Link to={`/detail/${item.id}`}>{item.title}</Link>
                  </div>
                  <div className="list-icon">
                    <span>
                      <CalendarOutlined />{moment.unix(item.addTime).format('YYYY-MM-DD HH:mm:ss')}
                    </span>
                    <span>
                      <FolderOutlined />{item.typeName}
                    </span>
                    <span>
                      <FireOutlined />{item.viewCount}人
                    </span>
                  </div>
                  <div className="list-context"
                        dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                  ></div>
                </List.Item>
              )}
            />
          </ListyWrapper>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
    </>
  );
});
