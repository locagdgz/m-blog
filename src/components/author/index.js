import React, { memo } from 'react'
import { Avatar, Divider } from "antd";
import { AuthorWrapper } from "./style";
import {
    GithubOutlined,
    QqOutlined,
    WechatOutlined
} from '@ant-design/icons'

export default memo(function Author() {
  return (
    <AuthorWrapper>
      <div className="author-div comm-box">
        <div>
          <Avatar
            size={100}
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1686877530,1743670241&fm=26&gp=0.jpg"
          />
        </div>
        <div className="author-introduction">
         Locaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          <Divider>社交账号</Divider>
          <Avatar size={28} icon={<GithubOutlined/>} className="account" />
          <Avatar size={28} icon={<QqOutlined/>} className="account" />
          <Avatar size={28} icon={<WechatOutlined/>} className="account" />
        </div>
      </div>
    </AuthorWrapper>
  );
})