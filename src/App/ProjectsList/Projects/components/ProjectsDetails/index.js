import React, { Component } from "react";
import { Col, Layout, Row, Spin } from 'antd';
import SectorChat from "./Charts";
import ProjectSubProjects from "./SubProjectSection";
import SidebarSection from "./SideBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { projectOperation, projectSelectors } from "../../../../../redux/modules/projects";
import BaseMap from "../../../../Map/BaseMap";
import "./styles.css";
import { mapSelectors } from "../../../../../redux/modules/map";

const { Content, Sider } = Layout;

class Project extends Component {

  componentDidMount() {
    const { getProject, match: { params }
    } = this.props;
    getProject(params.id)
  }

  render() {
    const { project, loading, mapLoading } = this.props;
    return (
      <Layout className="project-layout">
        <Spin spinning={loading} tip="Loading..." >
          <Content style={{ padding: '0 50px' }}>
            <h3>{project?.name}</h3>
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
                  <Col span={12}>

                  </Col>
                  <Col span={12} className="project_map"  >
                    <Spin spinning={mapLoading} tip="Loading data...">
                      <BaseMap ref={this.map} zoomControl={false}>
                        {/* <SubProjectLocations getWfsLayerData={getWfsLayerData} subProject={sub_project} /> */}
                      </BaseMap>
                    </Spin>
                  </Col>
                </Row>
                <ProjectSubProjects project={project} />
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
    project: projectSelectors.getProjectSelector(state),
    loading: projectSelectors.getProjectLoadingSelector(state),
    mapLoading: mapSelectors.getMapLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  getProject: projectOperation.getProjectStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);