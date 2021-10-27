import React from "react";
import Layout from "../components/Layout";
import { setupTags } from "../utils/setupTags";
import { graphql, Link } from "gatsby";

const Tags = ({
  data: {
    allContentfulRecipe: { nodes },
  },
}) => {
  const newTags = setupTags(nodes);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link className="tag" to={`/${text}`} key={index}>
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
