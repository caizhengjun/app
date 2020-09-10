import React, {Component} from 'react';
import axios from 'axios';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: []
        }
    }

    componentDidMount() {
        this.getUserInfoList();
    }

    getUserInfoList = () => {
        axios.get("http://localhost:4000/arr")
            .then(result => {
                console.log(result);
                this.setState({
                    userInfo: result.data
                })
            })
    };

    render() {
        if (this.state.userInfo.length > 0) {
            return (
                <div>
                    <ul>
                        {this.state.userInfo.map((value, index) => {
                            return <li key={index}>
                                <span>{value.id}</span>
                                <span>{value.name}</span>
                            </li>
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    数据正在加载中...
                </div>
            )
        }

    }
}

User.propTypes = {};

export default User;
