import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { ne: "svg" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              placeholder: BLURRED
              width: 200
              height: 200
            )
          }
        }
      }
    }
  `);

  const {
    allFile: { nodes },
  } = data;
  console.log(nodes);

  return (
    <Wrapper>
      {nodes.map((img, index) => {
        const {
          name,
          childImageSharp: { gatsbyImageData },
        } = img;
        return (
          <article className="item" key={index}>
            <GatsbyImage
              className="gallery-img"
              image={gatsbyImageData}
              alt={name}
            />
            <p>{name}</p>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`;

export default Gallery;
