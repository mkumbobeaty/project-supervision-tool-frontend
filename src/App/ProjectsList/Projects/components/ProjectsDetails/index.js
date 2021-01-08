import React from "react";
import { Col, Layout, Menu, Row,  } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./styles.css";
import SectorChat from "./Charts";

const { SubMenu } = Menu;
const {  Content, Sider } = Layout;

const Project = () => {
    return (
        <Layout className="project-layout">
        <Content style={{ padding: '0 50px' }}>
          <h3>Title comes here</h3>
          <Layout className="project-inner_layout" >
            <Sider className="project-sider" width={350}>
              <h4>Key Details</h4>
            </Sider>
            <Content className="project_contents">
              <Row>
                <Col span={8}>
                <SectorChat />
                </Col>
                <Col span={12} offset={2}>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Content>
      </Layout>
    )
}


export default Project;
