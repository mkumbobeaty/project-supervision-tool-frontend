
import React from "react";
import { Switch } from "react-router-dom";
import { Layout } from "antd";
import PrivateRoute from "../Auth/PrivateRoute";
import ProjectsList from "./components/ProjectsList";
import ProjectDetails from "./components/ProjectDetails";

/**
 * @function
 * @name Projects
 * @description render the projects page
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function Projects(props) {
  return (
    <Switch>
    <PrivateRoute
      exact
      path={`${props.match.url}/`}
      component={props => <ProjectsList {...props}/>}
    />
    <PrivateRoute
      exact
      path={`${props.match.url}/:id`}
      component={props => <ProjectDetails {...props} />}
    />
  </Switch>
  );

}

export default Projects;




