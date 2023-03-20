import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirstPage from './Components/FirstPage';
import SignInPage from './Components/SignInPage';
import SignUpRegistration from './Components/SignUpRegistration';
import SignUpRegform from './Components/SignUpRegform';
import SignUp from './Components/SignUp';
import SignUpPlanform from './Components/SignUpPlanform';
import HomeScreen from './Components/HomeScreen';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/login' element={<SignInPage />} />
          <Route path='/signup/registration' element={<SignUpRegistration />} />
          <Route path='/signup/regform' element={<SignUpRegform />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signup/planform' element={<SignUpPlanform />} />
          <Route path='/homescreen' element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
