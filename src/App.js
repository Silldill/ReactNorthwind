import logo from './logo.svg';
import './App.css';
import Customers from '../src/Components/customers'
import Searchcustomer from '../src/Components/searchcustomer'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/Search">
              Search for Customer
            </Link>
          </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/customers">
          <Customers/>
          </Route>
          <Route path="/Search">
            <Searchcustomer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
