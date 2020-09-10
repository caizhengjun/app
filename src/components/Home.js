import React, {Component} from "react";
import {NavLink, Route} from 'react-router-dom'
import HomeA from "../router/HomeA";
import HomeB from "../router/HomeB";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                你好，我是组件！
                {this.state.time}
                {/*<img src="sylm.jpg" alt="石原里美"/>*/}
                <img style={{height: 200, width: 375}} src={require("../assert/sylm.jpg")} alt=""/>
                <Route exact path="/home/homeA" component={HomeA}/>
                <Route exact path="/home/homeB" component={HomeB}/>
                <div>
                    <NavLink to="/home/homeA">HomeA</NavLink>
                    <NavLink to="/home/homeB">HomeB</NavLink>
                </div>
            </div>
        )
    }

}

export default Home
