// Add item to local storage
export const addToFavorites = (itemId) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(itemId)) {
      favorites.push(itemId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  // Remove item from local storage
  export const removeFromFavorites = (itemId) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter((fav) => fav !== itemId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  // Check if item is a favorite
  export const isFavorite = (itemId) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(itemId);
  };
  