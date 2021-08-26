import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from "../Auth/PrivateRoute";
import SubProjectsList from "./components/SubProjectsList";

const SubProjects = (props) => {
    return (
        <Switch>
            <PrivateRoute
                exact
                path={`${props.match.url}`}
                component={props => <SubProjectsList {...props}/>}
            />
            {/*<PrivateRoute*/}
            {/*    path={`${props.match.url}/:id`}*/}
            {/*    component={props => <Package {...props} />}*/}
            {/*/>*/}
        </Switch>
    );
}

export default SubProjects;
