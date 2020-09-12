import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                个人中心:{this.props.location.query.name}
            </div>
        );
    }
}

User.propTypes = {};

export default User;
