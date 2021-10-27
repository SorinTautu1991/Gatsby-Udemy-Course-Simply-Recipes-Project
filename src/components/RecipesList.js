import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe;
        const pathToImg = getImage(image);
        const slug = slugify(title, { lower: true });
        return (
          <Link className="recipe" to={`/${slug}`} key={id}>
            <GatsbyImage className="recipe-img" image={pathToImg} alt={title} />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime}min | Cook : {cookTime}min
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
