/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../commons/Container";
import CommonButton from "../../commons/CommonButton";
import React from "react";
import phone from "../../../accessts/img/download/iphone.png";
import ch_play from "../../../accessts/img/download/google_play.png";
import ch_play_icon01 from "../../../accessts/img/download/1_chplay.png";

import ch_play_icon02 from "../../../accessts/img/download/2_chplay.png";

import apple from "../../../accessts/img/download/Apple logo.png";
import icon_apple01 from "../../../accessts/img/download//1apple.png";

import icon_apple02 from "../../../accessts/img/download/2apple.png";

const DownLoad = () => {
  return (
    <section
      css={css`
        margin-top: 265px;
        margin-bottom: 170px;
      `}
    >
      <Container>
        <section
          css={css`
            background: #2e80ce;
            border-radius: 4px;
            position: relative;
            padding: 75px 0;
          `}
        >
          <img
            css={css`
              position: absolute;
              top: -95px;
              left: 70px;
            `}
            src={phone}
            alt=""
          />
          <section
            css={css`
              width: 50%;
              margin-left: 514px;
              margin-right: 70px;
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <h3
              css={css`
                max-width: 489px;
                font-weight: 600;
                font-size: 50px;
                line-height: 60px;
                /* or 120% */

                letter-spacing: -0.02em;

                color: #ffffff;
              `}
            >
              Take back your smile with dentures
            </h3>
            <p
              css={css`
                font-weight: 300;
                font-size: 18px;
                line-height: 30px;
                /* or 167% */

                color: #ffffff;
                margin-top: 18px;
                margin-bottom: 38px;
              `}
            >
              If you’re missing multiple teeth due to decay, injury, or the natural aging process, dentures might be the perfect solution.
            </p>
            <div
              css={css`
                display: flex;
              `}
            >
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  margin-right: 28px;
                  width: 135px;
                  border: 1px solid #ffffff;
                  border-radius: 5px;
                `}
              >
                <img
                  css={css`
                    width: 23px;
                    height: 25px;
                    margin-right: 8px;
                  `}
                  src={ch_play}
                  alt=""
                />
                <div>
                  <img src={ch_play_icon01} alt="" />
                  <img src={ch_play_icon02} alt="" />
                </div>
              </div>
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  width: 135px;
                  border: 1px solid #ffffff;
                  border-radius: 5px;
                `}
              >
                <img
                  css={css`
                    width: 17px;
                    height: 21px;
                    margin-right: 8px;
                  `}
                  src={apple}
                  alt=""
                />
                <div>
                  <img src={icon_apple01} alt="" />
                  <img src={icon_apple02} alt="" />
                </div>
              </div>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default DownLoad;
