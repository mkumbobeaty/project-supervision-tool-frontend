import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from "../Auth/PrivateRoute";
import ProcuringEntity from "./componets/Details";
import PackagesList from "./componets/PackagesList";

const Packages = (props) => {

    console.log('inside packages', props.match.url);

    return (
        <Switch>
            <PrivateRoute
                exact
                path={`${props.match.url}`}
                component={props => <PackagesList {...props}/>}
            />
            <PrivateRoute
                path={`${props.match.url}/:id`}
                component={props => <ProcuringEntity {...props} />}
            />
        </Switch>
    );
}

export default Packages;
