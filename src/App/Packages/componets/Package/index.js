import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from "../../../Auth/PrivateRoute";
import PackageDetails from "../Details";
import SubProject from "../../../Sub-projects/components/SubProjectsDetails";

const ProcuringEntities = (props) => {

    return (
        <Switch>
            <PrivateRoute
                exact
                path={`${props.match.url}`}
                component={props => <PackageDetails {...props}/>}
            />
            <PrivateRoute
                path={`${props.match.url}/:id/sub_projects`}
                component={props => <SubProject {...props} />}
            />
        </Switch>
    );
}

export default ProcuringEntities;
