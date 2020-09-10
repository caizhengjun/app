import React, {Component} from 'react';
import News from "./News";
import Phone from "./Phone";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "我是父组件的数据"
        }

    }

    fun = (data) => {
        console.log(data);
        this.setState({
            data
        })
    };

    render() {
        return (
            <div>
                我是父组件--{this.state.data}
                <News fuFun={this.fun}/>
                <Phone/>
            </div>
        );
    }
}

Main.propTypes = {};

export default Main;
