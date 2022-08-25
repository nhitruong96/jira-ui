import React from 'react';
import { BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import Header from './components/Home/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';

// import HomeTemplate from './templates/HomeTemplate';

// import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
// import {createBrowserHistory} from "history";


// export const history = createBrowserHistory({ window });

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route exact path='/home' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/detail/:id' component={Detail} />
        <Route exact path='/profile' component={Profile} />

        <Route exact path='/' component={Home} />
        <Route path="*" component={PageNotFound}/>
      </Switch>

    </BrowserRouter>
    // <HistoryRouter history={history}>  
    //   <Routes>
    //     <Route path='' element={<HomeTemplate />}>
    //       <Route index path='' element={<Home />} />
    //       <Route path='home' element={<Home />} />
    //       <Route path='contact' element={<Contact />} />
    //       <Route path='about' element={<About />} />
    //       <Route path='login' element={<Login />} />
    //       <Route path='detail/:id' element={<Detail />} />
    //       <Route path='profile' element={<Profile/>} />
         
    //       <Route path='*' element={<Navigate to='/home' />} />
    //       {/* <Route path='*' element={<PageNotFound />} /> */}
    //     </Route>
    //   </Routes>
    // </HistoryRouter>
  );
}

export default App;
