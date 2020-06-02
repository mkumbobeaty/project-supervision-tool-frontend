import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, Col, Layout, Row } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import UserMenu from "../navigation/UserMenu";
import PageNotFound from "../PageNotFound";
import Home from "../navigation/Home";
import PrivateRoute from "../Auth/PrivateRoute";
import Dashboards from "../Dashboards";
import Needs from "../Needs";
import Materials from "../Materials";
import Agencies from "../Agencies";
import Initiatives from "../Initiatives";
import HumanResources from "../HumanResources";
import "./styles.css";

/* constants */
const { Header, Content } = Layout;
const breadcrumbNameMap = {
  "/app": {
    name: "Home",
    title: "Tukutane Menu",
  },
  "/app/needs": {
    name: "Needs",
    title: "List of all needs",
  },
  "/app/materials": {
    name: "Materials",
    title: "List of all available materials",
  },
  "/app/humanResources": {
    name: "Human Resources",
    title: "List of all human resources",
  },

  "/app/initiatives": {
    name: "Initiatives",
    title: "List of all Initiatives",
  },
  "/app/agencies": {
    name: "Agencies",
    title: "List of all agencies",
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
          <Row type="flex"  justify="start">
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
          <PrivateRoute path={`${baseUrl}/needs`} component={Needs} />
          <PrivateRoute path={`${baseUrl}/materials`} component={Materials} />
          <PrivateRoute path={`${baseUrl}/agencies`} component={Agencies} />
          <PrivateRoute
            path={`${baseUrl}/initiatives`}
            component={Initiatives}
          />
          <PrivateRoute
            exact
            path={`${baseUrl}/humanResources`}
            component={HumanResources}
          />

          {/* Dashboard routes */}
          <PrivateRoute
            exact
            path={`${baseUrl}/dashboards`}
            component={Dashboards}
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
