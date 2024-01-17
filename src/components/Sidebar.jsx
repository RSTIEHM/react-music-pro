import { Link } from "react-router-dom";


const Sidebar = () => {

  return (
    <div className="sidebar-nav">
      <img
        className="site-logo"
        src="https://res.cloudinary.com/rjsmedia/image/upload/v1639407817/LogoMakr_j9vkdj.png"
        alt="Logo"
      />
      <div className="group">
        <div className="navItem">
          <Link className="nav-link search-link" to="/search">
            Search
            <i className="fas fa-search side-bar-search"></i>
          </Link>
        </div>
      </div>
      <div className="group">
        <Link className="nav-link" to="/">
            Albums
        </Link>
      </div>
      <div className="group">
        <Link className="nav-link" to="/playlist">
            Playlists
        </Link>
      </div>


    </div>
  )
}

export default Sidebar