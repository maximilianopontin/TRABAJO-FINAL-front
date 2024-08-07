//muestra las canciones más populares y las tendencias actuales, permitiendo añadir canciones a favoritos y listas de reproducción.
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { SongCard } from "./Card";
import './card.css';
import './Inicio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Nav } from "../Nav/Nav";
import Reproductor from '../Reproductor musica/ReproductorBuscador';
import Footer from "../Footer/Footer";
import { useFavorites } from '../Biblioteca/FavoritesContext';
import Modal from 'react-modal';
Modal.setAppElement('#root'); // Establece el elemento raíz para accesibilidad

export function Inicio({ redirectToAcercaDe, redirectToPlanPremium, redirectToVersionGratuita, redirectToAyudas }) {
    const [songsTop50, setSongsTop50] = useState([]);
    const [songsTendencias, setSongsTendencias] = useState([]);
    const [selectedSongUrl, setSelectedSongUrl] = useState(null);
    const { addFavorite, addSongToPlaylist, playlists } = useFavorites(); // Asegúrate de que playlists esté incluido
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
    const [playlistName, setPlaylistName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch('/CancionesTop50.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('La respuesta de la red no fue exitosa');
                }
                return response.json();
            })
            .then(data => {
                setSongsTop50(data);
            })
            .catch(error => {
                console.error('Error cargando las canciones:', error);
            });
    }, []);

    useEffect(() => {
        fetch('/Tendencias.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('La respuesta de la red no fue exitosa');
                }
                return response.json();
            })
            .then(data => {
                setSongsTendencias(data);
            })
            .catch(error => {
                console.error('Error cargando las canciones:', error);
            });
    }, []);

    const openModal = (song) => {
        setCurrentSong(song);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPlaylistName('');
        setErrorMessage('');
    };

    const handleAddToPlaylist = () => {
        if (playlistName) {
            if (playlists[playlistName] && playlists[playlistName].some(song => song.url === currentSong.url)) {
                setErrorMessage('Esta canción ya está en esa playlist.');
            } else {
                addSongToPlaylist(currentSong, playlistName);
                closeModal();
            }
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Muestra 3 tarjetas completas en el centro
        slidesToScroll: 4, // Cambia de una tarjeta a la vez
        centerMode: true, // Activa el modo de centrado para mostrar media tarjeta en los bordes
        centerPadding: '110px', // Espacio adicional a los lados para mostrar media tarjeta
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: '20px',
                }
            }
        ]
    };
    
    return (
        <>
            <div>
                <Nav />
            </div>
            <p className="section-title">Top 10</p>
            <Slider {...settings}>
                {songsTop50.map((song, index) => (
                    <SongCard
                        key={index}
                        image={song.image}
                        title={song.title}
                        tags={song.tags}
                        url={song.url}
                        onClick={() => setSelectedSongUrl(song.url)}
                        onFavorite={() => addFavorite(song)}
                        onAddToPlaylist={() => openModal(song)}
                    />
                ))}
            </Slider>
            <p className="section-title">Tendencias</p>
            <Slider {...settings}>
                {songsTendencias.map((song, index) => (
                    <SongCard
                        key={index}
                        image={song.image}
                        title={song.title}
                        tags={song.tags}
                        url={song.url}
                        onClick={() => setSelectedSongUrl(song.url)}
                        onFavorite={() => addFavorite(song)}
                        onAddToPlaylist={() => openModal(song)}
                    />
                ))}
            </Slider>
            {selectedSongUrl && <Reproductor songUrl={selectedSongUrl} />}
            <Footer 
                redirectToAcercaDe={redirectToAcercaDe}
                redirectToPlanPremium={redirectToPlanPremium}
                redirectToVersionGratuita={redirectToVersionGratuita}
                redirectToAyudas={redirectToAyudas}
            />
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="Modal" onClick={(e) => e.stopPropagation()}>
                        <h2>Añadir a Playlist</h2>
                        <input className="modal-input"
                            type="text"
                            placeholder="Nombre de la playlist"
                            value={playlistName}
                            onChange={(e) => setPlaylistName(e.target.value)}
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <div className="modal-buttons">
                            <button onClick={handleAddToPlaylist}>Añadir</button>
                            <button onClick={closeModal}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
