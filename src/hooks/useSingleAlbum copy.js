import supabase from "../api/supaBase";

// export const fetchAlbumArtistAndSong = async (albumId) => {

//   const { data: albums, error: albumError } = await supabase
//     .from("albums")
//     .select("*")
//     .eq("id", albumId);

//   if (albumError) {
//     console.error("Error fetching album:", albumError);
//     return null;
//   }

//   const { data: songs, error: songsError } = await supabase
//     .from("songs")
//     .select("*")
//     .eq("albumID", albumId);

//   if (songsError) {
//     console.error("Error fetching songs:", songsError);
//     return null;
//   }

//   const artistId = albums[0]?.artistID;
//   const { data: artists, error: artistError } = await supabase
//     .from("artists")
//     .select("*")
//     .eq("id", artistId);

//   if (artistError) {
//     console.error("Error fetching artist:", artistError);
//     return null;
//   }

//   // Merge album, songs, and artist data
//   const albumWithSongsAndArtist = {
//     ...albums[0],
//     songs,
//     artist: artists[0],
//   };

//   return albumWithSongsAndArtist;
// };

export const getAllData = async () => {
  // Fetch album
  const { data: albums, error: albumError } = await supabase
    .from("albums")
    .select("*");

  if (albumError) {
    console.error("Error fetching album:", albumError);
    return null;
  }

  // Fetch songs for the album
  const { data: songs, error: songsError } = await supabase
    .from("songs")
    .select("*");

  if (songsError) {
    console.error("Error fetching songs:", songsError);
    return null;
  }

  // Fetch artist for the album
  const { data: artists, error: artistError } = await supabase
    .from("artists")
    .select("*");

  if (artistError) {
    console.error("Error fetching artist:", artistError);
    return null;
  }

  // Merge album, songs, and artist data
  const albumWithSongsAndArtist = {
    albums,
    songs,
    artists,
  };

  return albumWithSongsAndArtist;
};
