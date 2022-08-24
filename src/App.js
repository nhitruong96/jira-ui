import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import HomeTemplate from './templates/HomeTemplate';
import Detail from './pages/Detail/Detail';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';

import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import {createBrowserHistory} from "history";


export const history = createBrowserHistory({ window });

function App() {
  return (
    <HistoryRouter history={history}>  
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index path='' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='profile' element={<Profile/>} />
         
          <Route path='*' element={<Navigate to='/home' />} />
          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
