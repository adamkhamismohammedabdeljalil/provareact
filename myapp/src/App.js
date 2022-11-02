import './App.css';
import { Routes, Route } from 'react-router-dom';
import MealDetails from './MealDetails';

import Home from './Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<MealDetails/>}/>
       
      </Routes>
      
    </div>
  );
}

export default App;
