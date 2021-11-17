import React from 'react';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Sign from './components/Sign';


const App=(props)=>{
    return<div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="http://localhost/gym/" component={Login}></Route>
        <Route exact path="http://localhost/gym/admin_reg.php" component={Sign}></Route>
        
    </div>
}
export default App;
