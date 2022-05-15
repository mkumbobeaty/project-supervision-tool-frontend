import React from "react";

import { Layout, Menu, Breadcrumb } from "antd";

import { Link, Switch } from "react-router-dom";
import PrivateRoute from "../Auth/PrivateRoute";
import ProjectsList from "../Projects/components/ProjectsList";
import MapDashboard from "../Map";
import Dashboards from "../Dashboards";
import Contracts from "../Contracts";
import ProcuringEntitiesList from "../ProcuringEntities/componets/ProcuringEntitiesList";
import PackagesList from "../Packages/componets/PackagesList";
import SubProjectsList from "../Sub-projects/components/SubProjectsList";

import "./styles.css";
import SafeGuard from "../Csc/safeguad";
import Reports from "../Csc/Reports";

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
            <Link to={`${baseUrl}/procuring_entity`}>Overview</Link>
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
            <PrivateRoute
              path={`${baseUrl}/procuring_entity`}
              component={({ match }) => <ProcuringEntitiesList match={match} />}
            />
            <PrivateRoute
              path={`${baseUrl}/safeguard`}
              component={({ match }) => <SafeGuard />}
            />
            <PrivateRoute
              path={`${baseUrl}/packages`}
              component={({ match }) => <PackagesList match={match} />}
            />
            <PrivateRoute
              path={`${baseUrl}/reports`}
              component={({ match }) => <Reports />}
            />
            <PrivateRoute
              path={`${baseUrl}/sub-projects`}
              component={({ match }) => <SubProjectsList match={match} />}
            />

            <PrivateRoute path={`${baseUrl}/map`} component={MapDashboard} />

            <PrivateRoute
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
