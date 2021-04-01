import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, Col, Layout, Row } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import UserMenu from "../navigation/UserMenu";
import PageNotFound from "../PageNotFound";
import Home from "../navigation/Home";
// import Dashboards from "../Dashboards";
import MapDashboard from "../Map";
import Projects from "../ProjectsList/Projects";
import SubProjects from "../ProjectsList/Sub-projects/";
import Project from "../ProjectsList/Projects/components/ProjectsDetails";
import SubProject from "../ProjectsList/Sub-projects/components/SubProjectsDetails/"
import SubProjectItems from "../ProjectsList/Sub-projects/components/SubProjectItems";
import SubProjectEquipments from "../ProjectsList/Sub-projects/components/SubProjectEquipments";
// import Settings from "../Settings";
import GeoNode from "../GeoNode";
import Agencies from "../Agencies";
import AdminPanel from "../AdminPanel";
import PrivateRoute from '../Auth/PrivateRoute';
import Users from "../Users";
import Contracts from "../Contracts";
import "./styles.css";

/* constants */
const { Header, Content } = Layout;
const breadcrumbNameMap = {
  "/app": {
    name: "Home",
    title: "Projects Supervison Tool",
  },

  /* Projects routes */
  "/app/projects": {
    name: "projects",
    title: "projects Module",
  },
  "/app/sub_projects": {
    name: "Subprojects",
    title: "List of all Subprojects",
  },

  "/app/projects/:type": {
    name: "Project",
    title: "Detail of single project",
  },
  "/app/sub-projects/:type": {
    name: "Sub Project",
    title: "Detail of single sub project",
  },
  "/app/sub-project-items": {
    name: "Sub Project items",
    title: "List of all sub project items",
  },
  "/app/sub-project-equipments": {
    name: "Sub Project Equipments",
    title: "List of all sub project equipments",
  },
  "/app/human-resources": {
    name: "Human Resources",
    title: "List of all human resources",
  },
  "/app/sub-projects-contracts": {
    name: "Sub Project Contracts",
    title: "List of all Sub Project Contracts",
  },
  "/app/admin-panel": {
    name: "Admin Panel",
    title: "Admin Panel module",
  },
  /* dashboards routes */
  "/app/dashboards": {
    name: "Dashboards",
    title: "Dashboards",
  },

  /* users routes */
  "/app/users:": {
    name: "users",
    title: "users Module",
  },
   /* Contracts routes */
   "/app/contracts:": {
    name: "contracts",
    title: "contracts Module",
  },
};

/**
 * @function
 * @name BaseLayout
 * @description Render base layout for EWEA app
 * @param {object} props Properties inject by router
 * @param {object} props.location Location object from react router
 * @param {object} props.match Match prop from react router
 * @param {string} props.match.url Current Url
 * @returns {object} BaseLayout component
 * @version 0.1.0
 * @since 0.1.0
 */
const BaseLayout = ({ location, match: { url: baseUrl } }) => {
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const lastPath = pathSnippets[pathSnippets.length - 1];

  // generate dynamic breadcrumb items
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;

    if (breadcrumbNameMap[url]) {
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url} title={breadcrumbNameMap[url].title}>
            {breadcrumbNameMap[url].name}
          </Link>
        </Breadcrumb.Item>
      );
    }

    return (
      <Breadcrumb.Item key={url}>
        <span title={lastPath}>{lastPath}</span>
      </Breadcrumb.Item>
    );
  });

  // TODO clean this up
  const breadcrumbItems = [].concat(extraBreadcrumbItems);
  return (
    <Layout className="BaseLayout">
      <Header className="BaseLayoutHeader" >
        <Row type="flex" align="middle">
          {/* breadcrumb section start */}
          <Col xxl={22} xl={22} lg={22} md={22} sm={20} xs={20} justify="start">
            <Row type="flex" justify="start">
              <Breadcrumb className="Breadcrumb" separator=">">
                {breadcrumbItems}
              </Breadcrumb>
            </Row>
          </Col>
          {/* breadcrumb section end */}

          <Col xxl={2} xl={2} lg={2} md={2} sm={4} xs={4}>
            <Row type="flex" justify="end">
              <Col span={12}>
                <UserMenu />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content className="BaseLayoutContent">
        <Switch>
          <PrivateRoute exact path={`${baseUrl}/`} component={Home} />
          {/* Projects PrivateRoutes */}
          <PrivateRoute
            exact
            path={`${baseUrl}/projects`}
            component={Projects}
          />{" "}
          <PrivateRoute
            exact
            path={`${baseUrl}/projects/:id`}
            render={({ match }, props) => <Project match={match} {...props} />}
          />
          <PrivateRoute exact path={`${baseUrl}/sub_projects`} component={SubProjects} />

          <PrivateRoute
            exact
            path={`${baseUrl}/sub-projects/:id`}
            render={({ match }, props ) => <SubProject match={match} {...props}/>}
          />
          <PrivateRoute
            exact
            path={`${baseUrl}/sub-project-items`}
            render={(props) => <SubProjectItems {...props} />}
          />
          <PrivateRoute
            exact
            path={`${baseUrl}/equipments`}
            /*render={(props) => <SubProjectEquipments {...props} />}*/
            component={SubProjectEquipments}
          />

          <PrivateRoute path={`${baseUrl}/map`} component={MapDashboard} />
          <PrivateRoute
            exact
            path={`${baseUrl}/geo-node`}
            component={GeoNode}
          />
          <PrivateRoute
            exact
            path={`${baseUrl}/admin-panel/users`}
            component={Users}
          />
          <PrivateRoute
            exact
            path={`${baseUrl}/admin-panel/roles`}
            component={Users}
          />
          <PrivateRoute
            exact
            path={`${baseUrl}/admin-panel/agencies`}
            component={Agencies}
          />
          <PrivateRoute
            exact
            path={`${baseUrl}/admin-panel`}
            component={AdminPanel}
          />
          <PrivateRoute
            exact
            path={`${baseUrl}/contracts`}
            component={Contracts}
          />
          <PrivateRoute component={PageNotFound} />
        </Switch>
      </Content>
    </Layout>
  );
};

BaseLayout.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  match: PropTypes.shape({ url: PropTypes.string, path: PropTypes.string })
    .isRequired,
};

export default BaseLayout;
