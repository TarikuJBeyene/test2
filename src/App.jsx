import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  return (
    <Router basename="/test2/">
      <div className="app-wrapper">
        <header className="header">
          <Link to="/" className="header-logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#1E3876" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="#1E3876" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="#1E3876" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Dr. Tariku Jibat
          </Link>
          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <a href="https://github.com/TarikuJBeyene" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<Post />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2026 Dr. Tariku J. Beyene. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
