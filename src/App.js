import React from 'react';
import './App.css';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'
import Home from "./router/Home";
import User from "./router/User";
import Cart from "./router/Cart";

function App() {
    return (
        <div className="App">
            <div>
                <NavLink to="/home">主页</NavLink>
                <NavLink to="/cart">购物车</NavLink>
                <NavLink to="/user">个人中心</NavLink>
            </div>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/user" component={User}/>
                <Redirect from="/" to="/home"/>
            </Switch>
        </div>
    );
}

export default App;
