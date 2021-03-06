import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Characters from "Clase 92-Routing/components/Characters";
import Navigation from "Clase 92-Routing/components/Navigation";
import Comics from "Clase 92-Routing/components/Comics";
import Character from "Clase 92-Routing/components/Character";
import Comic from "Clase 92-Routing/components/Comic";

function App() {
  return (
    <>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/comics" component={Comics}></Route>
          <Route exact path="/characters" component={Characters}></Route>
          <Route
            exact
            path="/characters/:characterID"
            component={Character}
          ></Route>
          <Route exact path="/comics/:comicID" component={Comic}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
