import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import MainContent from "../components/MainContent";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Album = () => {
  let { albumID } = useParams();
  albumID = Number(albumID);
  const { allData, dispatch, playing } = useAppContext();

  const [album, setAlbum] = useState({});
  const [artist, setArtist] = useState({});
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (allData?.albums && allData?.songs && allData?.artists) {
      const selectedAlbum = allData.albums.find(
        (album) => album.id === albumID
      );
      setAlbum(selectedAlbum);
      const selectedSongs = allData.songs.filter(
        (song) => song.albumID === albumID
      );
      setSongs(selectedSongs);
      const selectedArtist = allData.artists.find(
        (artist) => artist.id === selectedAlbum.artistID
      );
      setArtist(selectedArtist);
    }
  }, [allData, albumID]);

  const handlePlayTrack = (songID) => {
    dispatch({ type: "PLAY_TRACK", payload: songID });
    console.log("dispatching...");
    console.log(allData);
  };

  if (!album || !artist || songs.length === 0) {
    return <Loader />;
  }

  return (
    <MainContent title="ARTIST & ALBUM">
      <div className="main">
        <div className="single-album single-album-index">
          {/* MAKE SINGLE RECORD COMP */}
          <div className="single-album-container">
            <div className="image-album-info">
              <img
                className="single-album-image"
                src={album.artWork}
                alt={`${album.title} Cover`}
              />
              <div className="single-album-content">
                <Link
                  to={`/artist/${artist.id}`}
                  className="single-album-artist search-artist-card-artist single-underline"
                  data-id="8"
                >
                  {artist.name}{" "}
                  <span className="artist-name-span">(Now Playing...)</span>
                </Link>
                <h3 className="single-album-title">{album.title}</h3>
                <h4 className="track-count">{songs.length} Songs</h4>
                <p>{album.description}</p>
                <div className="button-container">
                  <button
                    className="btn play-btn"
                    onClick={() => handlePlayTrack(songs[0].id)}
                  >
                    {!playing ? "STOP" : "PLAY"}
                  </button>
                  <button className="btn save-btn">Save</button>
                </div>
              </div>
            </div>
          </div>

          {songs.map((song, i) => {
            return (
              // MAKE SINGLE SONG COMP
              <div
                onClick={() => handlePlayTrack(song.id)}
                key={song.title}
                className="single-album-tracks-container"
              >
                <div className={`single-album-track selected d`}>
                  <div className="counter-container">
                    <p className="single-album-track-counter">{i + 1}</p>
                    <i className="fas fa-play icon-play"></i>
                  </div>
                  <div className="single-track-info-wrapper">
                    <p className="single-album-track-title">{song.title}</p>
                    <p className="single-album-track-artist">{artist.name}</p>
                  </div>
                  <div className="song-duration">
                    <p>{song.duration}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainContent>
  );
};

export default Album;
