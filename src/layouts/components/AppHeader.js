import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../components/commons/Container";
import logo from "../../accessts/img/logo.png";
import CommonButton from "../../components/commons/CommonButton";

const AppHeader = () => {
  return (
    <header
      css={css`
        background: #10375c;
        padding-top: 30px;
      `}
    >
      <Container>
        <nav
          css={css`
            background: #10375c;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <ul
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <li>
              <img
                css={css`
                  margin-right: 9px;
                `}
                src={logo}
                alt=""
              />
            </li>
            <li>
              <a
                css={css`
                
                  font-weight: 300;
                  font-size: 1.6rem;
                  line-height: 1.75;
                  color: #ffffff;
                `}
                href="#!"
              >
                shine{" "}
                <span
                  css={css`
                    display: block;
                    line-height: 1;
                    font-size: 1rem;
                    text-align: end;
                  `}
                >
                  smile
                </span>
              </a>
            </li>
          </ul>
          <ul
            css={css`
              display: flex;
            `}
          >
            <li
            css={css`
            
            
            
            
            `}
            >
              <a
                css={css`
                display: inline-flex;
                align-items: center;
                position: relative;
                padding: 0 21px;
                
                  font-weight: 300;
                  font-size: 1.6rem;
                  line-height: 1.75;
                  color: #ffffff;
                  &::before{
                    display: inline-block;
                    content: "";
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #fff;
                    margin-right: 8px;
                    
                  }
                  
                `}
                href="#!"
              >
                Home
              </a>
            </li>
            <li>
              <a
                css={css`
                display: inline-block;
                padding: 0 21px;
                  font-weight: 300;
                  font-size: 1.6rem;
                  line-height: 1.75;
                  color: #c9d2da;
                  
                `}
                href="#!"
              >
                Services
              </a>
            </li>
            <li>
              <a
                css={css`
                display: inline-block;
                padding: 0 21px;
                  font-weight: 300;
                  font-size: 1.6rem;
                  line-height: 1.75;
                  color: #c9d2da;
                `}
                href="#!"
              >
                About
              </a>
            </li>
            <li>
              <a
                css={css`
                display: inline-block;
                padding: 0 21px;
                  font-weight: 300;
                  font-size: 1.6rem;
                  line-height: 1.75;
                  color: #c9d2da;
                `}
                href="#!"
              >
                Doctors
              </a>
            </li>
          </ul>
          <ul>
            <button
              css={css`
                border: none;
                background: none;
                padding: 0 14px;
              `}
            >
              <a
                css={css`
                  font-weight: 300;
                  font-size: 1.6rem;
                  line-height: 1.75;
                  color: #ffffff;
                  &:hover {
                    opacity: 0.9;
                  }
                `}
                href="#!"
              >
                Log In
              </a>
            </button>
            <CommonButton
            css={css`
            min-width: 104px;
            line-height: 44px;
            border-radius: 22px;
            border: none;
            `}
            >
            Sign Up
            </CommonButton>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default AppHeader;
