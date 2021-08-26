import { useMemo, useState } from "react";
import { UserContext } from "./libs/userContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Survey from "./components/pages/Survey";

const App = () => {
  const [user, setUser] = useState({});
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerValue}>
      <Router>
        <Switch>
          <Route path="/survey">
            <Survey />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
