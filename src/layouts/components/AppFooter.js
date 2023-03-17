/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Container from "../../components/commons/Container";
import logo from "../../accessts/img/logo.png";
import facebook from "../../accessts/img/footer/facebook.png";

import tiwer from "../../accessts/img/footer/tiwer.png";

import inlike from "../../accessts/img/footer/inlike.png";
import CommonButton from "../../components/commons/CommonButton";

const AppFooter = () => {
  return (
    <div
      className="footer"
      css={css`
        &.footer {
          background: #10375c;
          padding: 100px 0 42px;
        }
      `}
    >
      <Container>
        <section>
          <div
            className="footer-row-1"
            css={css`
              display: flex;
              gap: 78px;
            `}
          >
            <div
            
             className="footer-list">
              <div 
              css={css`
              display: flex;
              align-items: center
              `}
              >
              <li
              
              
              >
                <img src={logo} alt="logo"/>
                </li>                         
                            
                    <li 
                    css={css`
                    display: flex;
                    width: 50px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-left: 10px;
                    
                    `}
                    >
                  
                  <a href="#!"
                  className="footer-desc"
                  css={css`
                    &.footer-desc {
                      display: inline-block;
                      font-weight: 400;
                      font-size: 1.8rem;
                      line-height: 1.78;
                      text-align: right;
                      color: #ffffff;
                      display: inline-block;
                      padding-bottom: 20px;
                      }`}
                  >shine
                  <span
                  css={css`
                   display: block;
                      font-weight: 400;
                      font-size: 1rem;
                      line-height: 1;
                      text-align: right;
                      color: #ffffff;
                  `}
                  >smile</span>
                  </a>
                  
                </li>
              </div>
                
              <li
                css={css`
                  max-width: 336px;
                `}
              >
                <a
                  css={css`
                    width: 100%;
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    display: inline-block;
                    padding-bottom: 10px;
                  `}
                  href="#!"
                >
                  Exceptional dental care for all ages. Your great smile begins with a great dentist.
                </a>
              </li>
            </div>
            <ul
              css={css`
                width: 169px;
              `}
              className="footer-list"
            >
              <li>
                <a
                  className="footer-desc"
                  css={css`
                    &.footer-desc {
                      font-weight: 400;
                      font-size: 1.8rem;
                      line-height: 1.78;
                      text-align: right;
                      color: #ffffff;
                      display: inline-block;
                      padding-bottom: 20px;
                    }
                  `}
                  href="#!"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    display: inline-block;
                    padding-bottom: 10px;
                  `}
                  href="#!"
                >
                  Help center
                </a>
              </li>
              <li>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    display: inline-block;
                    padding-bottom: 10px;
                  `}
                  href="#!"
                >
                  Account information
                </a>
              </li>
              <li>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    display: inline-block;
                    padding-bottom: 10px;
                  `}
                  href="#!"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    display: inline-block;
                    padding-bottom: 10px;
                  `}
                  href="#!"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  className="footer-desc"
                  css={css`
                    &.footer-desc {
                      font-weight: 400;
                      font-size: 1.8rem;
                      line-height: 1.78;
                      text-align: right;
                      color: #ffffff;
                      display: inline-block;
                      padding-bottom: 20px;
                    }
                  `}
                  href="#!"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    display: inline-block;
                    padding-bottom: 10px;
                  `}
                  href="#!"
                >
                  Help center
                </a>
              </li>
              <li>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    display: inline-block;
                    padding-bottom: 10px;
                  `}
                  href="#!"
                >
                  Account information
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <a
                  className="footer-desc"
                  css={css`
                    &.footer-desc {
                      font-weight: 400;
                      font-size: 1.8rem;
                      line-height: 1.78;
                      text-align: right;
                      color: #ffffff;
                      display: inline-block;
                      padding-bottom: 20px;
                    }
                  `}
                  href="#!"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    display: inline-block;
                    padding-bottom: 10px;
                  `}
                  href="#!"
                >
                  Help center
                </a>
              </li>
              <li>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    display: inline-block;
                    padding-bottom: 10px;
                    max-width: 134px;
                  `}
                  href="#!"
                >
                  Account information
                </a>
              </li>
              <li>
                <a
                  className="footer-desc"
                  css={css`
                    &.footer-desc {
                      font-weight: 400;
                      font-size: 1.8rem;
                      line-height: 1.78;
                      text-align: right;
                      color: #ffffff;
                      display: inline-block;
                      padding-bottom: 20px;
                    }
                  `}
                  href="#!"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    display: inline-block;
                    padding-bottom: 10px;
                  `}
                  href="#!"
                >
                  Help center
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <a
                  className="footer-desc"
                  css={css`
                    &.footer-desc {
                      font-weight: 400;
                      font-size: 1.8rem;
                      line-height: 1.78;
                      text-align: right;
                      color: #ffffff;
                      display: inline-block;
                      padding-bottom: 20px;
                    }
                  `}
                  href="#!"
                >
                  Stay In Touch
                </a>
              </li>
              <li
                css={css`
                  margin-bottom: 18px;
                `}
              >
                <a
                  css={css`
                    margin-right: 10px;
                  `}
                  href="#!"
                >
                  <img src={facebook} alt="icon-facebook" />
                </a>
                <a
                  css={css`
                    margin-right: 10px;
                  `}
                  href="#!"
                >
                  <img src={tiwer} alt="icon-tiwer" />
                </a>
                <a href="#!">
                  <img src={inlike} alt="incon-inlike" />
                </a>
              </li>
              <li>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    display: inline-block;
                    padding-bottom: 20px;
                  `}
                  href="#!"
                >
                  Subscribe
                </a>
              </li>
              <li>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #a9b3bb;
                    margin-bottom: 10px;
                  `}
                  href="#!"
                >
                  Subscribe our newsletter for the latest update of Dental care
                </a>
              </li>

              <li>
                <input
                  css={css`
                    margin-right: 10px;
                    max-width: 212px;
                    height: 46px;
                    background: #10375c;
                    color: #a9b3bb;
                    border: 1px solid #406181;
                    border-radius: 4px;
                    &::placeholder {
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #a9b3bb;
                    }
                  `}
                  type="email"
                  placeholder="Enter your email..."
                />
                <CommonButton
                  css={css`
                    border-radius: 4px;
                    min-width: 108px;
                    line-height: 46px;
                  `}
                >
                  Subscribe
                </CommonButton>
              </li>
            </ul>
          </div>
          <div
            className="footer-row-2"
            css={css`
              &.footer-row-2 {
                display: flex;
                flex-direction: column;

                align-items: center;
              }
            `}
          >
            <p
              css={css`
                display: inline-block;
                width: 1170px;
                height: 1px;
                background: #406181;
                margin-bottom: 28px;
              `}
            ></p>
            <p
              className="footer__desc"
              css={css`
                font-family: "Open Sans";
                font-style: normal;
                font-weight: 400;
                font-size: 1.4rem;
                line-height: 1.86;
                color: #aab3ba;
              `}
            >
              2021 GDN. Copyright and All rights reserved.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AppFooter;
