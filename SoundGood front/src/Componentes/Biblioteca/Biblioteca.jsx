import React, { useState } from "react";
import { Nav } from '../Nav/Nav';
import Slider from "react-slick";
import { SongCard } from "../Inicio/Card";
import '../Inicio/card.css';
import Reproductor from '../Reproductor musica/ReproductorBuscador';
import Footer from '../Footer/Footer';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function Biblioteca() {
    const [favorites, setFavorites] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [selectedSongUrl, setSelectedSongUrl] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [playlistName, setPlaylistName] = useState('');
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [activePlaylist, setActivePlaylist] = useState(null);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleAddSong = (song) => {
        setSelectedSongs([...selectedSongs, song]);
    };

    const handleRemoveSong = (song) => {
        setSelectedSongs(selectedSongs.filter(s => s !== song));
    };

    const handleCreatePlaylist = () => {
        setPlaylists([...playlists, { name: playlistName, songs: selectedSongs }]);
        setPlaylistName('');
        setSelectedSongs([]);
        closeModal();
    };

    const handleFavorite = (song) => {
        setFavorites([...favorites, song]);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div>
                <Nav />
            </div>
            <p className="section-title">Tus favoritos</p>
            <Slider {...settings}>
                {favorites.map((song, index) => (
                    <SongCard
                        key={index}
                        title={song.title}
                        tags={song.tags}
                        url={song.url}
                        onClick={() => setSelectedSongUrl(song.url)}
                        onFavorite={() => handleFavorite(song)}
                        onAddToPlaylist={() => setSelectedSongs([...selectedSongs, song])} 
                    />
                ))}
            </Slider>
            <p className="section-title">Playlist</p>
            <div className="crear-playlist">
                <button onClick={openModal}>Crear Playlist</button>
            </div>
            <div className="playlists">
                {playlists.map((playlist, index) => (
                    <div key={index} className="playlist-card" onClick={() => setActivePlaylist(playlist)}>
                        <h3>{playlist.name}</h3>
                        <p>{playlist.songs.length} canciones</p>
                    </div>
                ))}
            </div>
            {selectedSongUrl && <Reproductor songUrl={selectedSongUrl} />}
            <Footer />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Crear Playlist"
            >
                <h2>Crear Playlist</h2>
                <input
                    type="text"
                    placeholder="Nombre de la Playlist"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                />
                <div className="song-list">
                    {favorites.map((song, index) => (
                        <div key={index} className="song-item">
                            <p>{song.title}</p>
                            {selectedSongs.includes(song) ? (
                                <button onClick={() => handleRemoveSong(song)}>Quitar</button>
                            ) : (
                                <button onClick={() => handleAddSong(song)}>Agregar</button>
                            )}
                        </div>
                    ))}
                </div>
                <button onClick={handleCreatePlaylist}>Crear</button>
                <button onClick={closeModal}>Cancelar</button>
            </Modal>
            {activePlaylist && (
                <Modal
                    isOpen={!!activePlaylist}
                    onRequestClose={() => setActivePlaylist(null)}
                    contentLabel="Ver Playlist"
                >
                    <h2>{activePlaylist.name}</h2>
                    <div className="playlist-songs">
                        {activePlaylist.songs.map((song, index) => (
                            <div key={index} className="playlist-song">
                                <p>{song.title}</p>
                                <button onClick={() => setSelectedSongUrl(song.url)}>Reproducir</button>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => setActivePlaylist(null)}>Cerrar</button>
                </Modal>
            )}
        </>
    );
}