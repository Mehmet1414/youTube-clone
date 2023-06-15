import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import { ContextProvider } from './context/contextApi';
import SearchResult from './components/SearchResult';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/watch/:videoId" element={<VideoDetail />} />
          <Route path="/search-result/:query" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;