import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
import * as ROUTES from "./components/constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from './hooks'

function App() {
  const { user } = useAuthListener();
  console.log(user);
  return (
    <Router>
      <Switch>
      <IsUserRedirect
        exact
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>

      <IsUserRedirect
        exact
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>

      <ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect
        exact
        user={user}
        loggedInPath={ROUTES.HOME}
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
