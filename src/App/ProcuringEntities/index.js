import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from "../Auth/PrivateRoute";
import ProcuringEntitiesList from "./componets/ProcuringEntitiesList";
import ProcuringEntity from "./componets/Details";

const ProcuringEntities = (props) => {

    return (
    <Switch>
        <PrivateRoute
          exact
          path={`${props.match.url}`}
          component={props => <ProcuringEntitiesList {...props}/>}
        />
        <PrivateRoute
          path={`${props.match.url}/:id`}
          component={props => <ProcuringEntity {...props} />}
        />
      </Switch>
      );
}

export default ProcuringEntities;
