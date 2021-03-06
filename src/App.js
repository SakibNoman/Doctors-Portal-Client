import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/appointment" >
            <Appointment></Appointment>
          </Route>
          <Route path="/login" >
            <Login></Login>
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
