import React from 'react';
import './card.css';

export function SongCard({ url, title, tags, onClick,image,artist, onFavorite, onAddToPlaylist }) {

    return (
        <div className="song-card" onClick={onClick}>
            <div className="image-container">
                <img src={image} alt={artist} className="artist-image" />
            </div>
            <h3>{title}</h3>
            <p>{tags.join(', ')}</p>
            <div className="button-container">
                <button
                    className="favorite-button"
                    onClick={(e) => {
                        e.stopPropagation();  // Evita que el clic se propague al contenedor padre
                        onFavorite();  // Llama a la función onFavorite pasada como prop
                    }}
                >
                    ❤️
                </button>
                <button
                    className="add-button"
                    onClick={(e) => {
                        e.stopPropagation();  // Evita que el clic se propague al contenedor padre
                        onAddToPlaylist();  // Llama a la función onAddToPlaylist pasada como prop
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
}
