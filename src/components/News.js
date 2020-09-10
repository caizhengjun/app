import React, {Component} from 'react';
import PubSub from 'pubsub-js'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "我是子组件的数据",
            pubData: "我是pubSub数据"
        }
    }

    fun() {
        PubSub.publish("evt", this.state.pubData)
        console.log(`${this.state.pubData} 数据已经发送！`);
    }

    render() {
        return (
            <div>
                我是子组件
                <button onClick={this.props.fuFun.bind(this, this.state.data)}>点我发送消息给父组件</button>
                <button onClick={this.fun.bind(this)}>发布数据</button>
            </div>
        );
    }
}

News.propTypes = {};

export default News;
