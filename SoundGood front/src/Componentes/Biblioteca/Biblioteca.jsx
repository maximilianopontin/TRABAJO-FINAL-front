import React, { useState } from "react";
import { Nav } from '../Nav/Nav';
import Slider from "react-slick";
import { SongCard } from "../Inicio/Card";
import '../Inicio/card.css';
import Reproductor from '../Reproductor musica/ReproductorBuscador';
import Footer from '../Footer/Footer';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function Biblioteca() {
    const [favorites, setFavorites] = useState([]);
  
    const handleFavorite = (song) => {
        setFavorites([...favorites, song]);
    };


    return (
        <>
            <div>
                <Nav />
            </div>
            <p className="section-title">Tus favoritos</p>
        
            <Footer />
       
        </>
    );
}