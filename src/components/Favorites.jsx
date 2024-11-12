import React from 'react';

const Favorites = ({ favorites, removeFavorite }) => {
  if (favorites.length === 0) {
    return <div className="text-center text-gray-500">No favorites added yet.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[80vw] m-auto h-[100vh]">
      {favorites.map((movie) => (
        <div key={movie.imdbID} className="border rounded-lg overflow-hidden shadow-lg sm:h-[70vh] h-[65vh] lg:h-[70vh] my-4">
          <img src={movie.Poster} alt={movie.Title} className="w-full h-3/4"/>
          <div className="p-4">
            <h2 className="text-lg font-bold">{movie.Title}</h2>
            <p className="text-sm text-gray-700">Year: {movie.Year}</p>
            <button
              onClick={() => removeFavorite(movie.imdbID)} 
              className="mt-2 text-white mb-2 bg-red-500 py-1 px-2 rounded hover:bg-red-600"
            >
              Remove from Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
