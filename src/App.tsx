import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import ScrollThrottlePage from './pages/ScrollThrottlePage';

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/scrollThrottle" element={<ScrollThrottlePage />} />
    </Routes>
  );
}

export default App;
