"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
function FavoriteIconComponent({ favId }) {
  const [items, setItems] = useState(getStorageList()); //
  function getStorageList() {
    const list = localStorage.getItem("dufavorites");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }

  useEffect(() => {
    localStorage.setItem("dufavorites", JSON.stringify(items));
  }, [items]);
  const Favorites = items === null ? false : items.includes(favId);
  const handleToggleFavourite = () => {
    if (Favorites) {
      console.log("remove item");
      const currentList = getStorageList();
      const removeItemId = favId;
      for (var i = 0; i < currentList.length; i++) {
        if (currentList[i] === removeItemId) {
          currentList.splice(i, 1);
        }
        setItems(currentList);
      }
    } else {
      console.log("add item");
      const currentList = getStorageList();
      const newList = [...currentList, favId];
      setItems(newList);
    }
  };
  return (
    <>
      {Favorites ? (
        <div
          onClick={handleToggleFavourite}
          className="cursor-pointer absolute right-2 top-2 bg-white p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="red"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </div>
      ) : (
        <div
          onClick={handleToggleFavourite}
          className="cursor-pointer absolute right-2 top-2 bg-white p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </div>
      )}
      {/* <div onClick={handleToggleFavourite} className='cursor-pointer absolute right-2 top-2 bg-white p-2 rounded-full'>
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
</div> */}
    </>
  );
}

//this is important because we have to render the component
// only in browser side, either component will through error
// because it will look for the local storage in the serverSide
const FavoriteIcon = dynamic(() => Promise.resolve(FavoriteIconComponent), {
  ssr: false,
});
export default FavoriteIcon;
