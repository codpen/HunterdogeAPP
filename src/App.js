import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './blocks/footer';
import Header from './blocks/header/index.jsx';
import Hero from './blocks/hero';
import AllTokens from './pages/AllTokens';
import HomePage from './pages/HomePage';
import NftGallery from './pages/NftGallary.jsx';


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
                <Route path="/nft-gallery" exact>
                    <NftGallery/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App;