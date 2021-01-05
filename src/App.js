import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import User from './components/User'
import Homepage from './components/Homepage'
import UserDetails from './components/UserDetails'
import {
  BrowserRouter as Router,
  Route,
  Switch

} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/about" component={About} />
          <Route path="/user" exact component={User} />
          <Route path="/user/:id" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
