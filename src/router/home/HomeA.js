import React, {Component} from 'react';

class HomeA extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*HomeA{this.props.match.params.id}*/}
                HomeA
            </div>
        );
    }
}

HomeA.propTypes = {};

export default HomeA;
