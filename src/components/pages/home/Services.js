/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../commons/Container";
import CommonButton from "../../commons/CommonButton";
import banner from "../../../accessts/img/header/1.jpg";
import icon02 from "../../../accessts/img/services/2.png";
import icon01 from "../../../accessts/img/services/icon1.png";

import React from "react";
const ChildrenServeces=(props)=>{
  const {img, title, desc} = props
  return (
    <div
                css={css`
                  display: flex;
                  align-items: center;
                  background: #ffffff;                  
                  border-radius: 10px;
                  padding-bottom: 20px;
                  &:hover {
                    cursor: pointer;
                    background: #ffffff;
                    box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.05);
                    
                  }
                `}
              >
                <img src={img} alt="" />
                <div>
                  <p
                    css={css`
                      font-weight: 600;
                      font-size: 1.8rem;
                      color: #10375c;
                      padding-bottom: 8px;
                    `}
                  >
                    {title}
                  </p>
                  <p
                    css={css`
                      font-weight: 300;
                      font-size: 1.6rem;
                      line-height: 1.75;
                      color: #575f66;
                    `}
                  >
                   {desc}
                  </p>
                </div>
    </div>
  )
}
const Services = () => {
  const array=[
    {
      id:1, 
      img:icon01,
      title:"Oral Surgery",
      desc:"Everything you expect and then some. Cleanings, fillings, and x-rays."
    },
    {
      id:2, 
      img:icon02,
      title:"Wisdom Teeth Removal",
      desc:"Everything you expect and then some. Cleanings, fillings, and x-rays."
    },
    {
      id:3, 
      img:icon02,
      title:"Preventative Dentistry",
      desc:"Everything you expect and then some. Cleanings, fillings, and x-rays."
    },
  ]
  return (
    <div>
      <Container>
        <section
          css={css`
           
            margin: 170px 0;
          `}
        >
          <section
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <h2
              css={css`
                font-weight: 600;
                font-size: 5rem;
                line-height: 1.2;
                text-align: center;
                color: #10375c;
              `}
            >
              Our services
            </h2>
            <p
              css={css`
                max-width: 468px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 18px;
                margin-bottom: 70px;
                font-weight: 300;
                font-size: 18px;
                line-height: 1.67;
                text-align: center;
                color: #575f66;
              `}
            >
              Exceptional dental care for all ages. Your great smile begins with a great dentist.
            </p>
          </section>
          <section
            css={css`
              display: flex;

              justify-content: space-between;
              gap: 130px;
            `}
          >
            <figure
              css={css`
                max-width: 49%;
              `}
            >
              <img
                css={css`
                  width: 100%;
                  height: 570px;
                  object-fit: cover;
                  border-radius: 12px;
                `}
                src={banner}
                alt="Our services"
              />
            </figure>
            <section
              css={css`
                max-width: 40%;
                display: flex;
                flex-direction: column;
                justify-content: center;
              `}
            >
              {array.map((item, index)=>(
                <ChildrenServeces
                key={index}
                img={item.img}
                title={item.title}
                 desc={item.desc}
                 />
                
              ))}
              {/* <div
                css={css`
                  display: flex;
                  background: #ffffff;                  
                  border-radius: 10px;
                  padding-bottom: 20px;
                  &:hover {
                    cursor: pointer;
                    background: #ffffff;
                    box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.05);
                    
                  }
                `}
              >
                <img src={icon02} alt="icon" />
                <div>
                  <p
                    css={css`
                      font-weight: 600;
                      font-size: 1.8rem;
                      color: #10375c;
                      padding-bottom: 8px;
                    `}
                  >
                    Wisdom Teeth Removal
                  </p>
                  <p
                    css={css`
                      font-weight: 300;
                      font-size: 1.6rem;
                      line-height: 1.75;
                      color: #575f66;
                    `}
                  >
                    Everything you expect and then some. Cleanings, fillings, and x-rays.
                  </p>
                </div>
              </div>
              <div
                css={css`
                  display: flex;
                  background: #ffffff;
                  border-radius: 10px;
                  padding-bottom: 20px;
                  margin-bottom: 55px;
                  &:hover {
                    cursor: pointer;
                    background: #ffffff;
                    box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.05);
                    
                  }
                `}
              >
                <img src={icon02} alt="icon" />
                <div>
                  <p
                    css={css`
                      font-weight: 600;
                      font-size: 1.8rem;
                      line-height: 23px;
                      color: #10375c;
                      padding-bottom: 8px;
                    `}
                  >
                    Preventative Dentistry
                  </p>
                  <p
                    css={css`
                      font-weight: 300;
                      font-size: 1.6rem;
                      line-height: 1.75;
                      color: #575f66;
                    `}
                  >
                    Everything you expect and then some. Cleanings, fillings, and x-rays.
                  </p>
                </div>
              </div> */}
              <div
                css={css`
                  display: inline-block;
                  text-align: start;
                `}
              >
                <CommonButton
                  css={css`
                    min-width: 205px;
                    line-height: 60px;
                    border-radius: 30px;
                  `}
                >
                  All Services
                </CommonButton>
              </div>
            </section>
          </section>
        </section>
      </Container>
    </div>
  );
};

export default Services;
