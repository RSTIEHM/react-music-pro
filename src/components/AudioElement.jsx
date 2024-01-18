import { useEffect, useRef, useState, useCallback } from "react";
import { useAppContext } from "../context/appContext";

const AudioElement = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const { playing, albumSongs, dispatch, currentPlayingSong } = useAppContext();
  const audioPlayer = useRef();

  useEffect(() => {
    if (playing) {
      play();
    } else {
      pause();
    }
  }, [playing, trackIndex, albumSongs]);

  useEffect(() => {
    console.log("Current Playing Song:", currentPlayingSong);
    // Rest of the code...
  }, [currentPlayingSong]);

  const handleEnd = useCallback(() => {
    console.log("Audio track ended LOOP");
    if (trackIndex === albumSongs.length - 1) {
      setTrackIndex(0);
    } else {
      setTrackIndex((prev) => prev + 1);
    }
  }, [trackIndex, albumSongs]);

  const handleCanPlayThrough = useCallback(() => {
    // UPDATE currentPlayingSong in state
    dispatch({
      type: "UPDATE_CURRENT_PLAYING_SONG",
      payload: albumSongs[trackIndex],
    });
    // Audio is fully loaded, now you can safely play it
    play();
  }, [trackIndex, albumSongs, dispatch]);

  useEffect(() => {
    audioPlayer.current.addEventListener("ended", handleEnd);
    audioPlayer.current.addEventListener(
      "canplaythrough",
      handleCanPlayThrough
    );

    return () => {
      audioPlayer.current.removeEventListener("ended", handleEnd);
      audioPlayer.current.removeEventListener(
        "canplaythrough",
        handleCanPlayThrough
      );
    };
  }, [handleEnd, handleCanPlayThrough]);

  const play = useCallback(() => {
    if (audioPlayer.current) {
      audioPlayer.current.play();
    }
  }, []);

  const pause = useCallback(() => {
    audioPlayer.current.pause();
  }, []);

  return (
    <>
      <audio
        ref={audioPlayer}
        src={albumSongs.length > 0 ? albumSongs[trackIndex]?.path : ""}
      ></audio>
    </>
  );
};

export default AudioElement;
