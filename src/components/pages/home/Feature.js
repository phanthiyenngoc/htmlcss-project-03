/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../commons/Container";
import CommonButton from "../../commons/CommonButton";
import React from "react";
import baner01 from "../../../accessts/img/feature/Rectangle 4450.png";
import baner02 from "../../../accessts/img/feature/jonathan-borba-Gt4CWOnHdEE-unsplash.jpg";

const Feature = () => {
  return (
    <section
      css={css`
        margin: 170px 0;
      `}
    >
      <Container>
        <section
          css={css`
            
            display: flex;
            gap: 130px;
          `}
        >
          <figure
            css={css`
            
              max-width: 49%;
              
              position: relative;
              
              padding-right: 83px;
              padding-bottom: 121px;
            `}
          >
            <img
              css={css`
                width: 512px;
                height: 370px;
                object-fit: cover;
                border-radius: 6px;
                margin-left: -25px;
                margin-top: -6px;
                
              `}
              src={baner01}
              alt=""
            />
            <img
              css={css`
                width: 332px;
                height: 370px;
                
                object-fit: cover;
                border-radius: 6px;
                position: absolute;
                top: 121px;
                left: 238px;
              `}
              src={baner02}
              alt=""
            />
          </figure>
          <section
          css={css`
          max-width: 40%;
          display: flex;
          flex-direction: column;
          justify-content:center;
          align-items: flex-start;
          
          `}
          >
            <h2
              css={css`
                font-weight: 600;
                font-size: 5rem;
                line-height: 1.2;
                color: #10375c;
              `}
            >
              Take back your smile with shine.
            </h2>
            <p
              css={css`
                font-weight: 300;
                font-size: 1.8rem;
                line-height: 1.67;
                color: #575f66;
                margin-top: 18px;
                margin-bottom: 38px;
              `}
            >
              If you’re missing multiple teeth due to decay, injury, or the natural aging process, dentures might be the perfect solution.
            </p>
            <CommonButton
              css={css`
                min-width: 205px;
                line-height: 60px;
                border-radius: 30px;
              `}
            >
              Learn More
            </CommonButton>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default Feature;
