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
import { usePlayer } from '../Reproductor musica/PlayerContext';

export function Inicio({ redirectToAcercaDe, redirectToPlanPremium, redirectToVersionGratuita, redirectToAyudas }) {
    const [songsTop50, setSongsTop50] = useState([]);
    const [songsTendencias, setSongsTendencias] = useState([]);
    const [selectedSongUrl, setSelectedSongUrl] = useState(null);
    const { addFavorite, addSongToPlaylist, playlists } = useFavorites();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [playlistName, setPlaylistName] = useState('');
    const [selectedPlaylist, setSelectedPlaylist] = useState(''); // Playlist seleccionada
    const [errorMessage, setErrorMessage] = useState('');
    const { currentSong, setCurrentSong } = usePlayer();

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
        setCurrentSong(song.url); // Establece la canción en el contexto
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPlaylistName('');
        setSelectedPlaylist('');
        setErrorMessage('');
    };
    const handleAddToPlaylist = () => {
        if (selectedPlaylist) {
            const playlistSongs = playlists[selectedPlaylist];
            const isSongInPlaylist = playlistSongs.some(song => song.url === currentSong);

            if (isSongInPlaylist) {
                setErrorMessage('Esta canción ya está en esa playlist.');
            } else {
                const currentSongData = songsTop50.find(song => song.url === currentSong) || songsTendencias.find(song => song.url === currentSong);
                if (currentSongData) {
                    addSongToPlaylist(currentSongData, selectedPlaylist); // Agrega el objeto completo de la canción
                    console.log(`Canción añadida: ${currentSong}`);
                    closeModal();
                }
            }
        } else {
            setErrorMessage('Por favor selecciona una playlist.');
        }
    };

    /*  const handleAddToPlaylist = () => {
          if (selectedPlaylist) {
              // Verifica si la playlist seleccionada ya tiene la canción actual
              //Usamos el método some para verificar si alguna de las canciones en la playlist seleccionada 
              //tiene el mismo url que la canción actual (currentSong).
              const playlistSongs = playlists[selectedPlaylist];
              const isSongInPlaylist = playlistSongs.some(song => song.url === currentSong);
  
              if (isSongInPlaylist) {
                  setErrorMessage('Esta canción ya está en esa playlist.');
              } else {
                  // Si no está en la playlist, la añade
                  addSongToPlaylist(currentSong, selectedPlaylist);
                  console.log(`Canción añadida: ${currentSong}`);
                  console.log('Canciones en la playlist:', playlists[selectedPlaylist]);
                  closeModal();
              }
          } else {
              setErrorMessage('Por favor selecciona una playlist.');
          }
      };*/


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Muestra 4 tarjetas
        slidesToScroll: 1, // Cambia de una tarjeta a la vez
        centerMode: true, // Activa el modo de centrado
        centerPadding: '110px', // Espacio adicional a los lados
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '20px',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
            <div className="home">
                <p className="section-title">Top 10</p>
                <Slider {...settings}>
                    {songsTop50.map((song, index) => (
                        <SongCard
                            key={index}
                            image={song.image}
                            title={song.title}
                            tags={song.tags}
                            url={song.url}
                            onClick={() => {
                                setSelectedSongUrl(song.url);
                                setCurrentSong(song.url); // Establece la canción en el contexto del reproductor
                            }}
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
                            artist={song.artist}
                            onClick={() => {
                                setSelectedSongUrl(song.url);
                                setCurrentSong(song.url);
                            }}
                            onFavorite={() => addFavorite(song)}
                            onAddToPlaylist={() => openModal(song)} // Asegúrate de que el modal se abre con la canción correcta
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

                {/* Modal para agregar a playlist */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    className="modal-overlay"
                >
                    <div className="Modal-playlist">
                        <h2>Añadir a Playlist</h2>
                        <select
                            className="modal-select-playlist"
                            value={selectedPlaylist}
                            onChange={(e) => setSelectedPlaylist(e.target.value)}
                        >
                            <option value="">Selecciona una playlist</option>
                            {Object.keys(playlists).map((name, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <div className="modal-buttons">
                            <button onClick={handleAddToPlaylist}>Añadir</button>
                            <button onClick={closeModal}>Cancelar</button>
                        </div>
                    </div>
                </Modal>

            </div>
        </>
    );
}
