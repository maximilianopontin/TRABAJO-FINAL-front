import React from 'react';
import './card.css'

export function SongCard({ title, tags }) {
    return (
        <div className="song-card">
            <h3>{title}</h3>
            <p>{tags.join(', ')}</p>
        </div>
    );
}
