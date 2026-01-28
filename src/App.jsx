import { Routes, Route, HashRouter } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Layout from './Layout'
import TopPage from './pages/TopPage'
import ArticlePage from './pages/ArticlePage'
import ColumnPage from './pages/ColumnPage';
import SearchResultPage from './pages/SearchResultPage';

function App() {

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path="/articlepage" element={<ArticlePage />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/article/:id" element={<ColumnPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
