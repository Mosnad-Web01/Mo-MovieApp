import Image from "next/image";
import Link from "next/link";
import Actor from "@/components/Actor";

const MovieDetail = async ({ params }) => {
  const { id } = params; // Get the movie ID from the URL parameters

  // Fetch movie data from TMDB API
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=credits`,
    {
      cache: "no-store", // Disable caching for this fetch call
    }
  );

  // Handle potential errors
  if (!res.ok) {
    return <div>Error fetching movie data</div>;
  }

  const movie = await res.json(); // Parse the response to JSON

  return (
    <div className="relative bg-white overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                {movie.title || movie.name}
              </h2>

              <p className="text-gray-700 mt-2">{movie.overview || "No overview available."}</p>

              <p className="mt-4 text-gray-900">
                <strong>Release Date:</strong> {movie.release_date || "N/A"}
              </p>
              <p className="mt-1 text-gray-900">
                <strong>Rating:</strong> {movie.vote_average} ({movie.vote_count} votes)
              </p>

              <Link href="/">
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                  Back to Movies
                </button>
              </Link>
            </div>
          </main>
        </div>
      </div>

      {/* Movie Image Section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {movie.backdrop_path || movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={800}
            height={450}
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full rounded-lg"
            alt={movie.title || movie.name}
          />
        ) : (
          <div className="h-56 w-full bg-red-400 flex items-center justify-center text-white sm:h-72 md:h-96 lg:w-full lg:h-full rounded">
            No Image Available
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto mt-10 p-4">
        <h2 className="mt-8 text-2xl font-bold">Actors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movie.credits.cast.map((actor) => (
            <Actor key={actor.id} actor={actor} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default MovieDetail;
