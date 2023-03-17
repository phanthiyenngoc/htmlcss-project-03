/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../commons/Container";
import CommonButton from "../../commons/CommonButton";
import React from "react";
import icon_search01 from "../../../accessts/img/search/icon_search01.png";
import icon_search02 from "../../../accessts/img/search/icon_search02.png";
import icon_search03 from "../../../accessts/img/search/icon_search03.png";

function ChildrenSearch(props) {
  const { img, title, description, link } = props;
  return (
    <section
      css={css`
        max-width: 31%;
        border: 16px solid #EAF6FF;
        background: #FFFFFF;
        border-radius: 4px;
        padding:43px;
        &:hover{
            a{color: #2E80CE;}
            border-color: #2E80CE;

        }
        
      `}
    >
      <img 
      css={css`
      width: 67px;
      height: 67px;
      `}
      src={img} alt="" />
      <h3
        css={css`
        margin-top: 20px;
        margin-bottom: 28px;
          font-weight: 600;
          font-size: 2.6rem;
          line-height: 1.38;
          color: #10375c;
        `}
      >
        <a href="#!">{title}</a>
      </h3>
      <p
        css={css`
          font-weight: 300;
          font-size: 1.6rem;
          line-height: 1.75;
          color: #575f66;
        `}
      >
        {description}
      </p>
      <a
        css={css`
        display: inline-block;
          font-weight: 300;
          font-size: 1.6rem;
          color: #575f66;
          margin-top: 18px;
         
        `}
        href="#!"
      >
        {link}
      </a>
    </section>
  );
}

const Search = () => {
  const array = [
    {
      id: 1,
      desc: "Search a doctor by education, qualifications or experience-contact for inquiry.",
      img: icon_search01,
      title: "Search doctor",
      link: "Learn More",
    },
    {
      id: 2,
      desc: "Search a doctor by education, qualifications or experience-contact for inquiry.",
      img: icon_search02,
      title: "Find best doctor",
      link: "Learn More",
    },
    {
      id: 3,
      desc: "Search a doctor by education, qualifications or experience-contact for inquiry.",
      img: icon_search03,
      title: "Get treatment",
      link: "Learn More",
    },
  ];
  return (
    <section
      css={css`
        background: #f7fbff;
        padding: 100px 0;
      `}
    >
      <Container>
        <section>
          <section>
            <h2
              css={css`
                font-weight: 600;
                font-size: 5rem;
                line-height: 1.2;
                color: #10375c;
              `}
            >
              How it works
            </h2>
            <p
              css={css`
                font-weight: 300;
                font-size: 1.8rem;
                line-height: 1.67;
                color: #575f66;
                max-width: 468px;
                margin-top: 18px;
              `}
            >
              Exceptional dental care for all ages. Your great smile begins with a great dentist.
            </p>
          </section>
        </section>
        <section
        css={css`
        display: flex;
        gap:30px;
        margin-top: 70px;
        `}
        >
          {array.map((item, index) => (
            <ChildrenSearch key={index} img={item.img} title={item.title} description={item.desc} link={item.link} />
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Search;
