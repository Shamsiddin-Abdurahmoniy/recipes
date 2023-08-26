import { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [method, setMethod] = useState("");
  const [image, setImage] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      title,
      cookingTime,
      image,
      method,
      ingredients,
    });
    setTitle("");
    setCookingTime("");
    setMethod("");
    setImage("");
    setIngredients("");
    setIngredient("");
  }
  const addIngredient = (e) => {
    e.preventDefault();
    if (!ingredients.includes(ingredient)) {
      setIngredients((prev) => {
        return [...prev, ingredient];
      });
    }

    setIngredient("");
  };
  return (
    <section className="container max-w-5xl mx-auto flex justify-center items-center">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="title"
              type="text"
              placeholder="Title"
              autoComplete="off"
              value={title}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="cooking-time"
            >
              Cooking time:
            </label>
            <input
              onChange={(e) => {
                setCookingTime(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="cooking-time"
              type="number"
              placeholder="Cooking time"
              value={cookingTime}
            />
          </div>
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="ingredients"
            >
              Ingredients: <span id="ingrdients"></span>
            </label>
            <div className="flex gap-1 mb-2">
              <input
                onChange={(e) => {
                  setIngredient(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                autoComplete="off"
                value={ingredient}
              />
              <button
                onClick={addIngredient}
                className="border px-3 py-2 rounded-md bg-emerald-500 text-white"
              >
                Add
              </button>
            </div>
            <i>Ingrdients:</i>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="image-url"
            >
              Image URL
            </label>
            <input
              onChange={(e) => {
                setImage(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="image-url"
              type="url"
              placeholder="URL"
              value={image}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="method"
            >
              Method:
            </label>
            <textarea
              onChange={(e) => {
                setMethod(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="method"
              type="text"
              placeholder="Method"
              value={method}
            />
          </div>
          <button className="border-2 border-black font-ink uppercase font-bold py-2 px-3 rounded-xl bg-black text-base text-white hover:bg-white hover:text-black duration-500 ">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Create;
