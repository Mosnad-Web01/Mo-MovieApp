import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <>
      <nav className="relative px-4 py-2 flex justify-between items-center bg-white  dark:bg-black border-b-2 dark:border-gray-600">
        <Link
          href="/"
          className="text-2xl font-bold text-red-700 dark:text-white"
        >
          NetFlex
        </Link>

        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-red-700 dark:text-gray-100 p-1"
            id="navbar_burger"
          >
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Hamburger menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex">
          <DarkModeSwitch />
          <Link
            href="/favorites"
            className="py-1.5 px-3 m-1 text-center bg-red-700 border rounded-md text-white hover:bg-red-500 dark:text-gray-200 dark:bg-red-700"
          >
            Favorites
          </Link>
          <Link
            href="/auth/login"
            className="py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 hidden lg:inline-block"
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="navbar-menu dark:bg-gray-800 relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50"></div>
        <nav className="fixed bg-white dark:bg-gray-600 top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link
              href="/"
              className="mr-auto text-2xl font-bold  text-red-700 dark:text-gray-100"
            >
              NetFlex
            </Link>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="mt-auto">
            <div className="pt-6">
              <button
                id="theme-toggle-2"
                type="button"
                className="py-2.5 w-[97.6%] mb-3 rounded-xl flex justify-center align-middle py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700"
              >
                <svg
                  id="theme-toggle-dark-icon-2"
                  className="w-6 h-6 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon-2"
                  className="w-6 h-6 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 5.05a1 1 0 011.415 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm4.243 12.029a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zm7.071-5.829a1 1 0 000 1.415l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 011.414-1.414z"></path>
                </svg>
              </button>
            </div>
            <Link
              href="/favorites"
              className="py-1.5 w-full text-center bg-red-700 border rounded-md text-white hover:bg-red-500 dark:text-gray-200 dark:bg-red-700"
            >
              Favorites
            </Link>
            <Link
              href="/login"
              className="py-1.5 w-full text-center bg-gray-100 border border-gray-300 rounded-md text-black hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
