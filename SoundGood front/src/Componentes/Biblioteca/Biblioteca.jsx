/* gestiona la visualización y administración de canciones favoritas y listas de reproducción.*/

import React, { useState } from "react";
import "./Biblioteca.css";
import { Nav } from '../Nav/Nav';
import { useFavorites } from '../Biblioteca/FavoritesContext';
import '../Inicio/card.css';
import Reproductor from '../Reproductor musica/ReproductorBuscador';
import Footer from '../Footer/Footer';
import { SongCard } from '../Inicio/Card';


export function Biblioteca() {
    const { favorites, playlists, createPlaylist } = useFavorites(); // Usa el contexto 
    const [selectedSong, setSelectedSong] = useState(null); //canción seleccionada actualmente.
    const [playlistName, setPlaylistName] = useState('');//nombre de la nueva lista de reproducción que se está creando.
    const [showModal, setShowModal] = useState(false);//booleano para mostrar u ocultar el modal de creación de listas de reproducción.
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);//lista de reproducción seleccionada actualmente.


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
        setSelectedSong(song); // Guarda la canción seleccionada
        console.log('Canción seleccionada:', song);
    };

    return (
        <>
            <div>
                <Nav />
            </div>
            <div className="biblioteca">
               <p className="section-title">Tus favoritos</p>
            {/*Se mapean y muestran las canciones favoritas, permitiendo seleccionar una canción al hacer clic.*/}
            <div className="favorites-list">
                {favorites.map((song, index) => (
                    <div key={index} className="favorite-item" onClick={() => handleSongClick(song)}>
                        <p>{song.title}</p>
                    </div>
                ))}
            </div>
            <p className="section-title">Tus Playlists</p>
            {/*Se mapean y muestran las listas de reproducción. Al hacer clic en una lista, se muestra su contenido.*/}
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
            {/*Se muestra un modal para crear una nueva lista de reproducción.*/}
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
            {/*Se muestra el componente Reproductor y SongCard para la canción seleccionada.*/}
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

                        <Reproductor

                            songUrl={selectedSong.url}
                        />
                    </div>
                </div>
            )}
            <Footer /> 
            </div>
            
        </>
    );
}
