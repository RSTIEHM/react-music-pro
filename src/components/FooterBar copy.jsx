import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
// import AudioElement from "./AudioElement";

const FooterBar = () => {
  const { currentPlayingAlbum, currentPlayingArtist, currentPlayingSong } =
    useAppContext();

  useEffect(() => {
    console.log(currentPlayingAlbum, "IN");
  }, [currentPlayingAlbum]);
  console.log(currentPlayingSong, "CURR");
  return (
    <>
      <div className="now-playing-container">
        <div className="now-playing-bar">
          <div className="now-playing-left">
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
                  <i className="fas fa-play"></i>
                </button>
                <button className="pause pause-icon">
                  <i className="fas fa-pause"></i>
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
              <span className="progress-time current">PRogress</span>
              <div className="progress-bar">
                <input
                  type="range"
                  className="progress-range"
                  min="0"
                  max="100"
                  value="0"
                  step="1"
                ></input>
                <div className="progress-bar-track"></div>
              </div>
              <span className="progress-time remaining">0:00</span>
            </div>
          </div>
          <div className="now-playing-center">
            <div className="volume-container">
              <div className="btn-player-controls">
                {/* <AudioElement /> */}
                <>{/* <AudioElement /> */}</>
                {/* <AudioElement
                  getCurrentTrackLength={getCurrentTrackLength}
                  isLooping={isLooping}
                  getTimeUpdate={getTimeUpdate}
                /> */}
                <button className="volume-up">
                  <i className="fas fa-volume-up"></i>
                </button>
                <button className="volume-mute">
                  <i className="fas fa-volume-mute"></i>
                </button>
              </div>
              <div className="volume-bar">
                <input
                  value="0"
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
