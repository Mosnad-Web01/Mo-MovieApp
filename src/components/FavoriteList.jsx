"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import FavoriteIcon from "./FavoriteIcon";

export default function FavoriteList() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favoriteIds = JSON.parse(localStorage.getItem("dufavorites")) || [];
      fetchMovies(favoriteIds);
    }
  }, []);

  const fetchMovies = async (ids) => {
    if (ids.length > 0) {
      const fetchedMovies = await Promise.all(
        ids.map((id) =>
          fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
          ).then((res) => res.json())
        )
      );
      setFavoriteMovies(fetchedMovies);
    }
  };

  return (
    <div className="min-h-screen py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Your Favorite Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => {
            const imagePath = movie.backdrop_path || movie.poster_path || null;

            return (
              <div
                key={movie.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 sm:hover:shadow-red-400 sm:shadow-md sm:border sm:border-red-400 sm:m-2 transition-shadow duration-200"
              >
                <Link href={`/movie/${movie.id}`}>
                  {imagePath ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${imagePath}`}
                      width={500}
                      height={300}
                      className="absolute -z-10 sm:rounded-t-lg inset-0 h-full w-full object-cover"
                      alt={movie.title}
                    />
                  ) : (
                    <div className="w-full bg-red-400 flex items-center justify-center text-white">
                      No Image Available
                    </div>
                  )}

                  <div className="p-2 inset-0 bg-gradient-to-t to-transparent">
                    <h2 className="z-8 mt-3 text-3xl font-bold text-white">
                      {movie.title}
                    </h2>
                    <p className="line-clamp-2 text-md text-white">
                      {movie.overview}
                    </p>
                    <p className="flex items-center text-white">
                      {movie.release_date}
                      <FiThumbsUp className="h-5 mr-1 ml-3" />
                      {movie.vote_count}
                    </p>
                  </div>
                </Link>
                <FavoriteIcon favId={movie.id} />
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No favorite movies yet.
          </p>
        )}
      </div>
    </div>
  );
}
