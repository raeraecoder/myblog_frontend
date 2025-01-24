import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Logout from './components/logout';
import SignUp from './components/newRegister';
import Single from './components/single'
import Search from './components/search';
// import Registration
//   from './components/registration';
//  import Login from './components/login';
import SignIn from './components/newLogin';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path="/signUp" element={ <SignUp/> } />
    <Route path="/signIn" element={<SignIn/>}/>
    <Route path="/logout" element={<Logout/>} />
    <Route path="/post/:slug" element={<Single/>}/>
    <Route path="/search" element={<Search/>} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
