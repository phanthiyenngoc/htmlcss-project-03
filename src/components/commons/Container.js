/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from 'react';

const Container = (props) => {
    const {children}= props
    return (
        <div 
        css={css`
        width: 1170px;
        margin-left: auto;
        margin-right: auto;
        max-width: calc(100%-48px);
        `}
        >
          {children}  
        </div>
    );
};

export default Container;