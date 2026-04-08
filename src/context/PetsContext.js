import { createContext, useState } from "react";

export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [likedPets, setLikedPets] = useState([]);
  const [dislikedPets, setDislikedPets] = useState([]);

  return (
    <PetsContext.Provider
      value={{
        likedPets,
        setLikedPets,
        dislikedPets,
        setDislikedPets,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
