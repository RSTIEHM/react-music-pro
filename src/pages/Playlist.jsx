import MainContent from "../components/MainContent"

const Playlist = () => {
  return (
   <MainContent title="PLAYLIST">
      <div className="main">
        <div className="playlist playlist-index">
          <div className="playlist-container">
            <div className="playlist-track">
              <div>
                <img src="https://res.cloudinary.com/rjsmedia/image/upload/v1640009429/SONG%20ART/BLACK_SABBATH_BLOODY_SABBATH_mija5q.jpg" alt="Cover"/>
                <i className="fas fa-play icon-play"></i>
              </div>
              <div>
                <p className="playlist-title-album">
                  Black Sabbath - Sabbath Bloody Sabbath</p>
              </div>
              <div>
                <button className="btn btn-trash"><i className="fa fa-trash trash-btn"></i></button>
              </div>
            </div>
            <div className="playlist-track selected">
              <div>
                <img src="https://res.cloudinary.com/rjsmedia/image/upload/v1640009429/SONG%20ART/BEE_GEES_SATURDAY_NIGHT_FEVER_l5etco.jpg" alt="Cover" />
                <i className="fas fa-play icon-play"></i>
              </div>
              <div>
                <p className="playlist-title-album">
                  The Bee Gees - Saturday Night Fever</p>
              </div>
              <div>
                <button className="btn btn-trash"><i className="fa fa-trash trash-btn"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div> 
   </MainContent>
  )
}

export default Playlist