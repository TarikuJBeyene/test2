import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <Router basename="/test2/">
      <div className="container animate-fade-in">
        <header className="header">
          <Link to="/">
            <h1 className="header-title">Antigravity Blog</h1>
          </Link>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<Post />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
