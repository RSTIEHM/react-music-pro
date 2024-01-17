
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { useAppContext } from "../context/appContext"
import MainContent from '../components/MainContent'
import Loader from "../components/Loader"
import { Link } from "react-router-dom"

const Artist = () => {
  let {id} = useParams() 
  id = Number(id)

  const { allData } = useAppContext();

  const [artist,setArtist] = useState({})
  const [albums, setAlbums] = useState([])
  const [songs, setSongs] = useState([])



  useEffect(() => {
    if(allData?.artists && allData?.songs && allData?.albums) {

      const selectedArtist = allData.artists.find((artist) => artist.id === id)
      setArtist(selectedArtist)
      const selctedSongs = allData.songs.filter((song) => song.artistID === id)
      setSongs(selctedSongs)
      const selectedAlbums = allData.albums.filter((album) => album.artistID === id)
      setAlbums(selectedAlbums)
      // const selectedAlbums
    }
  },[allData, id])

  if(!albums.length && !songs.length && !artist) {
    return <Loader />
  }

  return (
    <MainContent title="ARTIST">
      <div className="main">
        <div className="single-artist single-artist-index">
          <div className="single-artist-container">
            <div className="image-artist-info">
              <img
                className="single-artist-image"
                src={artist.img}
                alt="Record cover for"
              />
              <div className="single-artist-content">
                <h2 className="single-artist-artist">
                  {artist.name} <span className="artist-name-span"></span>
                </h2>
                <p>{artist.bio}</p>
                <div className="spacer">
                  <h2>Albums</h2>
                  <div className="search-albums-info-container">
                    {albums.map((album, i) => {
                      return (
                        <Link
                          key={i}
                          to={`/album/${album.id}`}
                          className="single-album-card"
                        >
                            <img
                            className="single-album-image grid-view-img"
                            src={album.artWork}
                            alt={`${album.title} Record Cover`}
                            />
    
                            <h2 className="single-album-title grid-view-info">
                              {album.title}
                            </h2>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="all-songs-search-container">
            <h2 className="single-artist-artist">All Songs</h2>
            {songs.map((song) => {
              return <h3 key={song.id}>{song.title}</h3>;
            })}
          </div>
        </div>
      </div>  
    </MainContent>
  )
}

export default Artist