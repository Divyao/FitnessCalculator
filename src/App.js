import './App.css';
import { Routes, Route } from 'react-router-dom';
import InputDetails from './components/Home'
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import Signup from './components/registration';


function App() {
  return (
    
    <div className="App">
    <Routes>
    <Route path='/' element={<InputDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registration' element={<Signup/>}/> 
    ;
    </Routes>
    </div>
  );
}

//    <Route path='/' element={<Register/>} />

export default App;
