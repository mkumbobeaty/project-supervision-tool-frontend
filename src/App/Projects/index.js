
import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Project from "./components/ProjectsDetails";
import PrivateRoute from "../Auth/PrivateRoute";
import ProjectsList from "./components/ProjectsList";


/**
 * @class
 * @name Projects
 * @description render the projects page
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class Projects extends Component {
  render() {
    return  (
        <Switch>
          <PrivateRoute
          exact
            path={`${this.props.match.url}/`}
            component={ProjectsList}
          />
          <PrivateRoute
            exact
            path={`${this.props.match.url}/:id`}
            component={Project}
          />
        </Switch>
    );
  }
}

export default Projects;




