/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../commons/Container";
import CommonButton from "../../commons/CommonButton";
import React from "react";

const Appointment = () => {
  return (
    <section
      css={css`
        margin: 170px 0;
      `}
    >
      <Container>
        <section
          css={css`
            background: #f7fbff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding:100px 0;
          `}
        >
          <h2
            css={css`
              font-size: 5rem;
              line-height: 1.2;
              text-align: center;
              color: #10375c;
            `}
          >
            Always welcoming new patients
          </h2>
          <span
            css={css`
              display: inline-block;

              width: 136px;
              height: 2px;
              background: #2e80ce;
              margin:18px 0;
            `}
          ></span>
          <p
            css={css`
              font-weight: 300;
              font-size: 1.6rem;
              line-height: 1.75;              
              text-align: center;
              color: #575f66;
              max-width: 617px;
            `}
          >
            Take control of your dental health and get the personalized care you deserve. Call (541) 772-8846 to schedule
          </p>
          <CommonButton
          css={css`
          min-width: 205px;
          line-height: 60px;
          margin-top: 38px;
          `}
          >
          Appointment
          </CommonButton>
        </section>
      </Container>
    </section>
  );
};

export default Appointment;
