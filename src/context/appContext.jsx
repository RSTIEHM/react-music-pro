/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import  { createContext, useContext, useReducer, useEffect } from "react";
import { getAllData } from "../hooks/getAllData";



const AppContext = createContext();

function getAllBySongId(id, songs, albums, artists) {
  const song = songs.find((song) => song.id === id)
  const album = albums.find((album) => song.albumID === album.id)
  const artist = artists.find((artist) => artist.id === album.artistID)
  return {song, album, artist}
}

const initialState = {
  allData: null,
  loading: true,
  error: null,
  currentViewingAlbum: {},
  currentPlayingAlbum: {},
  currentPlayingArtist: {},
  currentPlayingSong: 0,
  repeat: false,
  random: false,
  playing: false,
  audio: null,
};

const reducer = (state, action) => {
  let selectedSong
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        allData: action.payload,
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "FILTER_ALBUMS":
      return {
        ...state,
      };
    case "PLAY_TRACK":
      console.log(action.payload, "PAYLOAD");
      selectedSong = getAllBySongId(action.payload, state.allData.songs, state.allData.albums, state.allData.artists)
      console.log(state);
      return {
        ...state,
        currentPlayingSong: selectedSong.song,
        currentPlayingAlbum: selectedSong.album,
        currentPlayingArtist: selectedSong.artist,
        playing: !state.playing,
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData();
        dispatch({type: "FETCH_SUCCESS", payload: data});
      } catch (error) {
        dispatch({type: "FETCH_ERROR", payload: error.message});
      }
    };
    fetchData();
  }, []);

  // const { allData, loading, error, playing, currentViewingAlbum, currentSong  } = state;

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

