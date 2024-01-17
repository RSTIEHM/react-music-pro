/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const SingleAlbumLink = ({album}) => {

  return (
    <Link
      to={`/album/${album.id}`}
      className="single-album-card"
      key={album.id}
    >
      <img
        className="single-album-image grid-view-img"
        src={album.artWork}
        alt={`${album.title} artwork`}
      />
      <h2 className="single-album-title grid-view-info">
        {album.title}
      </h2>
    </Link>
  )
}

export default SingleAlbumLink