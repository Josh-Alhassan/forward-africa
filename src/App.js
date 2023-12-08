import './App.css';
import Articles from './pages/Articles';
import Home from './pages/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormalEducation from './sections/FormalEducation';
import AboutUsOverview from './pages/AboutUsOverview';
import AboutWebsite from './pages/AboutWebsite';

function App() {
  return (
    <div>
     {/* <Home />
     <Articles /> */}

     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="formal-education" element={<FormalEducation />} />
      <Route path="aboutus-overview" element={<AboutUsOverview />} />
      <Route path="aboutWebsite" element={<AboutWebsite />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
