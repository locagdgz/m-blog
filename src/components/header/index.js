import React, { memo,useEffect,useState } from "react";

import {withRouter} from 'react-router-dom'

import { Row, Col, Menu } from "antd";
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { HeaderWrapper } from "./style";



const Header =  memo(function Header(props) {

    const [keySelected, setKeySelected] = useState("/home")
    useEffect(() => {
        console.log(props)
        let pathname = props.location.pathname
        if (pathname.lastIndexOf("/") === 0) {
            setKeySelected(pathname)
        }
    }, [])

  return (
    <HeaderWrapper>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">Header Logo</span>
          <span className="header-txt">Header Txt</span>
        </Col>

        <Col className="menu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" selectedKeys={keySelected}>
            <Menu.Item key="/home">
              <HomeOutlined />
              首页
            </Menu.Item>
            <Menu.Item key="/video">
              <YoutubeOutlined />
              视频
            </Menu.Item>
            <Menu.Item key="/life">
              <SmileOutlined />
              生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </HeaderWrapper>
  );
});

export default withRouter(Header)