

import React from 'react';
import CancionesTop50 from "@madzadev/audio-player";
//import tracks from '../ListasDeCanciones/Top50/Tracks';

const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

const colors = {
  tagsBackground: "#5fa25b",
  tagsText: "#ffffff",
  tagsBackgroundHoverActive: "#5fa25b",
  tagsTextHoverActive: "#ffffff",
  searchBackground: "#18191f",
  searchText: "#ffffff",
  searchPlaceHolder: "#575a77",
  playerBackground: "#18191f",
  titleColor: "#ffffff",
  timeColor: "#5fa25b",
  progressSlider: "#5fa25b",
  progressUsed: "#ffffff",
  progressLeft: "#151616",
  bufferLoaded: "#1f212b",
  volumeSlider: "#5fa25b",
  volumeUsed: "#ffffff",
  volumeLeft: "#151616",
  playlistBackground: "#18191f",
  playlistText: "#575a77",
  playlistBackgroundHoverActive: "#18191f",
  playlistTextHoverActive: "#ffffff",
};

function Reproductor() {
  return (
    <div>
      <CancionesTop50

        trackList={tracks}
        includeTags={false}
        includeSearch={false}
        showPlaylist={true}
        sortTracks={true}
        autoPlayNextTrack={true}
        customColorScheme={colors} />


    </div>
  )
}

export default Reproductor;