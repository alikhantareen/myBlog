import React from "react";
import "./index.css";
import MainScreen from "./components/MainScreen";
import Aboutpage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import { Switch, Route } from "react-router";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainScreen}/>
        <Route path="/about" component={Aboutpage}/>
        <Route path="/blogpage" component={BlogPage}/>
      </Switch>
    </div>
  );
};

export default App;
