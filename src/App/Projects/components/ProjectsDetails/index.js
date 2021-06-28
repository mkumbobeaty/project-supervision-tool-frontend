import React, { useEffect } from "react";
import {Layout, Spin, Table, Tabs} from 'antd';
import OverviewDetails from "./components/OverviewDetails";
import { connect } from "react-redux";
import { projectActions, projectSelectors } from "../../../../redux/modules/projects";
import { isoDateToHumanReadableDate, moneyFormat } from "../../../../Util";
import "./styles.css";
import { mapSubProjectSelectors } from "../../../../redux/modules/map/subProjects";
import { ticketActions, ticketSelectors } from "../../../../redux/modules/Tickets";
import ProjectHome from "../../../navigation/ProjectHome";

const { Content } = Layout;
const { TabPane } = Tabs;


const Project = ({ project, loading, getProject, subProjects, getTicketByProject, tickets, match }) => {

  useEffect(() => {
    getProject(match.params.id);
    getTicketByProject(match.params.id);

  }, [])

  console.log(tickets)

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
                    subProjects={subProjects}
                />
                <section className="project_components">
                  <h4 style={{ textAlign: 'center', fontSize: '1.5em', margin: 0}}>Project Menu</h4>
                  <ProjectHome match={match} />
                </section>

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
    subProjects: mapSubProjectSelectors.getSubProjectsSelector(state),
    tickets: ticketSelectors.getTicketByProject(state),
  };
};

const mapDispatchToProps = {
  getProject: projectActions.getProjectStart,
  getTicketByProject: ticketActions.getTicketByProjectStart

};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
