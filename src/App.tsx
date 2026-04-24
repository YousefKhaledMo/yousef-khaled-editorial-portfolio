import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navigation } from './components/layout/Navigation';
import { TopBar } from './components/layout/TopBar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';

function AppContent() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-bg-primary">
      <TopBar />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
