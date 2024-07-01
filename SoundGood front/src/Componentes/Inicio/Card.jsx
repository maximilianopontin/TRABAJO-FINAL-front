import React from 'react';
import './card.css'

export function SongCard({ url, title, tags, onClick }) {
    return (
        <div className="song-card" onClick={onClick}>
            <h3>{title}</h3>
            <p>{tags.join(', ')}</p>
        </div>
    );
}
