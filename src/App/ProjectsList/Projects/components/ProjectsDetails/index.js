import React, { Component } from "react";
import { Col, Layout, Row, Spin } from 'antd';
import SectorChat from "./Charts";
import KeyDetailSection from "./KeyDetails";
import { connect } from "react-redux";
import { projectOperation, projectSelectors } from "../../../../../redux/modules/projects";
import BaseMap from "../../../../Map/BaseMap";
import FullscreenControl from 'react-leaflet-fullscreen';
import { mapSelectors } from "../../../../../redux/modules/map";
import ProjectLocations from "../../../../Map/components/ProjectLocations";
import "./styles.css";

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
            <div className="container description" >
              <h4>Project Development Objective</h4>
              <p>{project ? project?.description : 'N/A'}</p>
            </div>
            <Layout className="project-inner_layout" >
              <div className="keyDetails " width={280}>
                <h2 id="sider-title">Key Details</h2>
                <KeyDetailSection project={project} />
              </div>
              <Content className="project_contents">
                <Row>
                  <Col span={12} className="sector_chat">
                    <SectorChat project={project} />
                  </Col>
                  <Col span={11} className="project_map" offset={1} >
                    <Spin spinning={mapLoading} tip="Loading data...">
                      <BaseMap ref={this.map} zoomControl={true}>
                        <FullscreenControl position="topright" />
                        <ProjectLocations project={project} />
                      </BaseMap>
                    </Spin>
                  </Col>
                </Row>
                {/* <ProjectSubProjects project={project} /> */}
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