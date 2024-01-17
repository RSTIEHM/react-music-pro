/* eslint-disable react/prop-types */
import Navigation from "./Navigation"
import FooterBar from "./FooterBar"

const MainLayout = ({ children }) => {
  return (
    <>
    <div className='app'>
       <Navigation />  
        {children}
        <FooterBar />
    </div>
    </>
  )
}

export default MainLayout