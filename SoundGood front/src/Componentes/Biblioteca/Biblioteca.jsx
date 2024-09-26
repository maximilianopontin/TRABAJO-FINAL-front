import React, { useState } from "react";
import "./Biblioteca.css";
import { Nav } from '../Nav/Nav';
import { useFavorites } from '../Biblioteca/FavoritesContext';
import '../Inicio/card.css';
import Reproductor from '../Reproductor musica/ReproductorBuscador';
import Footer from '../Footer/Footer';
import { SongCard } from '../Inicio/Card';
import { usePlayer } from '../Reproductor musica/PlayerContext'; // Importa el contexto del reproductor

export function Biblioteca() {
    const { favorites, playlists, createPlaylist } = useFavorites(); // Usa el contexto de favoritos
    const [selectedSong, setSelectedSong] = useState(null); // Canción seleccionada actualmente.
    const [playlistName, setPlaylistName] = useState(''); // Nombre de la nueva lista de reproducción que se está creando.
    const [showModal, setShowModal] = useState(false); // Booleano para mostrar u ocultar el modal de creación de listas de reproducción.
    const [selectedPlaylist, setSelectedPlaylist] = useState(null); // Lista de reproducción seleccionada actualmente.

    const { setCurrentSong } = usePlayer(); // Utiliza el contexto del reproductor

    // Crea una nueva lista de reproducción con el nombre introducido y resetea el estado correspondiente.
    const handleCreatePlaylist = () => {
        if (playlistName.trim()) {
            createPlaylist(playlistName.trim());
            setPlaylistName('');
            setShowModal(false);
        }
    };

    // Establece la canción seleccionada cuando se hace clic en una canción.
    const handleSongClick = (song) => {
        setSelectedSong(song); // Guarda la canción seleccionada localmente
        setCurrentSong(song.url); // Actualiza la canción en el reproductor global
    };

    return (
        <>
            <div>
                <Nav />
            </div>
            <div className="biblioteca">
                <p className="section-title">Tus favoritos</p>
                {/* Muestra las canciones favoritas */}
                <div className="favorites-list">
                    {favorites.map((song, index) => (
                        <div key={index} className="favorite-item" onClick={() => handleSongClick(song)}>
                            <p>{song.title}</p>
                        </div>
                    ))}
                </div>
                <p className="section-title">Tus Playlists</p>
                {/* Muestra las listas de reproducción */}
                <button className="create-playlist-button" onClick={() => setShowModal(true)}>Crear Playlist</button>
                {Object.keys(playlists).map((name, index) => (
                    <div key={index}>
                        <h3 className="playlist-title" onClick={() => setSelectedPlaylist(name)}>{name}</h3>
                        {selectedPlaylist === name && (
                            <div className="playlist-list">
                                {playlists[name].map((song, songIndex) => (
                                    <div key={songIndex} className="playlist-item" onClick={() => handleSongClick(song)}>
                                        <p>{songIndex + 1}. {song.title}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* Se muestra un modal para crear una nueva lista de reproducción. */}
                {showModal && (
                    <div className="modal-playlist">
                        <div className="modal-content-playlist">
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

                {/* Muestra la tarjeta de la canción seleccionada y el reproductor */}
                {selectedSong && (
                    <div className="card-playlist">
                        <SongCard
                            url={selectedSong.url}
                            title={selectedSong.title}
                            tags={selectedSong.tags}
                            image={selectedSong.image}
                            artist={selectedSong.artist}
                        />
                        <div className="reproductor-container">
                            <Reproductor songUrl={selectedSong.url} />
                        </div>
                    </div>
                )}
                <Footer />
            </div>
        </>
    );
}
