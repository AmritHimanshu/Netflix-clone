import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { selectRemember } from './features/rememberSlice';
import FirstPage from './Components/FirstPage';
import SignInPage from './Components/SignInPage';
import SignUpRegistration from './Components/SignUpRegistration';
import SignUpRegform from './Components/SignUpRegform';
import SignUp from './Components/SignUp';
import SignUpPlanform from './Components/SignUpPlanform';
import HomeScreen from './Components/HomeScreen';

function App() {

  const user = useSelector(selectUser);
  const selectRememberMe = useSelector(selectRemember);
  const dispatch = useDispatch();

  useEffect(() => {
      auth.onAuthStateChanged(userAuth => {
        if (userAuth) {
          // user is logged in
          dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
            })
          );
        }
        else {
          // user is logged out
          dispatch(logout());
        }
      });
  }, []);


  return (

    <Router>

      <div>
        <Routes>
          <Route exact path='/' element={user ? <HomeScreen /> : <FirstPage />} />
          <Route exact path='/login' element={<SignInPage />} />
          <Route exact path='/signup/registration' element={<SignUpRegistration />} />
          <Route exact path='/signup/regform' element={<SignUpRegform />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/signup/planform' element={<SignUpPlanform />} />
        </Routes>
      </div>

    </Router>

  );

}

export default App;
