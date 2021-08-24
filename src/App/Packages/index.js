import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from "../Auth/PrivateRoute";
import PackagesList from "./componets/PackagesList";
import Package from "./componets/Package";

const Packages = (props) => {
    return (
        <Switch>
            <PrivateRoute
                exact
                path={`${props.match.url}`}
                component={props => <PackagesList {...props}/>}
            />
            <PrivateRoute
                path={`${props.match.url}/:id`}
                component={props => <Package {...props} />}
            />
        </Switch>
    );
}

export default Packages;
