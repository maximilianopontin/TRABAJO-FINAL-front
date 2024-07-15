import React from 'react';
import './card.css';
import { Link } from "react-router-dom";

export function SongCard({ url, title, tags, onClick, onFavorite, onAddToPlaylist }) {
    return (
        <div className="song-card" onClick={onClick}>
            <h3>{title}</h3>
            <p>{tags.join(', ')}</p>
            <div className="button-container">
                <Link to="/biblioteca">
                    <button className="favorite-button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onFavorite();
                        }}
                    >
                        ❤️
                    </button>
                </Link>
                <Link to="/biblioteca">
                    <button className="add-button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToPlaylist();
                        }}
                    >
                        +
                    </button>
                </Link>
            </div>
        </div>
    );
}
