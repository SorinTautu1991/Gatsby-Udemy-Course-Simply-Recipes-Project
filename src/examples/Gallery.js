import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { ne: ".svg" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              layout: FIXED
              placeholder: BLURRED
              transformOptions: { grayscale: true }
            )
          }
        }
      }
    }
  `);
  console.log(data);

  return (
    <div>
      <h2>Simple image gallery</h2>
    </div>
  );
};

export default Gallery;
