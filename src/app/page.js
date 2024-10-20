import Results from "@/components/Results";
import Carsouel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "popular";

  const res = await fetch(
    `https://api.themoviedb.org/3/movie${
      genre === "popular"
        ? "/popular"
        : genre === "now_playing"
        ? "/now_playing"
        : "/top_rated"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Carsouel />
      <Navbar />
      <Results results={results} genre={genre} />
    </div>
  );
}
