import './App.css';

import SignInForm from './Components/SignInForm';
import Navbar from './Components/NavBar';
import SignupPage from './Components/SignUp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path = '/' element = {<SignInForm />} />
      <Route path = '/signup' element = {<SignupPage />} />


    </Routes>

    
    </div>
   



  
  );
}

export default App;
