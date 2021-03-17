import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

// exact is a true or false property, 
// if blank = true means path must be exactly whats parsed in for it to render, eg '/'

// Switch finds a route inside that matches 
// and renders only that route (will find the first match to render)
// provides more control over our app

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path ='/hats' component={HatsPage} />        
      </Switch>
    </div>
  );
}

export default App;
