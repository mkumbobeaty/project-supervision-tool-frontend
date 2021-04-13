import React, { Component } from "react";
import { Col, Layout, Row, Spin, Tabs } from 'antd';
import { connect } from "react-redux";
import { projectOperation, projectSelectors } from "../../../../redux/modules/projects";
import BaseMap from "../../../Map/BaseMap";
import { mapActions, mapSelectors } from "../../../../redux/modules/map";
import FullscreenControl from 'react-leaflet-fullscreen';
import "./styles.css";
import KeyDetailSection from "./KeyDetails";
import ProjectsProgress from "../../../Projects/components/ProjectsDetails/Progress";
import { isoDateToHumanReadableDate } from "../../../../Util";
import ReportOverview from "./ReportOverview";
import { ImageGallary } from "./SubProjectGallary";
import SurveyResults from "../../../components/SurveyResults";
import SubProjectPoints from "../../../Map/components/SubProjectPoints";

const firstSpan = { xxl: 12, xl: 12, lg: 12, md: 12, sm: 24, xs: 24 };
const secondSpan = { xxl: 11, xl: 11, lg: 11, md: 11, sm: 24, xs: 24 };

const { Content } = Layout;
const { TabPane } = Tabs;

class SubProject extends Component {

  state = {
    showImage: false,
    selectedImage: {},
    showColumn: false,
    showMilestone: false,
    showHumanResource: false,
    showEquipment: false,
    showContract: false

  }
  componentDidMount() {
    const { getSubProject, match: { params }
    } = this.props;
    getSubProject(params.id)
  }

  handleViewImage = (image) => {
    this.setState({ showImage: true, selectedImage: image })
  }

  handleViewClose = () => {
    this.setState({ showImage: false, selectedImage: {} })
  }

  handleClick = () => {
    this.setState({ showMilestone: true })
  }

  render() {
    const { sub_project, loading, mapLoading } = this.props;
    const approval_date = sub_project?.details ? isoDateToHumanReadableDate(sub_project?.details?.approval_date) : 'N/A';
    const closing_date = sub_project?.details ? isoDateToHumanReadableDate(sub_project?.details?.closing_date) : 'N/A'
    const survey_id = sub_project?.surveys[0].survey_id;

    return (
      <Layout className="sub-project-layout">
        <Spin spinning={loading} tip="Loading..." >
          <Content className="contents">
            <h3>{sub_project?.name}</h3>
            <Layout className="sub-project-inner-layout" >
              <Content className="sub-project-contents">
                <div className="card-container">
                  <Tabs type="card">
                    <TabPane tab="Sub-Project Overview" key="1">
                      <div className="keyDetails ">
                        <h2 id="sider-title">Key Details</h2>
                        <KeyDetailSection sub_project={sub_project} />
                      </div>
                      <Row className="Progress-overview container" >
                        <Col {...firstSpan} >
                          <ProjectsProgress
                            title="Financial Progress"
                            percentage={75}
                            trailColor="#888b8d"
                            start_value="0%"
                            // end_value={commitmentAmount}
                            progress_final_title="Disbursment gap"
                            progress_initial_title="Total Disbursed"
                            // progress__initial_value={totalSubProjectCost}
                            progress_final_value="36%"
                          />
                          <ProjectsProgress
                            title="Physical Progress"
                            percentage={45}
                            trailColor="#888b8d"
                            progress_final_title="Closing date"
                            progress_initial_title="Approval Date"
                            progress__initial_value={approval_date}
                            progress_final_value={closing_date}
                          />
                        </Col>
                        <Col {...secondSpan} offset={1} >
                          <Spin spinning={mapLoading} tip="Loading data...">
                            <h5>Sub Project Locations</h5>
                            <div className="project_map">
                              <BaseMap ref={this.map} zoomControl={true}  >
                                <FullscreenControl position="topright" />
                                {sub_project ? <SubProjectPoints subProjects={[sub_project]} /> : ''}
                              </BaseMap>
                            </div>

                          </Spin>
                        </Col>
                        <Col {...firstSpan} className="reportOverview">
                          <ReportOverview />
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tab="Field Notes" key="2">
                      {survey_id ? <SurveyResults survey_id={survey_id} /> : ''}
                    </TabPane>
                    <TabPane tab="Construction and E & S Reporting" key="3" className="container">
                      <h4> Comming Soon</h4>
                    </TabPane>
                    <TabPane tab="Photo Gallary" key="4">
                      <ImageGallary subProject={sub_project} />
                    </TabPane>
                  </Tabs>
                </div>
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
    sub_project: projectSelectors.getSubProjectSelector(state),
    loading: projectSelectors.getSubProjectLoadingSelector(state),
    mapLoading: mapSelectors.getMapLoadingSelector(state),

  };
};

const mapDispatchToProps = {
  getSubProject: projectOperation.getSubProjectStart,
  getWfsLayerData: mapActions.getWfsLayerDataStart,

};

export default connect(mapStateToProps, mapDispatchToProps)(SubProject);


