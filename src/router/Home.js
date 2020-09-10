import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom'
import HomeA from "./home/HomeA";
import HomeB from "./home/HomeB";

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavLink to="/home/homeA">HomeA</NavLink>
                    <NavLink to="/home/homeB">HomeB</NavLink>
                </div>
                主页
                <Route path="/home/homeA" component={HomeA}/>
                <Route path="/home/homeB" component={HomeB}/>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
