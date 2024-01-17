import supabase from "../api/supaBase";

export const getAllData = async () => {
  try {
    // Fetch album
    const { data: albums, error: albumError } = await supabase
      .from("albums")
      .select("*");

    if (albumError) {
      console.error("Error fetching albums:", albumError);
      throw albumError;
    }

    // Fetch songs for the album
    const { data: songs, error: songsError } = await supabase
      .from("songs")
      .select("*");

    if (songsError) {
      console.error("Error fetching songs:", songsError);
      throw songsError;
    }

    // Fetch artists for the album
    const { data: artists, error: artistError } = await supabase
      .from("artists")
      .select("*");

    if (artistError) {
      console.error("Error fetching artists:", artistError);
      throw artistError;
    }

    // Merge album, songs, and artist data
    const albumWithSongsAndArtist = {
      albums,
      songs,
      artists,
    };

    return albumWithSongsAndArtist;
  } catch (error) {
    // Handle or log the error at a higher level if needed
    console.error("Error fetching data:", error);
    return null;
  }
};
