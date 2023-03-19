import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirstPage from './Components/FirstPage';
import SignInPage from './Components/SignInPage';
import SignUpRegistration from './Components/SignUpRegistration';
import SignUpRegform from './Components/SignUpRegform';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/login' element={<SignInPage />} />
          <Route path='/signup/registration' element={<SignUpRegistration />} />
          <Route path='/signup/regform' element={<SignUpRegform />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
