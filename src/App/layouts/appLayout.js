import React, { useState } from "react";

import { Layout, Menu, Breadcrumb, Input, Row, Col } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

import "./styles.css";
import UserMenu from "../navigation/UserMenu";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

const AppLayout = () => {
  const [collapsed, setCollapse] = useState(false);

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
        </div>            </Row>
          </Col>

          <Col xxl={14} xl={14} lg={14} md={14} sm={24} xs={24} >
            <Search allowClear className="TopbarSearch"     size="large"/>
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
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            theme="dark"
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
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
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
