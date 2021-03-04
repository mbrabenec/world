import { React, useEffect, useState } from "react";
import {BrowserRouter, Router, Route, Switch, Link} from "react-router-dom";

//pages
import Index from "./Pages/Index";
import Country from "./Pages/Country";

function App() {

  return (
    <BrowserRouter>

     <Switch>

        <Route component={Index}  path="/" exact/>

        <Route component={Country} path="/countries/:countryName"/>

      </Switch>
     </BrowserRouter>

  );
}

export default App;
