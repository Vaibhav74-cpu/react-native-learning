import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteMealId, setFavouriteMealId] = useState([]);

  function addFavourite(id) {
    setFavouriteMealId((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavourite(id) {
    setFavouriteMealId(
      (previousFavIds) =>
        previousFavIds.filter((currenttId) => currenttId !== id), //keep the meal that are not equal to incoming id
    );
  }
  const value = {
    ids: favouriteMealId,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider;
