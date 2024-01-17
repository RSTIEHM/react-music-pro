/* eslint-disable react/prop-types */


const MainContent = ({children, title="albums"}) => {
  return (
    <>
      <div className="main-wrapper-header">
        <div className="page-header-title">
          <h1 className="page-name">{title}</h1>
        </div>
           {children}
      </div>
    </>
  )
}

export default MainContent