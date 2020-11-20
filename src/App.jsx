import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyles from "./styles/global";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact"; 
import Statement from "./pages/Statement"; 
import ErrorPage from "./pages/Error"; 

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/statement" component={Statement} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
