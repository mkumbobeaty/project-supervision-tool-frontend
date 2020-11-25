import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, Col, Layout, Row } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import UserMenu from "../navigation/UserMenu";
import PageNotFound from "../PageNotFound";
import Home from "../navigation/Home";
import Dashboards from "../Dashboards";
import ResourceNavMenu from "../navigation/Projects";
import MapDashboard from "../Map";
import Projects from "../Projects/Projects";
import SubProjects from "../Projects/Sub-projects";
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
  "/app/sub-projects": {
    name: "sub-projects",
    title: "List of all Sub-projects",
  },

  "/app//roject/:type": {
    name: "Project",
    title: "Detail of single project",
  },
  "/app/adminpanel": {
    name: "Admin Panel",
    title: "Admin Panel module",
  },
  /* dashboards routes */
  "/app/dashboards": {
    name: "Dashboards",
    title: "Dashboards",
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
      <Header className="BaseLayoutHeader">
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
          <Route exact path={`${baseUrl}/`} component={Home} />
          {/* Projects routes */}
          <Route
            exact
            path={`${baseUrl}/projects`}
            component={Projects}
          />{" "}
          <Route
            exact
            path={`${baseUrl}/sub-projects`}
            render={(props) => <SubProjects {...props}/>}
          />          
          <Route path={`${baseUrl}/map`} component={MapDashboard} />
          {/* Admin panel */}
          <Route path={`${baseUrl}/adminpanel`} component={() => {
            window.location.href = 'https://pamoja-backend.herokuapp.com/';
            return null;
          }} />
          {/* Dashboard routes */}
          <Route
            exact
            path={`${baseUrl}/dashboards`}
            component={Dashboards}
          />
          <Route component={PageNotFound} />
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
