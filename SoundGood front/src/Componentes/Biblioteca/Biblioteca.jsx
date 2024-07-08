<<<<<<< HEAD
import React from "react";
import {Nav} from '../Nav/Nav'

export function Biblioteca () {
    return (
        <>
        <div>
            <Nav/> 
        </div>
        
        </>

=======
import React, { useState, useEffect } from "react";
import { Nav } from '../Nav/Nav'
import Slider from "react-slick";
import { SongCard } from "../Inicio/Card";
import '../Inicio/card.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reproductor from '../Reproductor musica/ReproductorBuscador';
import Footer from '../Footer/Footer'

export function Biblioteca({ redirectToAcercaDe, redirectToPlanPremium, redirectToVersionGratuita, redirectToAyudas }) {
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
            <p className="section-title">Lo más escuchado</p>
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
            <p className="section-title">Guardadas</p>
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
            <Footer
                redirectToAcercaDe={redirectToAcercaDe}
                redirectToPlanPremium={redirectToPlanPremium}
                redirectToVersionGratuita={redirectToVersionGratuita}
                redirectToAyudas={redirectToAyudas}
            />
        </>
>>>>>>> Biblioteca
    );
}