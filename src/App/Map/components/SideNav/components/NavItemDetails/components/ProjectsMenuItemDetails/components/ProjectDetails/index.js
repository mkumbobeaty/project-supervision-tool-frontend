import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from "antd";
import {projectActions, projectSelectors} from '../../../../../../../../../Projects/duck'
import {LeftOutlined} from "@ant-design/icons";
import {isoDateToHumanReadableDate, moneyFormat} from "../../../../../../../../../../Util";
import SummarySection from "../../../SummarySection";
import './styles.css';
import {mapActions, mapSelectors} from "../../../../../../../../duck";
import {bindActionCreators} from "redux";
import PredefinedFilter from "../PredefinedFilter";

function BackLink({goBack}) {

    return (
        <div className="back-button" onClick={goBack}>
            <a> <LeftOutlined style={{fontSize: 10}}/> <span>Back</span></a>
        </div>

    );

}

function ProjectDetails({
                            project,
                            regionId,
                            getProjectsByRegion,
                            showProjectsOverview,
                            clearProject,
                            showProjectDetails,
                            showSubProjectDetails,
                        }) {

    const items = project?.sub_projects.map(({name, id}) => ({title:name, value: '', id}))

    const handleGoBack = () => {
        getProjectsByRegion(regionId);
        showProjectsOverview(true);
        showProjectDetails(false);
        clearProject();
    }

    const  handleOnclickSubProject = () => {
        showSubProjectDetails(true);
        showProjectDetails(false);
    }

    return project ? (
        <div className="ProjectInfo">
            <section className="top-section">
                <div className='project-title'>
                    <div>{project.name}</div>
                </div>
                <BackLink goBack={handleGoBack}/>
            </section>
            <hr/>
            <section className="sector">
                PROJECT ID :  {  project.id }
            </section>
            <hr/>
            <section>{project.description}</section>
            <section className="project-highlights">
                <article>
                    <div>
                        <span title="TOTAL PROJECT COST">TOTAL PROJECT COST</span><br/>
                        <b>{project?.details?.total_project_cost?.currency.iso} {moneyFormat(project?.details?.total_project_cost?.amount)}</b>
                    </div>
                    <div>
                        <span title="TOTAL COMMITMENT AMOUNT">TOTAL COMMITMENT AMOUNT </span><br/>
                        <b> {project?.details?.commitment_amount?.currency.iso} {moneyFormat(project?.details?.commitment_amount?.amount)}</b>
                    </div>
                </article>
                <article>
                    <div>
                        <span>APPROVAL DATE</span><br/>
                        <b>{isoDateToHumanReadableDate(project?.details?.approval_date)}</b>
                    </div>
                    <div>
                        <span>CLOSING DATE</span><br/>
                        <b>{isoDateToHumanReadableDate(project?.details?.closing_date)}</b>
                    </div>
                </article>
                <article>
                    <div>
                        <span>PROJECT STATUS</span><br/>
                        <b>Active</b>
                    </div>
                    <div>
                        <span>PROJECT LOCATIONS</span><br/>
                        <b>{project?.locations.length}</b>
                    </div>
                </article>
            </section>
            <section>
                <PredefinedFilter
                    sectionName="Sub Projects"
                    data={items}
                    filterTitle='Sub projects'
                    handleOnclickFilterItem={handleOnclickSubProject}
                />
            </section>
            <section className="link-actions">
                <Button><a>VIEW FULL PROJECT</a></Button>
            </section>
        </div>
    ) : '';
}

const mapStateToProps = state => ({
    project: projectSelectors.getProjectSelector(state),
    regionId: mapSelectors.selectedRegionIdSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    getProjectsByRegion: bindActionCreators(mapActions.getProjectsByRegionStart, dispatch),
    showProjectsOverview: bindActionCreators(mapActions.showProjectsOverview, dispatch),
    clearProject: bindActionCreators(projectActions.clearProject, dispatch),
    showProjectDetails: bindActionCreators(mapActions.showProjectDetails, dispatch),
    showSubProjectDetails: bindActionCreators(mapActions.showSubProjectDetails, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);

ProjectDetails.propTypes = {
    project: PropTypes.object.isRequired,
    regionId: PropTypes.string.isRequired,
    getProjectsByRegion: PropTypes.func.isRequired,
    showProjectsOverview: PropTypes.func.isRequired,
    clearProject: PropTypes.func.isRequired,
    showProjectDetails: PropTypes.func.isRequired,
}
