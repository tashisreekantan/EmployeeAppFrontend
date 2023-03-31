import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeForms from './components/EmployeeForms';

function App() {
  return (
    
    <BrowserRouter>
     <Navbar />
    <Routes>
   
      <Route path="/" element={<Home /> }/>
      <Route path="/employeeForm" element={ <EmployeeForms/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
