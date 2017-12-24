import React from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';

@inject('userStore')
@withRouter
@observer
export default class Test extends React.Component {
    render() {
        const {name} = this.props.userStore;
        console.warn(name);

        return (
            <div>
                <h1>what's your name</h1>
                <h1>{name}</h1>
            </div>
        );
    }
}
