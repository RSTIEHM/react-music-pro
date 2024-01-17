import { useState, useEffect } from "react";
import MainContent from "../components/MainContent"
import {fetchAlbumArtistAndSong} from "../hooks/useSingleAlbum"
import { useParams } from "react-router-dom";
import AlbumLoader from "../components/Album_Loader";
import Loader from "../components/Loader"
import { Link } from "react-router-dom";

const Album = () => {

  const { album_id } = useParams();

  

  const [albumData, setAlbumData] = useState({
    id: "",
    artist:"",
    artistID:"",
    description: "",
    artWork: "",
    songs: "",
    title: ""
  });



  useEffect(() => {
    const fetchData = async () => {
      if(album_id) {
        const data = await fetchAlbumArtistAndSong(album_id);
        setAlbumData(data);
      }

    };

    fetchData();
  }, [album_id]);


  const {  artist,  description, artWork, songs, title } = albumData;
  // console.log(id, artist, artistID, description, artWork, songs, title )
  if(albumData === undefined) {
    return <Loader />
  } 
 

  return (
    <MainContent title="ARTIST & ALBUM">
        { albumData === undefined || songs.length <= 0 ? (
          <AlbumLoader /> ) : (
            <>
            <div className="main">
              <div className="single-album single-album-index">

                <div className="single-album-container">
                  <div className="image-album-info">
                    <img className="single-album-image" src={artWork} alt="Record" />
                    <div className="single-album-content">
                      <Link to={`/artist/${artist.id}`} className="single-album-artist search-artist-card-artist single-underline" data-id="8">{artist.name } <span className="artist-name-span"> Now Playing...</span></Link>
                      <h3 className="single-album-title">{title}</h3>
                      <h4 className="track-count">{songs.length} Songs</h4>
                      <p>{description}</p>
                      <div className="button-container">
                        <button  className="btn play-btn">Play</button>
                        <button className="btn save-btn">Save</button>
                      </div>
                    </div>
                  </div>
                </div>

                {songs.length > 0 && songs.map((song, i) => {
                  return (
                    <div key={song.id} className="single-album-tracks-container">
                      <div className={`single-album-track` }>
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
                  )
                })}

              </div>
            </div>
            </>
          )
        }

    </MainContent>
  )
}

export default Album



{/* <div className="main">
{title} {artist.name} {description}
<img src={artWork} />
{songs.length}
</div> */}