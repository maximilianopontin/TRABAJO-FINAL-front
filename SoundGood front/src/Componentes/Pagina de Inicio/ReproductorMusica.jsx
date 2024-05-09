import React from 'react';
import ReactPlayer from 'react-player';

function ReproductorMusica() {
    const listaCanciones = [
        { url: 'Canción 1' },
        { url: 'ruta/de/cancion2.mp3', nombre: 'Canción 2' },
        { url: 'ruta/de/cancion3.mp3', nombre: 'Canción 3' }
    ];

    const [cancionActualIndex, setCancionActualIndex] = React.useState(0);

    const reproducirCancion = (index) => {
        setCancionActualIndex(index);
    };

    const reproducirSiguienteCancion = () => {
        setCancionActualIndex((prevIndex) => (prevIndex + 1) % listaCanciones.length);
    };

    const reproducirCancionAnterior = () => {
        setCancionActualIndex((prevIndex) => (prevIndex - 1 + listaCanciones.length) % listaCanciones.length);
    };

    return (
        <div>
            <h3>{listaCanciones[cancionActualIndex].nombre}</h3>
            <ReactPlayer
                url={listaCanciones[cancionActualIndex].url}
                playing={true}
                controls={true}
            />
            <button onClick={reproducirCancionAnterior}>Anterior</button>
            <button onClick={reproducirSiguienteCancion}>Siguiente</button>
        </div>
    );
}

export default ReproductorMusica;
