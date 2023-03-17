/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../commons/Container";
import CommonButton from "../../commons/CommonButton";
import React from "react";
import banner_first from "../../../accessts/img/header/jon-tyson-kpLEaeScdHY-unsplash.jpg";
import banner_second from "../../../accessts/img/header/ozkan-guner-SCesuxmaVmo-unsplash.jpg";

const Hero = () => {
  return (
    <div
      css={css`
        background: #10375c;
      `}
    >
      <Container>
        <section
          css={css`
            display: flex;
            gap: 113px;
            justify-content: space-between;
            padding-top: 84px;
            padding-bottom: 110px;
            background: #10375c;
          `}
        >
          <section
            css={css`
              width: 45%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            `}
          >
            <h1
              css={css`
                font-family: "Sora";
                font-style: normal;
                font-weight: 600;
                font-size: 7rem;
                line-height: 1.14;
                color: #ffffff;
              `}
            >
              Exceptional dental care for all ages.
            </h1>
            <p
              css={css`
                font-weight: 300;
                font-size: 1.8rem;
                line-height: 1.67;
                color: #c9d2da;
                margin-top: 32px;
                margin-bottom: 48px;
              `}
            >
              Exceptional dental care for all ages. Your great smile begins with a great dentist.
            </p>
            <div>
              <CommonButton
                css={css`
                  margin-right: 38px;
                  min-width:205px;
                  line-height: 60px;
                  border-radius: 30px;
                  border: none;
                `}
              >
                Book Online
              </CommonButton>
              <span
                css={css`
                  font-weight: 400;
                  font-size: 1.8rem;
                  line-height: 1.67;                  
                  color: #ffffff;
                `}
              >
                or call (123) 456-7890
              </span>
            </div>
          </section>
          <figure
            css={css`
              max-width: 45%;
              display: flex;
              align-items: center;
            `}
          >
            <figure
              css={css`
                width: 330px;
              `}
            >
              <img
                css={css`
                  width: 100%;
                  object-fit: cover;
                  border-radius: 6px;
                `}
                src={banner_first}
                alt=""
              />
            </figure>
            <figure
              css={css`
                width: 210px;
                border-radius: 6px;
              `}
            >
              <img
                css={css`
                  width: 100%;
                  object-fit: cover;
                  border-radius: 0px 6px 6px 0px;
                `}
                src={banner_second}
                alt=""
              />
            </figure>
          </figure>
        </section>
      </Container>
    </div>
  );
};

export default Hero;
