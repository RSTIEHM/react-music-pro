const initialState = {
  allData: null,
  loading: true,
  error: null,
  currentPlayingArtist: { name: "Ozzy" },
  currentViewingAlbum: [],
  currentPlayingAlbum: {
    title: "DSDSD",
    artWork:
      "https://res.cloudinary.com/rjsmedia/image/upload/v1640009429/SONG%20ART/PINK_FLOyD_DARK_SIDE_OF_THE_MOON_r0abyn.jpg",
  },
  currentPlayingSong: { title: "crazy train" },
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
