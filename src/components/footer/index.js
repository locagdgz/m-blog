import React, { memo } from 'react'
import { FooterWrapper } from "./style";

export default memo(function Footer() {
  return (
    <FooterWrapper>
      <div>系统由React + Ant Design + Java驱动</div>
      <div>locknlock.club</div>
    </FooterWrapper>
  );
})
