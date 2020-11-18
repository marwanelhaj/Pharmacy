import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Blog from './Component/Blog/Blog';
import ContactUs from './Component/ContactUs/ContactUs';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
//import OurProducts from './Component/OurProducts/OurProducts';
import ScrollToTop from './ScrollToTop';
import Terms from './Component/Pages/Terms';
import Privacy from './Component/Pages/Privacy';
import TeachLabwork from './Component/Blog/TeachLabwork';
import AddYourLab from './Component/AddYourLab/AddYourLab';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Registration from './Component/Register/Registration';

import { VirtualPharmaContext } from "./Context/VirtualPharme.Context";
import Profile from './Component/Profile/Profile';
import RegisterLearner from './Component/Register/RegisterLearner';


import StepOne from './Component/Register/StepOne';



function App() {
  const { isLogin } = useContext(VirtualPharmaContext);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route
            exact
            path="/register/step/one"
            render={() => <StepOne />}
          />
          <Route
            exact
            path="/register/learner"
            render={() => <RegisterLearner />}
          />
          <Route
            exact
            path="/profile"
            render={() => (isLogin ? <Profile /> : <Redirect to='/login' />)}
          />
          <Route
            exact
            path="/login"
            render={() => (!isLogin ? <Login /> : <Redirect to='/profile' />)}
          />
          <Route
            exact
            path="/register"
            render={() => (!isLogin ? <Register /> : <Redirect to='/profile' />)}
          />
          <Route
            exact
            path="/teach-labwork"
            render={() => <TeachLabwork />}
          />
          <Route
            exact
            path="/blog"
            render={() => <Blog />}
          />
          <Route
            exact
            path="/products"
            render={() => <Redirect to='/' />}
          />
          <Route
            exact
            path="/terms"
            render={() => <Terms />}
          />
          <Route
            exact
            path="/privacy"
            render={() => <Privacy />}
          />
          <Route
            exact
            path="/labs/create"
            render={() => <AddYourLab />}
          />
          <Route
            exact
            path="/login"
            render={() => <ContactUs />}
          />
          <Route
            exact
            path="/registration"
            render={() => <Registration />}
          />
          <Route
            exact
            path="/contact-us"
            render={() => <Redirect to='/' />}
          />
          <Route
            exact
            path="/"
            render={() => <Home />}
          />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
