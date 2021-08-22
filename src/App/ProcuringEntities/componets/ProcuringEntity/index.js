import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from "../../../Auth/PrivateRoute";
import ProcuringEntityDetails from "../Details";
import Packages from "../../../Packages";

const ProcuringEntity = (props) => {
    return (
        <Switch>
            <PrivateRoute
                exact
                path={`${props.match.url}`}
                component={props => <ProcuringEntityDetails {...props}/>}
            />
            <PrivateRoute
                path={`${props.match.url}/packages`}
                component={props => <Packages {...props} />}
            />
        </Switch>
    );
}

export default ProcuringEntity;
