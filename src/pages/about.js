import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = () => {
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
      </main>
    </Layout>
  );
};

export default About;
