import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SigninForm from './component/SignIn';
import SignUpForm from './component/SignUp';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/signin" element={<SigninForm />}></Route>
      <Route path="/signup" element={<SignUpForm />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
