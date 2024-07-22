import React, { useState } from "react";
import "./Biblioteca.css";
import { Nav } from '../Nav/Nav';
import { useFavorites } from '../Biblioteca/FavoritesContext';
import '../Inicio/card.css';
import Reproductor from '../Reproductor musica/ReproductorBuscador';
import Footer from '../Footer/Footer';

export function Biblioteca() {
    const { favorites, playlists, createPlaylist } = useFavorites(); // Usa el contexto
    const [selectedSongUrl, setSelectedSongUrl] = useState(null);
    const [playlistName, setPlaylistName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);

    const handleCreatePlaylist = () => {
        if (playlistName.trim()) {
            createPlaylist(playlistName.trim());
            setPlaylistName('');
            setShowModal(false);
        }
    };

    return (
        <>
            <div>
                <Nav />
            </div>
            <p className="section-title">Tus favoritos</p>
            <div className="favorites-list">
                {favorites.map((song, index) => (
                    <div key={index} className="favorite-item" onClick={() => setSelectedSongUrl(song.url)}>
                        <p>{song.title}</p>
                    </div>
                ))}
            </div>
            <p className="section-title">Tus Playlists</p>
            <button className="create-playlist-button" onClick={() => setShowModal(true)}>Crear Playlist</button>

            {Object.keys(playlists).map((name, index) => (
                <div key={index}>
                    <h3 className="playlist-title" onClick={() => setSelectedPlaylist(name)}>{name}</h3>
                    {selectedPlaylist === name && (
                        <div className="playlist-list">
                            {playlists[name].map((song, songIndex) => (
                                <div key={songIndex} className="playlist-item" onClick={() => setSelectedSongUrl(song.url)}>
                                    <p>{songIndex + 1}. {song.title}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Crear Nueva Playlist</h3>
                        <input
                            type="text"
                            value={playlistName}
                            onChange={(e) => setPlaylistName(e.target.value)}
                            placeholder="Nombre de la Playlist"
                        />
                        <button onClick={handleCreatePlaylist}>Crear</button>
                        <button onClick={() => setShowModal(false)}>Cancelar</button>
                    </div>
                </div>
            )}
            {selectedSongUrl && <Reproductor songUrl={selectedSongUrl} />}
            <Footer />
        </>
    );
}