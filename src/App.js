import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <Route path="/appointment" >
          <Appointment></Appointment>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
