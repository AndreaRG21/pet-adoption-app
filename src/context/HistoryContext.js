import React, { createContext, useState } from "react";

export const HistoryContext = createContext({
  likedPets: [],
  dislikedPets: [],
  addLikedPet: () => {},
  addDislikedPet: () => {},
});

export function HistoryProvider({ children }) {
  const [likedPets, setLikedPets] = useState([]);
  const [dislikedPets, setDislikedPets] = useState([]);

  const addLikedPet = (pet) => {
    setLikedPets((prev) => [...prev, pet]);
  };

  const addDislikedPet = (pet) => {
    setDislikedPets((prev) => [...prev, pet]);
  };

  return (
    <HistoryContext.Provider
      value={{ likedPets, dislikedPets, addLikedPet, addDislikedPet }}
    >
      {children}
    </HistoryContext.Provider>
  );
}
