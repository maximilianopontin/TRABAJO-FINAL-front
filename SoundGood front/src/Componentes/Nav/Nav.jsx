import { Logo } from "../../logo/logo";
import './Nav.css';
import './modal.css';
import { useState, useEffect } from "react";
import ReproductorNav from "../Reproductor musica/ReproductorBuscador";

export const Nav = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [songUrlReproductor, setSongUrlReproductor] = useState(null);
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        fetch('CancionesTop50.json')
            .then(response => response.json())
            .then(data => setPlaylist(data))
            .catch(error => console.error('Error al obtener datos:', error));
    }, []);

    useEffect(() => {
        fetch('/Canciones.json')
            .then(response => response.json())
            .then(data => setCancionesTracks(data))
            .catch(error => console.error('Error loading the otra lista tracks:', error));
    }, []);

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            return;
        }
        fetch('CancionesTop50.json')
            .then(response => response.json())
            .then(data => {
                const filteredResults = data.filter(song =>
                    song.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSearchResults(filteredResults);
                setModalOpen(true);
            })
            .catch(error => console.error('Error al obtener datos:', error));
        fetch('Canciones.json')
            .then(response => response.json())
            .then(data => {
                const filteredResults = data.filter(song =>
                    song.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSearchResults(filteredResults);
                setModalOpen(true);
            })
            .catch(error => console.error('Error al obtener datos:', error));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSongSelec = (url) => {
        setSongUrlReproductor(url);
        setModalOpen(false);
    };

    return (
        <nav>
            <div className="navbar">
                <div className="nav-logo">
                    <a href="./Inicio/Inicio">
                        <Logo />
                    </a>
                </div>
                <div className="nav-buscador">
                    <input type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button type="button" onClick={handleSearch}>Buscar</button>
                </div>
                <div className="nav-links">
                    <a href="">Biblioteca</a>
                    <a href="">Cuenta</a>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setModalOpen(false)}>×</span>
                            <h2>Canciones encontradas:</h2>
                            <ul>
                                {searchResults.map((song, index) => (
                                    <li key={index}>
                                        <a href="#" onClick={() => handleSongSelec(song.url)}>{song.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            <ReproductorNav songUrl={songUrlReproductor} playlist={playlist} />
        </nav>
    );
};
