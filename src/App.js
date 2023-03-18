import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirstPage from './Components/FirstPage';
import SignInPage from './Components/SignInPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/login' element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
