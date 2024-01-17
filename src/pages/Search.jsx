import MainContent from "../components/MainContent"

const Search = () => {
  return (
    <MainContent title="SEARCH">
      <div className="main">
        <div className="search search-index">
          <div className="search-container">
                <input className="input search-input" type="text" placeholder="Search For An Artist..." value="" />
                <i className="fa fa-search big-search"></i> 
          </div>
        </div>
        <div className="search-results-container"></div>
      </div>
    </MainContent>
  )
}

export default Search