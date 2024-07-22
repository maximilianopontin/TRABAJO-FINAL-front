import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const FavoritesContext = createContext();

// Proveedor del contexto
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [playlists, setPlaylists] = useState({});

    const addFavorite = (song) => {
        if (!favorites.some(fav => fav.url === song.url)) {
            setFavorites([...favorites, song]);
        }
    };

    const createPlaylist = (playlistName) => {
        if (!playlists[playlistName]) {
            setPlaylists(prevPlaylists => ({
                ...prevPlaylists,
                [playlistName]: []
            }));
        }
    };

    const addSongToPlaylist = (song, playlistName) => {
        setPlaylists(prevPlaylists => {
            const updatedPlaylist = prevPlaylists[playlistName]
                ? [...prevPlaylists[playlistName], song]
                : [song];
            return {
                ...prevPlaylists,
                [playlistName]: updatedPlaylist
            };
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, playlists, createPlaylist, addSongToPlaylist }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useFavorites = () => useContext(FavoritesContext);
