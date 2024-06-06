import { Logo } from "../../logo/logo";
import './Nav.css';
import './modal.css';
import { useState } from "react";

export const Nav = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

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
                setSearchTerm('');
            })
            .catch(error => console.error('Error al obtener datos:', error));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <nav>
            <div className="navbar">
                <div className="nav-logo">
                    <Logo />
                </div>
                <div className="nav-buscador">
                    <input type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown} />
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
                                        <a href={song.url}>{song.nombre}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
