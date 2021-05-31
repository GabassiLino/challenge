import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

function App() {
  const userName = localStorage.getItem('user')
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {userName === null ?
              <Redirect to="/login" /> :
              <Redirect to="/home" />
            }
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
