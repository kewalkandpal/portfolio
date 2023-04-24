import "./App.css";
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
    <div className="app">
      <Switch>
        <Route exact path="/">
            <Header />
            <Home />
        </Route>
        <Route exact path="/cart">
            <Header />
            <Cart />
        </Route>
     </Switch>
    </div>
     </Router>
  );
}

export default App;
