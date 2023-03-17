/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../commons/Container";
import CommonButton from "../../commons/CommonButton";
import React from "react";

import avatar01 from "../../../accessts/img/member/1.jpg";
import avatar02 from "../../../accessts/img/member/2.jpg";

import avatar03 from "../../../accessts/img/member/3.jpg";

import avatar04 from "../../../accessts/img/member/4.jpg";
import arow_left from "../../../accessts/img/member/arow_left.png";

import arow_right from "../../../accessts/img/member/arow_right.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const slideConfig = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination:{
    clickable: true,
  },
  modules: [Autoplay, Pagination],

  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     1080: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //   },
};


function ChildrenMember(props) {
const{img, title, description}=props
  return (
    <figure
      css={css`
    min-width: 23%;
        background: #ffffff;
      `}
    >
      <img
        css={css`
          width: 100%;
          height: 290px;
          object-fit: cover;
          background: #eaf6ff;
          border-radius: 6px;
        `}
        src={img}
        alt=""
      />
      <figcaption
        css={css`
          font-weight: 400;
          font-size: 1.6rem;
          line-height: 1.75;
          text-align: center;
          color: #10375c;
          margin-top: 12px;
        `}
      >
        {title}
      </figcaption>
      <figcaption
        css={css`
          font-weight: 300;
          font-size: 1.4rem;
          line-height: 1.86;
          text-align: center;
          color: #575f66;
        `}
      >
        {description}
      </figcaption>
    </figure>
  );
}

const Member = () => {

    const array =[
        {
            id:1,
            image:avatar01,
            title:"Dr. Essence Page",
            desc:"DDS, California - Linda University"
        },
        {
            id:2,
            image:avatar02,
            title:"Dr. Essence Page",
            desc:"DDS, California - Linda University"
        },
        {
            id:3,
            image:avatar03,
            title:"Dr. Essence Page",
            desc:"DDS, California - Linda University"
        },
        {
            id:4,
            image:avatar04,
            title:"Dr. Essence Page",
            desc:"DDS, California - Linda University"
        },
        {
          id:5,
          image:avatar01,
          title:"Dr. Essence Page",
          desc:"DDS, California - Linda University"
      },
      {
          id:6,
          image:avatar02,
          title:"Dr. Essence Page",
          desc:"DDS, California - Linda University"
      },
      {
          id:7,
          image:avatar03,
          title:"Dr. Essence Page",
          desc:"DDS, California - Linda University"
      },
      {
          id:8,
          image:avatar04,
          title:"Dr. Essence Page",
          desc:"DDS, California - Linda University"
      },
    ]
  return (
    <section>
      <Container>
        <section
          css={css`
           
            margin-bottom: 70px;
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
            Our virtual dentist
          </h2>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 38px;
            `}
          >
            <CommonButton
              css={css`
                min-width: 205px;
                line-height: 60px;
                border-radius: 30px;
              `}
            >
              Meet our dentist
            </CommonButton>
          </div>
        </section>
        <section
        css={css`
        display: flex;
        justify-content: space-between;
        gap:30px ;
        padding-bottom: 74px;
        `}
        >
        <Swiper {...slideConfig} className="mySwiper"
        css={css`
          .swiper-pagination{
            left: 0;
            top:150px;
            width: 150px;
            .swiper-pagination-bullet{
              background: #634700;
              &.swiper-pagination-bullet-active{
                background-color: yellow;
              }
            }
          }
           
          `}
        >
          {array.map((item, index)=>(
            <SwiperSlide key={index}>
            <ChildrenMember
               

                img={item.image}
                title={item.title}
                description={item.desc}
            />
            </SwiperSlide>
          ))}
          </Swiper>
        </section>
        <section
        css={css`
        
        display: flex;
        justify-content: center;
        align-items: center;
        `}
        >
           <div
           css={css`
            display: inline-block;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1px solid #575F66;
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
             color:#575F66;
           
            `}
            src={arow_left} alt="" />
           </div>
           <div
           css={css`
            
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1px solid #575F66;
            background: #2E80CE;
            display:flex;
            justify-content: center;
            align-items: center;
            border: none;
            `}
           >
           <img
            css={css`
            
            width: 5px;
            height: 10px;
             color:#fff;
           
            `}
            src={arow_right} alt="" />
            </div>
        </section>
      </Container>
    </section>
  );
};

export default Member;
