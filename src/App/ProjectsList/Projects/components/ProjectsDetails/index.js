import React, { Component } from "react";
import { Col, Layout, Row,Spin } from 'antd';
import SectorChat from "./Charts";
import DetailsSection from "./DetailsSection";
import ProjectSubProjects from "./SubProjectSection";
import SidebarSection from "./SideBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { projectOperation, projectSelectors } from "../../../duck";
import { LoadingOutlined } from '@ant-design/icons';

import "./styles.css";

const { Content, Sider } = Layout;

class  Project extends Component {

  componentDidMount(){
    const { getProject, match: { params }
  } = this.props;
    getProject(params.id)
  }

  render() {
    const {project, loading} = this.props;
  return (
    <Layout className="project-layout">
    <Spin spinning={loading} tip="Loading..." >
        <Content style={{ padding: '0 50px' }}>
        <h3>Title comes here</h3>
        <Layout className="project-inner_layout" >
          <Sider className="project-sider" width={350}>
            <div className="sidebar-header">
              <h2 id="sider-title">Key Details</h2>
              <Link
                to={{
                  pathname: '/app/map/',
                }}
              >View on map
              </Link>
            </div>
            <SidebarSection project={project} />
          </Sider>
          <Content className="project_contents">
            <Row>
              <Col span={8}>
                <SectorChat project={project}/>
              </Col>
              <Col span={15} offset={1}>
                < DetailsSection project={project}/>
              </Col>
            </Row>
            <ProjectSubProjects project={project}/>
          </Content>
        </Layout>
      </Content>
      </Spin>
    </Layout>
  )
}
}
const mapStateToProps = (state) => {
  return {
    project:projectSelectors.getProjectSelector(state),
    loading:projectSelectors.getProjectLoadingSelector(state)
  };
};

const mapDispatchToProps = {
  getProject:projectOperation.getProjectStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);


