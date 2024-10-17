import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result, genre }) {
  const isMovieOrTv = genre === "popular" || genre === "top_rated" || genre === "now_playing";
  const imagePath = result.backdrop_path || result.poster_path || null;

  return (
    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 sm:hover:shadow-red-400 sm:shadow-md sm:border sm:border-red-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        {imagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${imagePath}`}
            width={500}
            height={300}
            className="absolute -z-10 sm:rounded-t-lg inset-0 h-full w-full object-cover"
            alt={result.title || result.name}
          />
        ) : (
          <div className="w-full bg-red-400 flex items-center justify-center text-white">
            No Image Available
          </div>
        )}

        <div className="p-2 inset-0 bg-gradient-to-t to-transparent">
          {isMovieOrTv && (
            <>
              <h2 className="z-8 mt-3 text-3xl font-bold text-white">
                {result.title || result.name}
              </h2>
              <p className="line-clamp-2 text-md text-white">{result.overview}</p>
              <p className="flex items-center text-white ">
                {result.release_date}
                <FiThumbsUp className="h-5 mr-1 ml-3" />
                {result.vote_count}
              </p>
            </>
          )}
        </div>
      </Link>
    </div>
  );
}
