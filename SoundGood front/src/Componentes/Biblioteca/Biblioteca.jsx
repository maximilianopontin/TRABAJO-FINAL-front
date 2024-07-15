import React, { useState } from "react";
import "./Biblioteca.css";
import { Nav } from '../Nav/Nav';
import { useFavorites } from '../Biblioteca/FavoritesContext';
import '../Inicio/card.css';
import Reproductor from '../Reproductor musica/ReproductorBuscador';
import Footer from '../Footer/Footer';

export function Biblioteca() {
    const { favorites } = useFavorites();// Usa el contexto
    const [selectedSongUrl, setSelectedSongUrl] = useState(null);

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
            {selectedSongUrl && <Reproductor songUrl={selectedSongUrl} />}
            <Footer />
        </>
    );
}
