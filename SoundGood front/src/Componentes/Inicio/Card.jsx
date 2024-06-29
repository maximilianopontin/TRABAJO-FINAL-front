import React from 'react';
import './card.css'
import Reproductor from '../Reproductor musica/ReproductorBuscador';

export function SongCard({url, title, tags }) {
    return (
        <div className="song-card">
            <h3>{title}</h3>
            <p>{tags.join(', ')}</p>
            <Reproductor songUrl={url} />
        </div>
    );
}
