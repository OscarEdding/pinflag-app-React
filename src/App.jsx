import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/nav/Navbar/Navbar";
import Footer from "./components/nav/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Red from "./components/pages/Red PinFlag/Red"
import Clients from "./components/pages/Clients/Clients"
import Blog from "./components/pages/Blog/Blog"
import Purpose from "./components/pages/Blog/Purpose.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/hablemos" component={Red} exact />
        <Route path="/clientes" component={Clients} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/blog/2021/06/03" component={Purpose} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
