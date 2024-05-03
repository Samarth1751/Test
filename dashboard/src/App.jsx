import './App.css';
import SlideOutMenuContainer from './components/SlideOut';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllRides from './pages/AllRides';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <SlideOutMenuContainer />
        <Routes>
          
        <Route path="/" element={<AllRides />} />
          
          <Route path="/allrides" element={<AllRides />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
