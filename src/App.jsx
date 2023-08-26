// react
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// layout
import RootLayout from "./layout/RootLayout";
import RecipeLayout from "./layout/RecipeLayout";
// pages
import RecipeList from "./pages/RecipeList";
import RecipeItem from "./pages/RecipeItem";
// components
import PageNotFound from "./components/PageNotFound";
import Create from "./components/Create";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<RecipeLayout />}>
          <Route index element={<RecipeList />} />
          <Route path="recipes/:id" element={<RecipeItem />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
