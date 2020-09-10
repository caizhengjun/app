import React from 'react';
import './App.css';
import {NavLink, Route} from 'react-router-dom'
import Home from "./router/Home";
import User from "./router/User";
import Cart from "./router/Cart";

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/user" component={User}/>
            <div>
                <NavLink to="/home">主页</NavLink>
                <NavLink to="/cart">购物车</NavLink>
                <NavLink to="/user">个人中心</NavLink>
            </div>
        </div>
    );
}

export default App;
