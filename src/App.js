import React from 'react';
import './App.css';
import {NavLink, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import Home from "./router/Home";
import User from "./router/User";
import Cart from "./router/Cart";

function App(props) {
    //console.log(props);
    props.history.listen(link => {
        console.log(link);
    });

    return (
        <div className="App">
            <div>
                <NavLink to="/home">主页</NavLink>
                <NavLink to="/cart">购物车</NavLink>
                <NavLink to={{
                    pathname: "/user", query: {name: "蔡正峻"}
                }}>个人中心</NavLink>
                <button onClick={() => {
                    props.history.push("/user");
                }}>编程式导航
                </button>
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

export default withRouter(App);
