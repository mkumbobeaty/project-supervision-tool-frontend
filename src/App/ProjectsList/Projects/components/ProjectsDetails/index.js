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
import ProjectsProgress from "./Progress";
import { isoDateToHumanReadableDate, moneyFormat } from "../../../../../Util";
import "./styles.css";

const { Content } = Layout;


class Project extends Component {

  componentDidMount() {
    const { getProject, match: { params }
    } = this.props;
    getProject(params.id)
  }


  getCommitmentAmount = (data) => {
    const { amount, currency } = data
    const { iso } = currency;
    const money = moneyFormat(amount);
    return `${iso} ${money}`;
  }
  render() {
    const { project, loading, mapLoading } = this.props;

    const commitmentAmount = project?.details?.commitment_amount ? this.getCommitmentAmount(project?.details?.commitment_amount) : 'N/A';
    const totalProjectCost = project?.details.total_project_cost ? this.getCommitmentAmount(project.details.total_project_cost) : 'N/A';
    const approval_date = project?.details ?  isoDateToHumanReadableDate(project?.details?.approval_date) : 'N/A';
    const closing_date = project?.details ?  isoDateToHumanReadableDate(project?.details?.closing_date) : 'N/A'

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
                <KeyDetailSection project={project} commitmentAmount={commitmentAmount} totalProjectCost={totalProjectCost} />
              </div>
              <Content className="project_contents container">
                <Row>
                  <Col span={12} className="sector_chat">
                    <ProjectsProgress
                      title="Financial Progress"
                      percentage={75} 
                      trailColor="#888b8d"
                      start_value="0%"
                      end_value={commitmentAmount}
                      progress_final_title="Disbursment gap"
                      progress_initial_title="Total Disbursed"
                      progress__initial_value={totalProjectCost}
                      progress_final_value="36%"
                    />
                    <ProjectsProgress 
                    title="Elapsed Time"
                     percentage={45}
                      trailColor="#888b8d"
                      progress_final_title="Closing date"
                      progress_initial_title="Approval Date"
                      progress__initial_value={approval_date}
                      progress_final_value={closing_date}
                       />
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