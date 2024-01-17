import styled from "styled-components"

const LoaderContainer = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoaderImg = styled.img`
  transform: translateY(-90px);
`

const Loader = () => {
  return (
    <LoaderContainer>
        <LoaderImg src="https://res.cloudinary.com/rjsmedia/image/upload/v1639407817/LogoMakr_j9vkdj.png" alt="Loading..." />
    </LoaderContainer>
  )
}

export default Loader