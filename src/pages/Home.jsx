import { useState, useEffect } from "react"
import MainContent from "../components/MainContent"
import {useAppContext} from "../context/appContext"
import SingleAlbumLink from "../components/SingleAlbumLink";
import Loader from "../components/Loader";
// import { Link } from "react-router-dom";


const Home = () => {
  const [albums, setAlbums] = useState([]);

  const allData = useAppContext();

  useEffect(() => {
    function fetchData() {
      if (allData && allData.allData && Array.isArray(allData.allData.albums)) {
        setAlbums(allData.allData.albums);
      }
    }

    fetchData();
  }, [allData, albums]);

  if (!albums) {
    return <Loader />;
  } 




return (   
<MainContent title="Albums">
  <div  className="main">
    <div className="home home-index">
      {albums.length > 0 &&
        albums.map((album, i) => (
          <SingleAlbumLink key={i} album={album} />
      ))}
    </div>
  </div>
</MainContent>

)
}

export default Home