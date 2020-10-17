import React from "react";
import {HashRouter, Route} from "react-router-dom";
import About from "./routers/About";
import Home from "./routers/Home";
import Navigation from "./component/Nagivation";

function App(){
  return(
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
    </HashRouter>
  )
}

export default App;