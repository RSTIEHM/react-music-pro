import { useEffect } from "react";
import { useAppContext } from "../context/appContext"

const FooterBar = () => {
  const {  currentPlayingAlbum } = useAppContext();


  useEffect(() => {
    console.log( currentPlayingAlbum, "IN")
  }, [ currentPlayingAlbum])


  
  return (
    <div className="now-playing-container">
       {currentPlayingAlbum.title}
    </div>
  )
}

export default FooterBar