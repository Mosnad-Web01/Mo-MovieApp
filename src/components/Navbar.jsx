import NavbarItem from "./NavItem";
import FavoritesPage from "@/app/favorites/page";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-red-700 p-4 lg:text-lg justify-center gap-6">
      <NavbarItem title="Popular" param="popular" />
      <NavbarItem title="TopRated" param="top_rated" />
      <NavbarItem title="NowPlaying" param="now_playing" />
    </div>
  );
}
