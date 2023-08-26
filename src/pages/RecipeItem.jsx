import { useParams } from "react-router-dom";
import { BsStopwatchFill } from "react-icons/bs";
import { DotPulse } from "@uiball/loaders";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import useFetch from "../hooks/useFetch";
function RecipeItem() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);
  console.log(recipe);
  return (
    <article className="container max-w-5xl mx-auto flex items-center">
      {isPending && (
        <div className="overlay">
          <DotPulse size={80} s speed={1.3} color="#a6c88c" />
        </div>
      )}
      {recipe && (
        <>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-96 h-4/5 object-cover mr-4"
          />
          <div
            className="flex
          "
          >
            <hr className="border-none w-0.5 h-96 bg-green-600 mr-7" />
            <div className="flex-col flex">
              <h1 className="font-ink font-black text-5xl mb-8">
                {recipe.title}
              </h1>
              <h3
                className="flex
              items-center mb-3"
              >
                <BsStopwatchFill className="mr-2 text-lg" />
                <span className="font-semibold text-1xl">
                  {recipe.cookingTime}
                </span>
              </h3>
              <h4 className="text-2xl font-bold mb-3">
                Ingredients:{" "}
                <span className="font-normal text-lg">
                  {recipe.ingredients.map((ing, _, arr) => {
                    return (
                      <Fragment key={ing}>
                        <i>{ing}</i>

                        {arr.at(-1) == ing ? "." : ", "}
                      </Fragment>
                    );
                  })}
                </span>
              </h4>
              <h4 className="text-2xl font-bold mb-auto">
                Method:{" "}
                <span className="font-normal text-lg">{recipe.method}</span>
              </h4>
              <Link
                to="/"
                className="hover:bg-white hover:text-black border-2 border-black bg-black font-ink w-32 h-12 text-white flex justify-center items-center text-3xl rounded-xl"
              >
                Back
              </Link>
            </div>
          </div>
        </>
      )}
    </article>
  );
}

export default RecipeItem;
