import { useState, useEffect } from "react"
import Canciones from "@madzadev/audio-player";
import './Reproductor.css';

const colors = { // colores personalizados que se usarán para estilizar el componente de audio Canciones.
  tagsBackground: "#5fa25b",
  tagsText: "#ffffff",
  tagsBackgroundHoverActive: "#5fa25b",
  tagsTextHoverActive: "#ffffff",
  searchBackground: "#18191f",
  searchText: "#ffffff",
  searchPlaceHolder: "#575a77",
  playerBackground: "#292b30",
  titleColor: "#ffffff",
  timeColor: "#5fa25b",
  progressSlider: "#5fa25b",
  progressUsed: "#ffffff",
  progressLeft: "#151616",
  bufferLoaded: "#1f212b",
  volumeSlider: "#5fa25b",
  volumeUsed: "#ffffff",
  volumeLeft: "#151616",
  playlistBackground: "#292b30",
  playlistText: "#575a77",
  playlistBackgroundHoverActive: "#18191f",
  playlistTextHoverActive: "#ffffff",
};

function Reproductor({ songUrl}) {
  const [tracks, setTracks] = useState([]); //useState se utiliza para crear una variable de estado llamada tracks y una función setTracks para actualizar esta variable. Inicialmente, tracks es un array vacío.
  const [currentTrack, setCurrentTrack] = useState(null); //estado para la lista actual, la que se va a seccionar en el buscador
  
  useEffect(() => {
    fetch('/CancionesTop50.json')
      .then(response => response.json()) //convierte la respuesta en un objeto JavaScript.
      .then(data => setTracks(data)) //actualiza la variable de estado tracks con los datos obtenidos.
      .catch(error => console.error('Error loading the tracks:', error));
  }, []);

  //Actualizar la pista actual
  useEffect(() =>{
    if (songUrl) {
      const selecTrack = tracks.find(track => track.url === songUrl);
      setCurrentTrack(selecTrack);
    }
  }, [songUrl, tracks]);//Si songUrl está presente, busca la pista correspondiente en tracks y actualiza currentTrack con la pista seleccionada.

  return (
    <div>
    {tracks.length > 0 && currentTrack && ( //El componente Canciones se renderiza solo si (tracks.length > 0).
      <Canciones
        trackList={[currentTrack]}//pasa la pista seleccionada al reproductor Anteriormente estaba "tracks"
        includeTags={false}
        includeSearch={false}
        showPlaylist={false}
        sortTracks={true}
        autoPlayNextTrack={true}
        customColorScheme={colors} 
         key={currentTrack.url} // Fuerza la actualización del componente cuando currentTrackIndex cambia.
        />

      )}
    </div>
  )
};

export default Reproductor;