import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="error-page">
      <h1>Nothing To See Here....</h1>
      <img src="https://res.cloudinary.com/rjsmedia/image/upload/v1639407817/LogoMakr_j9vkdj.png" alt="Home" />
      <Link className="btn play-btn" to="/">
        Home
      </Link>
    </div>
  )
}

export default Error