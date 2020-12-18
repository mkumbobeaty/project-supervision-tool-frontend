import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from "antd";
import {projectActions, projectSelectors} from '../../../../../../../../../Projects/duck'
import {isoDateToHumanReadableDate, moneyFormat} from "../../../../../../../../../../Util";
import {mapActions, mapSelectors} from "../../../../../../../../duck";
import {bindActionCreators} from "redux";
import PredefinedFilter from "../PredefinedFilter";
import BackLink from "../BackLink";
import './styles.css';
import CustomGridList from "../CustomGridList";


function ProjectDetails({
                            project,
                            regionId,
                            getProjectsByRegion,
                            showProjectsOverview,
                            clearProject,
                            showProjectDetails,
                            showSubProjectDetails,
                        }) {

    const items = project?.sub_projects.map(({name, id}) => ({title: name, value: '', id}))

    const handleGoBack = () => {
        getProjectsByRegion(regionId);
        showProjectsOverview(true);
        showProjectDetails(false);
        clearProject();
    }

    const handleOnclickSubProject = () => {
        showSubProjectDetails(true);
        showProjectDetails(false);
    }

    const getTotalCommitmentAmount = ({details}) => {
        const iso = details?.commitment_amount?.currency.iso
        const amount = moneyFormat(project?.details?.commitment_amount?.amount)
        return `${iso} ${amount}`;
    }

    const getTotalProjectCost = ({details}) => {
        const iso = details?.total_project_cost?.currency.iso
        const amount = moneyFormat(project?.details?.total_project_cost?.amount)
        return `${iso} ${amount}`;
    }

    const customGridLisData = [
        {title: "TOTAL PROJECT COST", value: getTotalProjectCost(project)},
        {title: "TOTAL COMMITMENT AMOUNT", value: getTotalCommitmentAmount(project)},
        {title: "APPROVAL DATE", value: isoDateToHumanReadableDate(project?.details?.approval_date)},
        {title: "CLOSING DATE", value: isoDateToHumanReadableDate(project?.details?.closing_date)},
        {title: "PROJECT STATUS", value: 'Active'},
        {title: "PROJECT LOCATIONS", value: project?.locations.length},
    ];

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
                PROJECT ID : {project.id}
            </section>
            <hr/>
            <section>{project.description}</section>
            <CustomGridList data={customGridLisData}/>
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
