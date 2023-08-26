// react
import { Link } from "react-router-dom";
import { useState } from "react";
// hooks
import useFetch from "../hooks/useFetch";
// loader
import { DotPulse } from "@uiball/loaders";

function RecipeList() {
  const [url, setUrl] = useState("http://localhost:3000/recipes");
  const { data: recipes, isPending, setError } = useFetch(url);

  return (
    <ul className="container max-w-5xl mx-auto flex justify-between flex-wrap">
      {isPending && (
        <div className="overlay">
          <DotPulse size={80} s speed={1.3} color="#a6c88c" />
        </div>
      )}
      {recipes &&
        recipes.map((recipe) => {
          const { title, cookingTime, image, ingredients, method } = recipe;
          return (
            <li
              key={recipe.id}
              className="pt-3 pb-5 px-3 rounded-lg border-2 max-w-xs w-full h-full bg-white border-green-600
          "
            >
              <img
                src={image}
                alt={title}
                className="w-80 h-56 object-cover rounded-lg mb-3"
              />
              <hr className="border-none w-70 h-0.5 bg-green-600 mb-3" />
              <h2 className="text-2xl font-bold">
                Title: <span className="italic font-normal">{title}</span>
              </h2>
              <h3 className="text-2xl font-bold">
                Time: <span className="italic font-normal">{cookingTime}</span>
              </h3>
              <h4 className="text-2xl font-bold mb-6">
                Ingredients:{" "}
                <small className="italic font-normal">
                  {ingredients.slice(0, 3)} ...
                </small>
              </h4>
              <Link
                className="border-2 border-black  font-ink uppercase font-bold py-3 px-4 rounded-xl bg-black text-1xl text-white hover:bg-white hover:text-black duration-500 hover:border-black hover:border-2"
                to={`/recipes/${recipe.id}`}
              >
                Read More
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default RecipeList;
