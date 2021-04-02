import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu';
import CreateSurvey from './Components/CreateSurvey';
import Publish from './Components/Publish';
import Logo from './logo.png';
import {BrowserRouter as Router ,Switch, Route, Link,} from 'react-router-dom';
import { useState } from 'react';

function App() {
    const [squestions, setSquestions] = useState([]);

  return (
    <div className="App">
      <div className="col-ms-10 offset-md-1 col-12 text-center">
      </div>
      <Router>
        <Link to="/">
          <img className="col-md-6" alt="logo" src={Logo} />
        </Link>
          <Switch>
            <Route path="/" component={Menu} exact /> 
            <Route path="/create" exact>
              <CreateSurvey squestions={squestions} setSquestions={setSquestions}></CreateSurvey>
            </Route>
            <Route path="/publish" >
              <Publish questions={squestions} />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
