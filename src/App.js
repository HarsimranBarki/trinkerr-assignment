import { useMemo, useState } from "react";
import { UserContext } from "./libs/userContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/common/Header";

const App = () => {
  const [user, setUser] = useState({});
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerValue}>
      <Router>
        <Header />
        <Switch>
          <Route path="/about"></Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
