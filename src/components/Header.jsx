// icons
import { GiCampCookingPot } from "react-icons/gi";

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
        <button className="border-2 border-black font-ink uppercase font-bold py-3 px-4 rounded-xl bg-black text-1xl text-white hover:bg-white hover:text-black duration-500 ">
          Create
        </button>
      </div>
    </header>
  );
}

export default Header;
