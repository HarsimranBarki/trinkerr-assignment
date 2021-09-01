import { UserProvider } from "./libs/userContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Survey from "./components/pages/Survey";

const App = () => {
  return (
    <UserProvider>
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
    </UserProvider>
  );
};

export default App;
