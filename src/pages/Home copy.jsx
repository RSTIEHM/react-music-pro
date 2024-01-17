// import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";
import MainContent from "../components/MainContent"
import Loader from "../components/Loader";
import { useAlbums } from "../hooks/useAlbums";

const Home = () => {

const {isLoading, error, albums } = useAlbums()


    // ==================== LOAD =================================
    if(isLoading) { 
      return (
        <Loader />
      )
    }
    // ====================== ERROR =================================
    if(error) {
      console.log(error)
    }
    //=====================  DATA ===============================

  return (
   <MainContent title="Albums">
      <div className="main">
        <div className="home home-index">
          {albums &&
            albums.length > 0 &&
            albums.map((album, i) => (
              <NavLink
                to={`/album/${album.id}`}
                className="single-album-card"
                key={i}
              >
                <img
                  className="single-album-image grid-view-img"
                  src={album.artWork}
                  alt="Sabbath Bloody Sabbath"
                />
                <h2 className="single-album-title grid-view-info">
                  {album.title}
                </h2>
              </NavLink>
            ))}
        </div>
      </div>
   </MainContent>
  )
}

export default Home