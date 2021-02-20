import React, { memo } from 'react'
import { AdvertWrapper } from "./style";

export default memo(function index() {
  return (
    <AdvertWrapper>
      <div className="ad-div comm-box">
        <div>
          <img
            src="http://blogimages.jspang.com/flutter_ad2.jpg"
            width="100%"
            alt="JSPang"
          />
        </div>
        <div>
          <img
            src="http://blogimages.jspang.com/Vue_koa_ad1.jpg"
            width="100%"
            alt="JSPang"
          />
        </div>
        <div>
          <img
            src="http://blogimages.jspang.com/WechatIMG12.jpeg"
            width="100%"
            alt="JSPang"
          />
        </div>
      </div>
    </AdvertWrapper>
  );
})