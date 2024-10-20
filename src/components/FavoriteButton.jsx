"use client";

import { useEffect, useState } from 'react';

export default function FavoriteButton({ movieId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the movie is already in favorites
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(movieId));
  }, [movieId]);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.includes(movieId)) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(id => id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites
      favorites.push(movieId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <button onClick={handleToggleFavorite}>
      {isFavorite ? (
        <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      ) : (
        <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      )}
    </button>
  );
}
