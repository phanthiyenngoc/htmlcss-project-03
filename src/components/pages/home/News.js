/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../commons/Container";

import React from "react";
import arow_left from "../../../accessts/img/member/arow_left.png";
import arow_right from "../../../accessts/img/member/arow_right.png";
import new_left from "../../../accessts/img/news/1.jpg";
import new_right from "../../../accessts/img/news/2.jpg";
const ChildrenNew=(props)=>{
    const {img, title, description, link}=props
    return (
        <section
              css={css`
                width: 270px;
                background: #ffffff;
                border: 1px solid #e8ebee;
                border-radius: 12px;
                cursor: pointer;
                &:hover {
                    a{
                        color: #2E80CE;
                    }
                  box-shadow: 0px 18px 50px rgba(0, 0, 0, 0.05);
                  border-radius: 12px;
                }
              `}
            >
              <img
                css={css`
                  width: 100%;
                  object-fit: cover;
                  border-radius: 12px 12px 0px 0px;
                `}
                src={img}
                alt=""
              />
              <div
              css={css`
              padding:18px 22px;
              `}
              >
                <h5
                  css={css`
                    font-weight: 600;
                    font-size: 1.6rem;
                    line-height: 1.62;
                    color: #10375c;
                  `}
                >
                  {title}
                </h5>
                <p
                  css={css`
                    font-weight: 300;
                    font-size: 1.4rem;
                    line-height: 1.71;
                    color: #575f66;
                    margin-top: 10px;
                    margin-bottom: 12px;
                  `}
                >
                  {description}
                </p>
                <a
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 18px;
                    color: #10375c;
                  `}
                  href="#!"
                >
                  {link}
                </a>
              </div>
            </section>
    )
}
const News = () => {
    const array =[
        {
            id:1,
            img:new_left,
            title:"Key Considerations for Regulatory Compliant.",
            decs:"It’s easy to think about medical care from a narrow perspective. You go to the hospital.",
            link:"Learn More"
        },
        {
            id:2,
            img:new_right,
            title:"What Is Population Health Management?",
            decs:"It’s easy to think about medical care from a narrow perspective. You go to the hospital.",
            link:"Learn More"
        },
    ]
  return (
    <section>
      <Container>
        <section
        css={css`
        display: flex;
        gap:130px;
       
        `}
        >
          <section
          css={css`
          max-width: 470px;
          
          `}
          >
            <h3
              css={css`
                font-weight: 600;
                font-size: 5rem;
                line-height: 1.2;
                color: #10375c;
              `}
            >
              Read Latest News & Events.
            </h3>
            <a
              css={css`
                font-weight: 600;
                font-size: 1.8rem;
                line-height: 1.56;
                
                color: #10375c;
                display: inline-block;
                padding:28px 0;
                &:hover{
                    text-decoration-line: underline;
                }
              `}
              href="#!"
            >
              Read All Blog
            </a>
            <section
              css={css`
                display: flex;
                justify-content: flex-start;
                
              `}
            >
              <div
                css={css`
                  display: inline-block;
                  width: 36px;
                  height: 36px;
                  border-radius: 50%;
                  border: 1px solid #575f66;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-right: 18px;
                `}
              >
                <img
                  css={css`
                    width: 5px;
                    height: 10px;
                    color: #575f66;
                  `}
                  src={arow_left}
                  alt=""
                />
              </div>
              <div
                css={css`
                  width: 36px;
                  height: 36px;
                  border-radius: 50%;
                  border: 1px solid #575f66;
                  background: #2e80ce;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: none;
                `}
              >
                <img
                  css={css`
                    width: 5px;
                    height: 10px;
                    color: #fff;
                  `}
                  src={arow_right}
                  alt=""
                />
              </div>
            </section>
          </section>
          <section
            css={css`
              max-width: 570px;
              display: flex;
              gap:30px;
            `}
          >
           {array.map((item, index)=>(
            <ChildrenNew
                ke={index}
                img={item.img}
                 title={item.title}
                  description={item.decs}
                   link={item.link}
            />
           ))}
          </section>
        </section>
      </Container>
    </section>
  );
};

export default News;
