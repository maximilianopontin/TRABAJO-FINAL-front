import React, { useState, useEffect } from "react";
import Reproductor from "../Reproductor musica/Reproductor";
import { SongCard } from "./Card";
import './card.css'
import { Nav } from "../Nav/Nav";

export function Inicio() {
    const [songsTop50, setSongsTop50] = useState([]);
    const [songsTendencias, setSongsTendencias] = useState([]);
    useEffect(() => {
        // Realiza una solicitud fetch para obtener el archivo JSON de CancionesTop50.json
        fetch('/CancionesTop50.json')
            .then(response => {
                // Verifica si la respuesta de la red es exitosa
                if (!response.ok) {
                    throw new Error('La respuesta de la red no fue exitosa');
                }
                // Convierte la respuesta a formato JSON
                return response.json();
            })
            .then(data => {
                // Establece los datos obtenidos del JSON como el estado de canciones (songs)
                setSongsTop50(data);
            })
            .catch(error => {
                // Maneja cualquier error ocurrido durante la carga de las canciones
                console.error('Error cargando las canciones:', error);
            });
    }, []);
    useEffect(() => {
        // Realiza una solicitud fetch para obtener el archivo JSON de CancionesTop50.json
        fetch('/Tendencias.json')
            .then(response => {
                // Verifica si la respuesta de la red es exitosa
                if (!response.ok) {
                    throw new Error('La respuesta de la red no fue exitosa');
                }
                // Convierte la respuesta a formato JSON
                return response.json();
            })
            .then(data => {
                // Establece los datos obtenidos del JSON como el estado de canciones (songs)
                setSongsTendencias(data);
            })
            .catch(error => {
                // Maneja cualquier error ocurrido durante la carga de las canciones
                console.error('Error cargando las canciones:', error);
            });
    }, []);
    return (
        <>
            <div>
                <Nav />
            </div>
            <p>Lista de canciones</p>

            <div className="song-list">
                {songsTop50.map((song, index) => (
                    <SongCard
                        key={index}
                        title={song.title}
                        tags={song.tags}
                    />
                ))}
            </div>

        </>
    )
}
