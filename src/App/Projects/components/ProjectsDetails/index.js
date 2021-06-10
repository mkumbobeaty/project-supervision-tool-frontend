import React, { useEffect, useState } from "react";
import { Col, Layout, Row, Spin, Tabs } from 'antd';
import KeyDetailSection from "./components/KeyDetails";
import { connect } from "react-redux";
import { projectOperation, projectSelectors } from "../../../../redux/modules/projects";
import BaseMap from "../../../Map/components/BaseMap";
import { mapSelectors } from "../../../../redux/modules/map";
import { isoDateToHumanReadableDate, moneyFormat } from "../../../../Util";
import DetailsSection from "./components/ComponentSubComponent";
import ProjectPoints from "../../../Map/components/ProjectPoints";
import ProgressBar from "../../../components/Progress";
import * as turf from '@turf/turf';
import MapIcon from '../../../../assets/icons/map.svg'
import { mapSubProjectActions } from "../../../../redux/modules/map/subProjects";
import ViewOnMap from "../../../components/ViewOnMap";
import SubProjectDashboard from "./components/SubProjectsDashboard";
import "./styles.css";

const { Content } = Layout;
const { TabPane } = Tabs;

const firstSpan = { xxl: 12, xl: 12, lg: 12, md: 12, sm: 24, xs: 24 };
const secondSpan = { xxl: 11, xl: 11, lg: 11, md: 11, sm: 24, xs: 24 };

const Project = ({ project, loading, mapLoading, getProject, match: { params } }) => {

  const [viewOnMap, setViewOnMap] = useState(false);

  useEffect(() => {
    getProject(params.id)
  }, [])

  const handleShowModel = () => {
    setViewOnMap(true)
  }
  
  const handleOnCancel = () => {
  setViewOnMap(false)
  }


  const getCommitmentAmount = (data) => {
    const { amount, currency } = data
    const { iso } = currency;
    const money = moneyFormat(amount);
    return `${iso} ${money}`;
  }
  const testData = [
    { bgcolor: "#0f6788", completed: 60, remain: 40 },
  ];

  const commitmentAmount = project?.commitment_amount ? getCommitmentAmount(project?.commitment_amount) : 'N/A';
  const totalProjectCost = project?.total_project_cost ? getCommitmentAmount(project.total_project_cost) : 'N/A';
  const approval_date = project?.approval_date ? isoDateToHumanReadableDate(project?.approval_date) : 'N/A';
  const closing_date = project?.closing_date ? isoDateToHumanReadableDate(project?.closing_date) : 'N/A'

  return (
    <Layout className="project-layout">
      <Spin spinning={loading} tip="Loading..." >
        <Content className="contents">
          <h3>{project?.name}</h3>

          <Layout className="project-inner-layout" >
            <Content className="project-contents">
              <div className="card-container">
                <Tabs type="card">
                  <TabPane tab="Project Overview" key="1">
                    <div className="container description" >
                      <h4 className="text-blue">Project Development Objective</h4>
                      <p>{project ? project?.description : 'N/A'}</p>
                    </div>
                    <div className="keyDetails ">
                      <h2 id="sider-title">Key Details</h2>
                      <KeyDetailSection project={project} commitmentAmount={commitmentAmount} totalProjectCost={totalProjectCost} />
                    </div>
                    <Row className="Progress-overview container" >
                      <Col {...firstSpan} className="sector_chat">

                        {testData.map((item, idx) => (
                          <section>
                            <div>
                              <h5 className="text-blue">Financial Progress</h5>

                              <ProgressBar
                                key={idx}
                                bgcolor={item.bgcolor}
                                completed={item.completed}
                                remain={item.remain}
                                start_value="0%"
                                end_value={commitmentAmount}
                                progress_final_title="Disbursment gap"
                                progress_initial_title="Total Disbursed"
                                progress__initial_value={totalProjectCost}
                                progress_final_value={`${item.remain}%`}
                              />
                            </div>
                            <div>
                              <h5 className="text-blue">Financial Progress</h5>
                              <ProgressBar
                                key={idx}
                                bgcolor={item.bgcolor}
                                completed={item.completed}
                                remain={item.remain}
                                title="Elapsed Time"
                                progress_final_title="Closing date"
                                progress_initial_title="Approval Date"
                                progress__initial_value={approval_date}
                                progress_final_value={closing_date}
                              />
                            </div>
                          </section>

                        ))}


                      </Col>
                      <Col {...secondSpan} offset={1} >
                        <div className="flex-constant">
                          <h5 className="text-blue">Project Location </h5>
                          <span className="text-blue" onClick={handleShowModel}>
                            <img
                              src={MapIcon}
                              alt='Map'
                              width={70}
                              height={60}
                            />
                              View on map
                          </span>

                        </div>
                        <div className="project-map">
                          {
                            project?.regions.length > 0 ? project?.regions.map((region) => {
                              const polygon = JSON.parse(region.geom);
                              const { geometry } = turf.pointOnFeature(polygon);
                              return (
                                <Spin spinning={mapLoading} tip="Loading data...">
                                  <BaseMap zoomControl={true} position={[geometry.coordinates[1], geometry.coordinates[0]]}>
                                    {project ? <ProjectPoints projects={[project]} getProject={getProject} loading={false} project={project} /> : ''}
                                  </BaseMap>
                                </Spin>
                              )
                            }) : 'No Locatios on map'

                          }
                        </div>


                      </Col>
                      <DetailsSection project={project} />
                    </Row>
                  </TabPane>
                  <TabPane tab="Sub-Projects Dashboard" key="2" className="container">
                    <SubProjectDashboard />                   
                  </TabPane>
                  <TabPane tab="Agreed Actions" key="3" className="container" >
                    <h4> Comming Soon</h4>
                  </TabPane>
                  <TabPane tab="Monitoring and Evaluation" key="4" className="container" >
                    <h4> Comming Soon</h4>
                  </TabPane>
                </Tabs>
              </div>
            </Content>
          </Layout>
        </Content>
      </Spin>
      <ViewOnMap data={[project]} showMApModal={viewOnMap} handleOnCancel={handleOnCancel} />

    </Layout>
  )

}
const mapStateToProps = (state) => {
  return {
    project: projectSelectors.getProjectSelector(state),
    projects: projectSelectors.getProjectsSelector(state),
    loading: projectSelectors.getProjectLoadingSelector(state),
    mapLoading: mapSelectors.getMapLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  getProject: projectOperation.getProjectStart,
  getSubProjectsByProjectId: mapSubProjectActions.getSubProjectByProjectId,

};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
