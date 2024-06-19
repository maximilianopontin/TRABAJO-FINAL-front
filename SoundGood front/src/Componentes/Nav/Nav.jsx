import { Logo } from "../../logo/logo"
import './Nav.css'
import './modal.css';
import { useState } from "react"
export const Nav = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // constante que recorre el json y filtra los resultados
    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            return; // no hacer nada si el campo de búsqueda está vacío
        }
        fetch('canciones.json')
            .then(response => response.json())
            .then(data => { 
                const filteredResults = data.filter(song =>
                    song.nombre.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSearchResults(filteredResults);
                setSearchTerm('');
            })
            .catch(error => console.error('Error al obtener datos:', error));
    };
    // constante para hacer funcionar la tecla enter para la busqueda
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <nav >
            <div className="navbar">
                <div className="nav-logo">
                    <Logo />

                </div>
                <div className="nav-buscador">
                    <input type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown} /> {/* Buasca la cancion precionando la tecla enter */}
                    <button type="button" onClick={handleSearch}>Buscar</button>
                </div>
                <div className="nav-links">
                    <a href="">Biblioteca</a>
                    <a href="">Cuenta</a>
                </div>
            </div>
            {/*Se muestran los resultados de la busqueda*/}
            <div className="cancionesEncontradas">
                {searchResults.length > 0 && (
                    <div>
                        <h2>Canciones encontradas: </h2>
                        <ul>
                            {searchResults.map((song, index) => (
                                <p key={index}>
                                    <a href={song.url}>{song.nombre}</a>
                                </p>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}