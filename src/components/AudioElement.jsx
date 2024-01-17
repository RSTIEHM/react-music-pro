import { useEffect, useRef } from "react";
import { useAppContext } from "../context/appContext";

const AudioElement = () => {
  const { currentPlayingSong, playing } = useAppContext();
  const audioPlayer = useRef();

  useEffect(() => {
    if (currentPlayingSong && playing) {
      play();
    }
  }, [currentPlayingSong, playing]);

  function play() {
    console.log(audioPlayer);
    audioPlayer.current.play();
  }
  return (
    <>
      <audio ref={audioPlayer} src={currentPlayingSong?.path}></audio>
    </>
  );
};

export default AudioElement;

{
  /* <AudioElement
  getCurrentTrackLength={getCurrentTrackLength}
  isLooping={isLooping}
  getTimeUpdate={getTimeUpdate}
/>; */
}
