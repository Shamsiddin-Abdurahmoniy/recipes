// icons
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mb-12">
      <div className="container max-w-5xl mx-auto py-6 flex justify-between items-center">
        <a href="/" className="flex items-center text-2xl">
          {/* <GiCampCookingPot className="text-6xl" /> */}
          <span className="uppercase font-ink font-black text-3xl">
            recipes
          </span>
        </a>
        <Link
          to="/create"
          className="border-2 border-black font-ink uppercase font-bold py-3 px-4 rounded-xl bg-black text-1xl text-white hover:bg-white hover:text-black duration-500 "
        >
          Create
        </Link>
      </div>
    </header>
  );
}

export default Header;
