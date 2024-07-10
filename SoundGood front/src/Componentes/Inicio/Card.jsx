import React from 'react';
import './card.css';

export function SongCard({ url, title, tags, onClick, onFavorite, onAddToPlaylist }) {
    return (
        <div className="song-card" onClick={onClick}>
            <h3>{title}</h3>
            <p>{tags.join(', ')}</p>
            <div className="button-container">
                <button 
                    className="favorite-button" 
                    onClick={(e) => {
                        e.stopPropagation();
                        onFavorite();
                    }}
                >
                    ❤️
                </button>
                <button 
                    className="add-button" 
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToPlaylist();
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
}
