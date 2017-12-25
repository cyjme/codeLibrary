import React from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import "./index.scss";

@inject('userStore')
@withRouter
@observer
export default class Home extends React.Component {
    render() {
        const {name} = this.props.userStore;

        return (
            <div className="">
                tes
            </div>
        );
    }
}
