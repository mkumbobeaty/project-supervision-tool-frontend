import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from "../../../Auth/PrivateRoute";
import PackageDetails from "../Details";
import SubProjects from "../../../Sub-projects";

const Package = (props) => {
    return (
        <Switch>
            <PrivateRoute
                exact
                path={`${props.match.url}`}
                component={props => <PackageDetails {...props}/>}
            />
            <PrivateRoute
                path={`${props.match.url}/sub_projects`}
                component={props => <SubProjects {...props} />}
            />
        </Switch>
    );
}
export default Package;
