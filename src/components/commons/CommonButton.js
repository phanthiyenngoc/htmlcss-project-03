/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";

const CommonButton = (props) => {
    
  return (
    <button
      css={css`
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 1.67;
        text-align: center;
        color: #ffffff;
        padding: 0 16px;
        min-width: 108px;
        background: #2e80ce;
        border-radius: 30px;
        border:none;
        &:hover{
            opacity: 0.9;
            cursor: pointer;
        }
      `}
      {...props}
    >
        {props.children}
    </button>
  );
};

export default CommonButton;
