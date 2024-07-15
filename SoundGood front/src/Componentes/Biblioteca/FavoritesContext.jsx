// creamos un contexto para manejar los favoritos
import React, { createContext, useState, useContext } from 'react';
// Crear el contexto
const FavoritesContext = createContext();
// Proveedor del contexto
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (song) => {
        // Verificar si la canción ya está en favoritos
        if (!favorites.some(fav => fav.url === song.url)) {
            setFavorites([...favorites, song]);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
// Hook personalizado para usar el contexto
export const useFavorites = () => useContext(FavoritesContext);
