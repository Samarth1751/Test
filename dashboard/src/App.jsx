import './App.css';
import SlideOutMenuContainer from './components/SlideOut/SlideOut';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllRides from './pages/AllRides';
import CardComponent from './components/CardComponent/CardComponent';

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


function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <div className="card-container">
        {/* Render multiple CardComponents */}
        
        <CardComponent
          
          title="$1,28,000"
          description="Total Earning"
        />



        <h3>Vehicle Details</h3>
        <CardComponent
          
          title="8"
          description="Available Vehicle"
          
          
        />
        <CardComponent
          
          title="4"
          description="Running Vehicle"
          
          
        />
        <CardComponent
          
          title="3"
          description="Booked Vehicles"
          
          
        />



        <h3>Driver Details</h3>
        <CardComponent
          
          title="8"
          description="Available Drivers"
          
          
        />
        <CardComponent
          
          title="4"
          description="Running Drivers"
          
          
        />
        <CardComponent
          
          title="3"
          description="Agency Owners"
          
          
        />
        
      </div>
    </div>
  );
}

export default App;
