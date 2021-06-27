import React, { useEffect } from "react";
import { Layout, Spin, Tabs } from 'antd';
import { connect } from "react-redux";
import { projectOperation, projectSelectors } from "../../../../redux/modules/projects";
import { mapActions, mapSelectors } from "../../../../redux/modules/map";
import OverviewDetails from "./components/OverviewDetails";
import * as appPermissions from '../../../../Util/permissions';
import FieldNotes from "./components/FieldNotes";
import FieldImages from "./components/FieldImages";
import { authSelectors } from "../../../../redux/modules/auth";
import { ticketActions, ticketSelectors } from "../../../../redux/modules/Tickets";

import "./styles.css";

const { Content } = Layout;
const { TabPane } = Tabs;

function SubProject({ getSubProject, getSubProjectTicket, match: { params }, sub_project, loading, mapLoading, permissions, subProjectTickets }) {

  useEffect(() => {
    getSubProject(params.id);
    getSubProjectTicket(params.id)
  }, []);

  return sub_project ? (
    <Layout className="sub-project-layout">
      <Spin spinning={loading} tip="Loading..." >
        <Content className="contents">
          <h3>{sub_project?.name}</h3>
          <Layout className="sub-project-inner-layout" >
            <Content className="sub-project-contents">
              <div className="card-container">
                <Tabs type="card">
                  <TabPane tab="Sub-Project Overview" key="1">
                    <div className="container description" >
                      <h4 className="text-blue">Sub Project Development Objective</h4>
                      <p>{sub_project ? sub_project?.description : 'N/A'}</p>
                    </div>
                    <OverviewDetails sub_project={sub_project} mapLoading={mapLoading} subProjectTickets={subProjectTickets} />
                  </TabPane>
                  <TabPane tab="Field Notes" key="2">
                    <FieldNotes subProject={sub_project} getSubProject={getSubProject} permissions={permissions} permission={appPermissions.CAN_CREATE_SURVEY} />
                  </TabPane>
                  <TabPane tab="Field Images" key="3">
                    <FieldImages subProject={sub_project} getSubProject={getSubProject} permissions={permissions} permission={appPermissions.CAN_CREATE_SURVEY} />
                  </TabPane>
                  <TabPane tab="Construction and E & S Reporting" key="4" className="container">
                    <h4> Construction and E & S Reporting is under development,Coming Soon!</h4>
                  </TabPane>
                </Tabs>
              </div>
            </Content>
          </Layout>
        </Content>
      </Spin>
    </Layout>
  ) : '';
}
const mapStateToProps = (state) => {
  return {
    sub_project: projectSelectors.getSubProjectSelector(state),
    loading: projectSelectors.getSubProjectLoadingSelector(state),
    mapLoading: mapSelectors.getMapLoadingSelector(state),
    permissions: authSelectors.authUserPermissionsSelector(state),
    subProjectTickets: ticketSelectors.getTicketBySubProjectSelector(state),

  };
};

const mapDispatchToProps = {
  getSubProject: projectOperation.getSubProjectStart,
  getWfsLayerData: mapActions.getWfsLayerDataStart,
  getSubProjectTicket: ticketActions.getTicketBySubProjectStart
};

export default connect(mapStateToProps, mapDispatchToProps)(SubProject);


