import React, { useEffect } from "react";
import { Layout, Spin, Tabs } from 'antd';
import OverviewDetails from "./components/OverviewDetails";
import { connect } from "react-redux";
import { projectOperation, projectSelectors } from "../../../../redux/modules/projects";
import { mapSelectors } from "../../../../redux/modules/map";
import { isoDateToHumanReadableDate, moneyFormat } from "../../../../Util";
import SubProjectDashboard from "./components/SubProjectsDashboard";

import "./styles.css";

const { Content } = Layout;
const { TabPane } = Tabs;


const Project = ({ project, loading, getProject, match: { params } }) => {

  useEffect(() => {
    getProject(params.id)
  }, [])

  const getCommitmentAmount = (data) => {
    const { amount, currency } = data
    const { iso } = currency;
    const money = moneyFormat(amount);
    return `${iso} ${money}`;
  }

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
                    <OverviewDetails
                      project={project}
                      commitmentAmount={commitmentAmount}
                      totalProjectCost={totalProjectCost}
                      approval_date={approval_date}
                      closing_date={closing_date}
                    />
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
    </Layout>
  )

}
const mapStateToProps = (state) => {
  return {
    project: projectSelectors.getProjectSelector(state),
    projects: projectSelectors.getProjectsSelector(state),
    loading: projectSelectors.getProjectLoadingSelector(state),

  };
};

const mapDispatchToProps = {
  getProject: projectOperation.getProjectStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
