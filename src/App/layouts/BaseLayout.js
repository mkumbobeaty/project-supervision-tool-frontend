import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb, Col, Layout, Row } from "antd";
import { Link, Switch, Route } from "react-router-dom";
import UserMenu from "../navigation/UserMenu";
import PageNotFound from "../PageNotFound";
import Home from "../navigation/Home";
import PrivateRoute from "../Auth/PrivateRoute";
import Dashboards from "../Dashboards";
import ResourceNavMenu from "../navigation/Resources";
import Donations from "../Resources/Donations";
import FinancialResources from "../Resources/FinancialResources";
import Initiatives from "../Resources/Initiatives";
import Initiative from '../Resources/Initiatives/Initiative'
import KnowledgeResources from "../Resources/KnowledgeResources";
import HumanResources from "../Resources/HumanResources";
import HumanResource from  "../Resources/HumanResources/HumanResource";
import ProductionCapacity from "../Resources/ProductionCapacity";
import NeedsNavMenu from "../navigation/Needs";
import NeedsByGovernment from "../Needs/NeedByGovernment";
import NeedsCovid from "../Needs/NeedsCovid";
import NeedsAssessment from "../Needs/NeedsAssessments";
import "./styles.css";

/* constants */
const { Header, Content } = Layout;
const breadcrumbNameMap = {
  "/app": {
    name: "Home",
    title: "Pamoja Menu",
  },
  /* needs routes */
  "/app/needs": {
    name: "Needs",
    title: "Needs module",
  },
  "/app/needs/needsassessment": {
    name: "Needs assessment report",
    title: "List of all assessment report",
  },
  "/app/needs/needscovid": {
    name: "Needs of covid response partner",
    title: "List of all need covid response partner",
  },
  "/app/needs/needsbygovernment": {
    name: "Needs identified by government",
    title: "List af all needs identified by government",
  },
  /* resources routes */
  "/app/resources": {
    name: "Resources",
    title: "Resources Module",
  },
  "/app/resources/initiatives": {
    name: "Initiatives",
    title: "List of all initiatives",
  },
  "/app/resources/initiatives/initiative": {
    name: "Initiative",
    title: "detais of each initiative",
  },
  "/app/resources/donations": {
    name: "In kind donations",
    title: "List of all In kind donations",
  },
  "/app/resources/knowledgeresources": {
    name: "Knowledge Resources",
    title: "List of all Knowledge Resources",
  },
  "/app/resources/financialresources": {
    name: "Financial Resources",
    title: "List of all Knowledge Resources",
  },
  "/app/resources/humanresources": {
    name: "Human Resources",
    title: "List of all Human Resources",
  },
  "/app/resources/humanresources/:type": {
    name: "Human Resource",
    title: "Detail of Human Resource",
  },
  "/app/resources/productioncapacity": {
    name: "Production Capacity",
    title: "List of all Production Capacity",
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
          {/* needs routes */}
          <Route path={`${baseUrl}/needs`} component={NeedsNavMenu} />
          <Route
            path={`${baseUrl}/needsbygovernment`}
            component={NeedsByGovernment}
          />
          <Route path={`${baseUrl}/needscovid`} component={NeedsCovid} />
          <Route
            path={`${baseUrl}/needsassessment`}
            component={NeedsAssessment}
          />
          {/* Resources routes */}
          <Route
            exact
            path={`${baseUrl}/resources`}
            component={ResourceNavMenu}
          />
          <Route exact path={`${baseUrl}/resources/donations`} component={Donations} />{" "}
          <Route
            exact
            path={`${baseUrl}/resources/initiatives`}
            component={Initiatives}
          />{" "}
          <Route
            exact
            path={`${baseUrl}/resources/initiatives/initiative`}
            component={Initiative}
          />{" "}
          <Route
            exact
            path={`${baseUrl}/resources/knowledgeresources`}
            component={KnowledgeResources}
          />{" "}
          <Route
            exact
            path={`${baseUrl}/resources/financialresources`}
            component={FinancialResources}
          />{" "}
          <Route
            exact
            path={`${baseUrl}/resources/humanresources`}
            component={HumanResources}
          />{" "}
          <Route
            exact
            path={`${baseUrl}/resources/productioncapacity`}
            component={ProductionCapacity}
          />
          <Route
            exact
            path={`${baseUrl}/resources/humanresources/:id`}
            render={({match}) => <HumanResource match={match}/>}
          />
          
          <PrivateRoute path={`${baseUrl}/map`} component={Map} />
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
