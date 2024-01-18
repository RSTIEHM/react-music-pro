import {
  FETCH_SUCCESS,
  FETCH_ERROR,
  PLAY_TRACK,
  FILTER_ALBUMS,
  STOP_TRACK,
} from "./actionsTypes";

const initialState = {
  allData: null,
  loading: true,
  error: null,
  currentPlayingArtist: {},
  currentViewingAlbum: [],
  currentPlayingAlbum: {},
  currentPlayingSong: {},
  repeat: false,
  random: false,
  playing: false,
  audio: null,
  selectedSong: {},
  selectedPlaylist: [],
  playPrevTrack: false,
  playNextTrack: false,
};

const reducer = (state, action) => {
  let filteredAlbums;
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        allData: action.payload,
        loading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case FILTER_ALBUMS:
      return {
        ...state,
        filteredAlbums,
      };
    case PLAY_TRACK:
      return {
        ...state,
        currentSong: action.payload,
        playing: true,
      };
    case STOP_TRACK:
      console.log("IN STOP REDUCER");
      return {
        ...state,
        currentSong: {},
        playing: false,
      };

    default:
      return state;
  }
};

export { initialState, reducer };
