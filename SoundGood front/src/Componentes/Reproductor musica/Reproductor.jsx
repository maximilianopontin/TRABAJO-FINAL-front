

import React from 'react';
import Canciones from "@madzadev/audio-player";
import tracksTop50 from '../ListasDeCanciones/Top50';
import './Reproductor.css';

const colors = {
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

function Reproductor() {
  const tracks = [...tracksTop50]
  return (
    <div className="custom-player-container"> 
      <Canciones

        trackList={tracks}
        includeTags={false}
        includeSearch={false}
        showPlaylist={false}
        sortTracks={true}
        autoPlayNextTrack={true}
        customColorScheme={colors} />


    </div>
  )
}

export default Reproductor;