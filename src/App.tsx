import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import ScrollThrottlePage from './pages/ScrollThrottlePage';
import InfiniteScrollPage from './pages/InfiniteScrollPage';

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/scrollThrottle" element={<ScrollThrottlePage />} />
      <Route path="/infinite-scroll" element={<InfiniteScrollPage />} />
    </Routes>
  );
}

export default App;
