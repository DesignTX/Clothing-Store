import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

// exact is a true or false property, if blank = true means path must be exactly whats parsed in for it to render, eg '/'
function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path ='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
