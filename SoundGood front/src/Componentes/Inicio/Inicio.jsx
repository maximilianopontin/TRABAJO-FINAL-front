import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { SongCard } from "./Card";
import './card.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Nav } from "../Nav/Nav";
import Reproductor from '../Reproductor musica/ReproductorBuscador';

export function Inicio() {
    const [songsTop50, setSongsTop50] = useState([]);
    const [songsTendencias, setSongsTendencias] = useState([]);
    const [selectedSongUrl, setSelectedSongUrl] = useState(null);

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
            <p className="section-title">Top 50</p>
            <Slider {...settings}>
                {songsTop50.map((song, index) => (
                    <SongCard
                        key={index}
                        title={song.title}
                        tags={song.tags} 
                        url={song.url}
                        onClick={() => setSelectedSongUrl(song.url)}
                    />
                ))}
            </Slider>
            <p className="section-title">Tendencias</p>
            <Slider {...settings}>
                {songsTendencias.map((song, index) => (
                    <SongCard
                        key={index}
                        title={song.title}
                        tags={song.tags} 
                        url={song.url}
                        onClick={() => setSelectedSongUrl(song.url)}
                    />
                ))}
            </Slider>
            {selectedSongUrl && <Reproductor songUrl={selectedSongUrl} />}
        </>
    )
}
