import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`;

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      <h2>Title: {title}</h2>
    </div>
  );
};

export default FetchData;
