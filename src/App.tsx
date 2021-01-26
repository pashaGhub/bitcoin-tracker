import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ROUTES } from "./constants";

import Header from "./components/Header/Header";
import Currencies from "./pages/Currencies/Currencies";
import Analysis from "./pages/Analysis/Analysis";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <>
            <Header />
            <Route
              exact
              path="/"
              render={() => <Redirect to={ROUTES.currencies} />}
            />
            <Route exact path={ROUTES.currencies} component={Currencies} />
            <Route exact path={ROUTES.analysis} component={Analysis} />
          </>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
