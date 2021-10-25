import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './blocks/header/index.jsx';
import Hero from './blocks/hero';
import AllTokens from './pages/AllTokens';



import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Header/>
      <Hero/>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/allTokens" exact>
          <AllTokens/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;