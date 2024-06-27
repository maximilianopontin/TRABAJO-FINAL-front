import { Logo } from "../../logo/logo";
import './Nav.css';
import './modal.css';
import { useState } from "react";
import ReproductorNav from "../Reproductor musica/ReproductorBuscador";


export const Nav = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [songUrlReproductor, setSongUrlReproductor] = useState(null); // almacena la URL de la cancion seleccionada


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
    };
    //el boton de buscar anda cuando apreto enter
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    const handleSongSelec = (url) => {
        //se actualiza cuando se selecciona una canción del modal
        setSongUrlReproductor(url);
        //se cierra para asegurarse de que el reproductor reciba la nueva URL de la canción.
        setModalOpen(false); // Cierra el modal después de seleccionar una canción
    };
    /*Funcion que maneja la URL de la cancion cuando se selecciona
    const handleSongSelec = (url) => {
        setSongUrlReproductor(url);
        const selectedTrack = searchResults.find(track => track.url === url);
      // Verifica si la canción ya existe en la playlist antes de agregarla
      const trackExists = playlist.some(track => track.url === url);
      if (!trackExists) {
          setPlaylist([selectedTrack, ...playlist]);
      }
        setModalOpen(false);
    };
    */

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
                            <ul> {/* renderiza la busqueda mediante el click de buscar*/}
                                {searchResults.map((song, index) => (
                                    <li key={index}>
                                        <a href={"#"} onClick={() => handleSongSelec(song.url)}>{song.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            <ReproductorNav songUrl={songUrlReproductor} /> {/* pasa la Url selecionada al reproductor*/}
        </nav>
    );
};