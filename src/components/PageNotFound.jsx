import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h1 className="mb-8 text-8xl text-orange-900">Error 404</h1>
      <h4
        className="
      font-semibold text-orange-900 text-2xl"
      >
        Woops.Looks like this page doesn't exist😥
      </h4>
      <Link
        className="mt-5 text-xl font-medium text-yellow-500 underline font-bold"
        href="/"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
