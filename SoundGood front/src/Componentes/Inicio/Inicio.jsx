//muestra las canciones más populares y las tendencias actuales, permitiendo añadir canciones a favoritos y listas de reproducción.
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { SongCard } from "./Card";
import './card.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Nav } from "../Nav/Nav";
import Reproductor from '../Reproductor musica/ReproductorBuscador';
import Footer from "../Footer/Footer";
import { useFavorites } from '../Biblioteca/FavoritesContext';

export function Inicio({ redirectToAcercaDe, redirectToPlanPremium, redirectToVersionGratuita, redirectToAyudas }) {
    const [songsTop50, setSongsTop50] = useState([]);
    const [songsTendencias, setSongsTendencias] = useState([]);
    const [selectedSongUrl, setSelectedSongUrl] = useState(null);
    const { addFavorite, addSongToPlaylist } = useFavorites();

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
//Permite al usuario añadir una canción a una lista de reproducción.
    const handleAddToPlaylist = (song) => {
        const playlistName = prompt('Introduce el nombre de la playlist:');
        if (playlistName) {
            addSongToPlaylist(song, playlistName);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                        onAddToPlaylist={() => handleAddToPlaylist(song)}
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
                        onAddToPlaylist={() => handleAddToPlaylist(song)}
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
        </>
    );
}