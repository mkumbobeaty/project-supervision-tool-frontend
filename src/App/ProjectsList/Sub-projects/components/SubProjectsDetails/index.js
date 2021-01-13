import React, { Component } from "react";
import { Col, Layout, Row,Spin } from 'antd';
import SectorChat from "./Charts";
import DetailsSection from "./DetailsSection";
import ProjectSubProjects from "./SubProjectSection";
import SidebarSection from "./SideBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { projectOperation, projectSelectors } from "../../../duck";

import "./styles.css";

const { Content, Sider } = Layout;

class  SubProject extends Component {

  componentDidMount(){
    const { getSubProject, match: { params }
  } = this.props;
  getSubProject(params.id)
  }

  render() {
    const {sub_project, loading} = this.props;
  return (
    <Layout className="project-layout">
    <Spin spinning={loading} tip="Loading..." >
        <Content style={{ padding: '0 50px' }}>
        <h3>{sub_project?.name}</h3>
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
            <SidebarSection sub_project={sub_project} />
          </Sider>
          <Content className="project_contents">
            <Row>
              <Col span={8}>
                <SectorChat sub_project={sub_project}/>
              </Col>
              <Col span={15} offset={1}>
                < DetailsSection sub_project={sub_project}/>
              </Col>
            </Row>
            <ProjectSubProjects sub_project={sub_project}/>
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
    sub_project:projectSelectors.getSubProjectSelector(state),
    loading:projectSelectors.getSubProjectLoadingSelector(state)
  };
};

const mapDispatchToProps = {
getSubProject:projectOperation.getSubProjectStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubProject);


