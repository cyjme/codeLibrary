import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Test from "./routes/Test";
import Home from "./routes/Home";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/test" component={Test}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}
