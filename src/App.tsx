import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Impact from './pages/Impact';
import Stories from './pages/Stories';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import SchoolRegistration from './pages/SchoolRegistration';
import ProgramDetail from './pages/ProgramDetail';
import Roadmap from './pages/Roadmap';
import Partnership from './pages/Partnership';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetail />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/school-registration" element={<SchoolRegistration />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
