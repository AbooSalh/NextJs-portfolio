import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      {/* logo */}
      <div>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold  flex items-center justify-center"
        >
          <span className="text-white mr-1  flex items-center justify-center">
            Ahmed
          </span>
          <span className="w-12 h-8 rounded bg-white text-black  flex items-center justify-center">
            Saleh
          </span>
        </Link>
      </div>
      {/* responsive menu */}
      <div>
        {/* menu btn */}
        <button className="w-10 h-8 flex flex-col justify-between">
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
      </div>
    </div>
  );
}
