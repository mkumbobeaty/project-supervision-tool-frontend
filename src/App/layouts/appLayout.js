import React, { useState } from "react";

import { Layout, Menu, Breadcrumb, Input, Row, Col } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import "./styles.css";
import UserMenu from "../navigation/UserMenu";
import { Link, Switch } from "react-router-dom";
import PrivateRoute from "../Auth/PrivateRoute";
import ProjectsList from "../Projects/components/ProjectsList";
import MapDashboard from "../Map";
import Dashboards from "../Dashboards";
import Contracts from "../Contracts";

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const AppLayout = ({ location, match: { url: baseUrl } }) => {
  const [collapsed, setCollapse] = useState(false);

  console.log(baseUrl);

  const toggle = () => {
    setCollapse({
      collapsed: !collapsed,
    });
  };

  return (
    <Layout>
      <Header className="header">
        <Row type="flex" align="middle">
          <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4} justify="start">
            <Row type="flex" justify="start">
              <div className="header-logo">
                <div>
                  {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: "trigger",
                      onClick: toggle,
                    }
                  )}
                </div>
                <div className="logo">ReProST</div>
              </div>{" "}
            </Row>
          </Col>

          <Col xxl={14} xl={14} lg={14} md={14} sm={24} xs={24}>
            <Search allowClear className="TopbarSearch" size="large" />
          </Col>
          <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2} offset={4}>
            <Row type="flex" justify="end">
              <Col span={12}>
                <UserMenu />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider width={300} className="sider-layout">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
            theme="dark"
          >
            <Menu.Item>
              <span className="CustomizedIcon" />
              <Link to={`${baseUrl}/projects`}>All Projects</Link>
            </Menu.Item>
            <Menu.Item>
              <span className="CustomizedIcon" />
              <Link to={`${baseUrl}/map`}>Map</Link>
            </Menu.Item>
            <Menu.Item>
              <span className="CustomizedIcon" />
              <Link to={`${baseUrl}/dashboards`}>Dashboards</Link>
            </Menu.Item>
            <Menu.Item>
              <span className="CustomizedIcon" />
              <Link to={`${baseUrl}/contractors`}>Contractors</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }} className="BaseLayout">
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
            }}
            className="BaseLayoutContent"
          >
            <Switch>
              <PrivateRoute
                path={`${baseUrl}/projects`}
                component={ProjectsList}
              />
              <PrivateRoute path={`${baseUrl}/map`} component={MapDashboard} />
              <PrivateRoute
                path={`${baseUrl}/dashboards`}
                component={(props) => <Dashboards />}
              />
              <PrivateRoute
                path={`${baseUrl}/contractors`}
                component={(props) => <Contracts />}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
