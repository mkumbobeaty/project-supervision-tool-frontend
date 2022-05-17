import React from "react";

import { Layout, Menu, Breadcrumb } from "antd";

import { Link, Route, Switch } from "react-router-dom";
import MapDashboard from "../Map";
import Contracts from "../Contracts";
import PackagesList from "../Packages/componets/PackagesList";
import SubProjectsList from "../Sub-projects/components/SubProjectsList";
import SafeGuard from "../Csc/components/safeguad";
import Reports from "../Csc/components/Reports";

import "./styles.css";
import Overview from "../Csc/components/overview";

const { Content, Sider } = Layout;

const CscLayout = ({ baseUrl }) => {
  return (
    <Layout>
      <Sider width={300} className="sider-layout">

        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0, paddingBlockStart: "2rem" }}
          theme="dark"
        >
                <h3 className="text-blue">Ilala</h3> 

          <Menu.Item>
            <span className="CustomizedIcon" />
            <Link to={`${baseUrl}/procuring_entity/overview`}>Overview</Link>
          </Menu.Item>
          <Menu.Item>
            <span className="CustomizedIcon" />
            <Link to={`${baseUrl}/safeguard`}>Safeguard Concern</Link>
          </Menu.Item>
          <Menu.Item>
            <span className="CustomizedIcon" />
            <Link to={`${baseUrl}/reports`}>Report</Link>
          </Menu.Item>
          <Menu.Item>
            <span className="CustomizedIcon" />
            <Link to={`${baseUrl}/packages`}>Package</Link>
          </Menu.Item>
          <Menu.Item>
            <span className="CustomizedIcon" />
            <Link to={`${baseUrl}/sub-projects`}>sub-project</Link>
          </Menu.Item>
          <Menu.Item>
            <span className="CustomizedIcon" />
            <Link to={`${baseUrl}/map`}>Map</Link>
          </Menu.Item>
          <Menu.Item>
            <span className="CustomizedIcon" />
            <Link to={`${baseUrl}/contractors`}>CSC Contractors</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }} className="BaseLayout">
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Project</Breadcrumb.Item>
          <Breadcrumb.Item>DMDP</Breadcrumb.Item>
          <Breadcrumb.Item>Procuring Entities</Breadcrumb.Item>
          <Breadcrumb.Item>Ilala</Breadcrumb.Item>

        </Breadcrumb>
        <Content
          style={{
            margin: 0,
          }}
          className="BaseLayoutContent"
        >
            <h3>Overview</h3>
          <Switch>
            <Route
              path={`${baseUrl}/procuring_entity/overview`}
              component={({ match }) => <Overview match={match} />}
            />
            <Route
              path={`${baseUrl}/safeguard`}
              component={({ match }) => <SafeGuard />}
            />
            <Route
              path={`${baseUrl}/packages`}
              component={({ match }) => <PackagesList match={match} />}
            />
            <Route
              path={`${baseUrl}/reports`}
              component={({ match }) => <Reports />}
            />
            <Route
              path={`${baseUrl}/sub-projects`}
              component={({ match }) => <SubProjectsList match={match} />}
            />

            <Route path={`${baseUrl}/map`} component={MapDashboard} />

            <Route
              path={`${baseUrl}/contractors`}
              component={(props) => <Contracts />}
            />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CscLayout;
