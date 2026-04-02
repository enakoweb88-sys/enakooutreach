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
import BlogLatestNews from './pages/BlogLatestNews';
import BlogArchives from './pages/BlogArchives';
import FocusCommunities from './pages/FocusCommunities';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <WhatsAppFloat />
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
        <Route path="/focus-communities" element={<FocusCommunities />} />
        {/* Blog routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/posts" element={<Blog />} />
        <Route path="/blog/latest-news" element={<BlogLatestNews />} />
        <Route path="/blog/archives" element={<BlogArchives />} />
        {/* Get Involved alias */}
        <Route path="/get-involved" element={<Volunteer />} />
      </Routes>
    </Router>
  );
}

export default App;
