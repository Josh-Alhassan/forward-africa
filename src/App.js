import './App.css';
import Articles from './pages/Articles';
import Home from './pages/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormalEducation from './sections/FormalEducation';

function App() {
  return (
    <div>
     {/* <Home />
     <Articles /> */}

     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="formal-education" element={<FormalEducation />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
