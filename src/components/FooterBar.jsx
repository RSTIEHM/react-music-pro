import {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from "../context/appContext";
import AudioElement from "./AudioElement";

import {
  STOP_TRACK,
} from "../reducers/actionsTypes";

const FooterBar = () => {

  // const [stop, setStop] = useState(false)
  // FROM CONTEXT ================
  const { currentPlayingAlbum, currentPlayingArtist, currentPlayingSong, playing,  dispatch } =
    useAppContext();

    useEffect(() => {
      function runDispatch() {
        dispatch({ type:STOP_TRACK });
      }
      runDispatch()
    },[dispatch])

    console.log("log msg")
    // console.log(albumSongs, "FOOTER SONGS")
  return (
    <>
      <div className="now-playing-container">
        <div className="now-playing-bar">
          <div className="now-playing-left">
            <Link to={`/album/${currentPlayingAlbum.id}`}>
              <div className="content record-content">
                <img
                  className="record-cover"
                  src={currentPlayingAlbum.artWork}
                  alt={currentPlayingAlbum.title}
                />
                <div className="record-info">
                  <h3 className="record-artist">{currentPlayingArtist.name}</h3>
                  <p className="record-title">{currentPlayingSong.title}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="now-playing-center">
            <div className="content player-controls">
              <div className="btn-player-controls">
                <button className="shuffle">
                  <i className="fas fa-random"></i>
                </button>
                <button className="prev play-prev">
                  <i className="fas fa-backward"></i>
                </button>
                <button className="play play-icon">
                  <i className={`fas fa-play ${playing ? 'activeClr' : ''}`}></i>
                </button>
                <button onClick={() =>  dispatch({ type: "STOP_TRACK" })}  className="pause pause-icon" >
                  <i  className="fas fa-pause"></i>
                </button>
                <button className="next play-next">
                  <i className="fas fa-forward"></i>
                </button>
                <button className={`loop`}>
                  <i className="fas fa-retweet"></i>
                </button>
              </div>
            </div>
            <div className="progress-bar-container">
              <span className="progress-time current">0:00</span>
              <div className="progress-bar">
                <input
                  type="range"
                  className="progress-range"
                  min="0"
                  max="100"
                  step="1"
                ></input>
                <div className="progress-bar-track"></div>
              </div>
              <span className="progress-time remaining"></span>
            </div>
          </div>
          <div className="now-playing-center">
            <div className="volume-container">
              <div className="btn-player-controls">
                <AudioElement />
                <button className="volume-up">
                  <i className="fas fa-volume-up"></i>
                </button>
                <button className="volume-mute">
                  <i className="fas fa-volume-mute"></i>
                </button>
              </div>
              <div className="volume-bar">
                <input
                  type="range"
                  className="progress-range"
                  min="0"
                  max="100"
                  step="1"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBar;
