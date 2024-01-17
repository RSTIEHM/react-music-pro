const initialState = {
  allData: null,
  loading: true,
  error: null,
  currentViewingAlbum: [],
  currentPlayingAlbum: [],
  currentSong: 0,
  repeat: false,
  random: false,
  playing: false,
  audio: null,
};

const reducer = (state, action) => {
  let filteredAlbums;
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
        filteredAlbums,
      };
    case "PLAY_TRACK":
      console.log(action.payload, "payload");
      return {
        ...state,
        currentSong: action.payload,
        playing: !state.playing,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
