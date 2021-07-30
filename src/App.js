import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import CreatePassword from "./components/CreatePassword/CreatePassword";
import LandingPage from "./components/LandingPage/LandingPage";
import AddAffiliate from "./components/AddAffiliate/AddAffiliate";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/create-password">
            <CreatePassword />
          </Route>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Route path="/add-affiliate">
            <AddAffiliate />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
