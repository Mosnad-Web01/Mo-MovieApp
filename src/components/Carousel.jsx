import React from "react";

const Carousel = ({ results }) => {
  if (!results || results.length === 0) {
    return <div>No results available.</div>; // Handle case when results are empty or undefined
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        {/* Carousel container */}
        <div className="flex transition-transform ease-in-out duration-500">
          {results.map((item) => (
            <div key={item.id} className="min-w-full h-full flex-shrink-0 relative">
              <img
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.title || item.name}
              />
              {/* Carousel caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h5 className="text-lg font-semibold">{item.title || item.name}</h5>
                <p className="text-sm">{item.overview}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls (Previous and Next) */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={() => {
            // Handle previous slide
          }}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={() => {
            // Handle next slide
          }}
        >
          &#10095;
        </button>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {results.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 focus:opacity-100"
            onClick={() => {
              // Handle indicator click to go to the slide
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
