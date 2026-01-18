import './App.css'
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Index from './routes/index.jsx';
import AboutMe from './routes/aboutme.jsx';
import Strategies from './routes/strategies.jsx';
import ClassroomStructure from './routes/classroom-structure.jsx';
import ClassroomInstruction from './routes/classroom-instruction.jsx';
import ResumePage from './routes/resumepage.jsx';
import ISTEStandardsPage from './routes/istestandardspage.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/classroom-structure" element={<ClassroomStructure />} />
        <Route path="/classroom-instruction" element={<ClassroomInstruction />} />
        <Route path="/strategies-for-success" element={<Strategies />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/iste-standards" element={<ISTEStandardsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}
