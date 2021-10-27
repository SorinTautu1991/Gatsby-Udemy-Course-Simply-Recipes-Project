import React from "react";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              I'm baby woke sriracha shabby chic, dreamcatcher quinoa
              williamsburg church-key mlkshk you probably haven't heard of them.
            </p>
            <p>
              Farm-to-table truffaut paleo, gentrify stumptown tacos ethical
              post-ironic sustainable migas
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            className="about-img"
            src="../assets/images/about.jpeg"
            alt="Person puring salt in bowl"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomesauce...</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default About;
