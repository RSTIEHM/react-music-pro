
const MobileNav = () => {
    return (
      <div className="mobile-nav-container">
        <img
          className="site-logo"
          src="https://res.cloudinary.com/rjsmedia/image/upload/v1639407817/LogoMakr_j9vkdj.png"
          alt="Logo"
        />
        <div className="nav-link home-link-mobile">
          <i className="fas fa-home"></i>
        </div>
        <div className="nav-link search-link-mobile">
          <i className="fas fa-search"></i>
        </div>
        <div className="nav-link your-music-mobile">
          <i className="fas fa-file"></i>
          <span className="your-music-mobile-span">0</span>
        </div>
      </div>
    )
  }
  
  export default MobileNav