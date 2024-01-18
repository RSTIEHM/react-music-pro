import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/appContext";

const AudioElement = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const { playing, albumSongs, dispatch } = useAppContext();
  const audioPlayer = useRef();

  useEffect(() => {
    if (playing) {
      play();
    } else {
      pause();
    }
  }, [playing, trackIndex, albumSongs]);

  useEffect(() => {
    const handleEnd = () => {
      console.log("Audio track ended LOOP");
      if (trackIndex === albumSongs.length - 1) {
        setTrackIndex(0);
      } else {
        setTrackIndex((prev) => prev + 1);
      }
    };

    const handleCanPlayThrough = () => {
      // UPDATE currentPlayingSong in state
      dispatch({
        type: "UPDATE_CURRENT_PLAYING_SONG",
        payload: albumSongs[trackIndex],
      });
      // Audio is fully loaded, now you can safely play it
      play();
    };

    audioPlayer.current.addEventListener("ended", handleEnd);
    audioPlayer.current.addEventListener(
      "canplaythrough",
      handleCanPlayThrough
    );

    return () => {
      // Cleanup event listeners on component unmount
      audioPlayer.current.removeEventListener("ended", handleEnd);
      audioPlayer.current.removeEventListener(
        "canplaythrough",
        handleCanPlayThrough
      );
    };
  }, [trackIndex, albumSongs, dispatch]);

  function play() {
    if (audioPlayer.current) {
      audioPlayer.current.play();
    }
  }

  function pause() {
    audioPlayer.current.pause();
  }

  return (
    <>
      <audio ref={audioPlayer} src={albumSongs[trackIndex]?.path}></audio>
    </>
  );
};

export default AudioElement;
