
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from './components/Feed'
import Header from './components/Header'
import VideoDetail from './components/VideoDetail'
import { ContextProvider } from './context/contextApi'

function App() {
  

  return (
    <ContextProvider>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Feed />} />
      <Route path='/video/:videoId' element={<VideoDetail />} />
    </Routes>
    </BrowserRouter>
    </ContextProvider>
  )
}

export default App
