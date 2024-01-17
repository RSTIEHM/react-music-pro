/* eslint-disable react/prop-types */

import { BrowserRouter, Routes, Route} from "react-router-dom";
import {AppProvider} from "./context/appContext"
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";
import Album from "./pages/Album";
import Artist from "./pages/Artist";
import Error from "./components/Error";
// import { Toaster } from "react-hot-toast";
import './index.css'




function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/search" element={<Search />} />
              <Route path="/album/:albumID" element={<Album />} />
              <Route path="/artist/:id" element={<Artist />} />
              <Route path="*" element={<Error />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </AppProvider>

  )
}

export default App
