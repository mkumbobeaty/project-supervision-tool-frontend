
import React, { useState } from "react";
import { Switch, Link } from "react-router-dom";
import { Breadcrumb, Col, Layout, Row } from "antd";
import Project from "./components/ProjectsDetails";
import PrivateRoute from "../Auth/PrivateRoute";
import ProjectsList from "./components/ProjectsList";
import UserMenu from "../navigation/UserMenu";

// Constants
const { Content, Header } = Layout;


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
      component={props => <Project {...props} />}
    />
  </Switch>
  );

}

export default Projects;




