import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Test from "./routes/Test";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/test" component={Test}/>
                </Switch>
            </div>
        );
    }
}
