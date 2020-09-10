import React, {Component} from 'react';
import PubSub from 'pubsub-js'

class Phone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subData: "等待获取订阅的数据"
        };
    }

    componentDidMount() {
        PubSub.subscribe("evt", (key, subData) => {
            this.setState({
                subData
            });
            console.log(`${this.state.subData} 接收成功!`)
        })
    }

    render() {
        return (
            <div>
                {this.state.subData}
                Phone
            </div>
        );
    }
}

Phone.propTypes = {};

export default Phone;
