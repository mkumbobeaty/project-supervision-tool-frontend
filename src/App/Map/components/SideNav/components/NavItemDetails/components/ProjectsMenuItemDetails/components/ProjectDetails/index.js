import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { mapProjectSelectors } from "../../../../../../../../../../redux/modules/map/projects";
import { mapSubProjectActions, mapSubProjectSelectors } from "../../../../../../../../../../redux/modules/map/subProjects";
import SubProjectTypesFilter from "../SubProjectTypesFilter";
import SubProjectStatusFilter from "../SubProjectStatusFilter";
import { projectActions, projectSelectors } from "../../../../../../../../../../redux/modules/projects";
import RegionsFilter from "../RegionsFilter";
import DistrictsFilter from "../DistrictsFilter";
import ContractorsFilter from "../ContractorsFilter";
import ProcuringEntityPackageFilter from "../ProcuringEntityFilter";
import CustomSearch from "../../../CustomSearch";
import TopSection from "../../../TopSection";
import { mapActions } from "../../../../../../../../../../redux/modules/map";
import BackLink from "../BackLink";
import { Collapse } from 'antd';
import './styles.css';
import ComponentSubComponentFilter from "../Component&SubComponentFilter ";
import SubProjectRegionsFilter from "../SubProjectRegionsFilter";

const { Panel } = Collapse;


function ProjectDetails({
    subProjectTypes,
    subProjectStatus,
    setSubProjectTypesFilter,
    getSubProjectTypes,
    getSubProjectStatus,
    setSubProjectStatusFilter,
    regions,
    getRegions,
    setSubProjectRegionsFilter,
    districts,
    getDistricts,
    setSubProjectDistrictsFilter,
    getContractors,
    contractors,
    setSubProjectContractorsFilter,
    procuringEntityPackage,
    setProcuringEntityFilter,
    getProcuringEntity,
    project,
    setComponentsSubComponentFilter,
    goBackToProjects
}) {

    useEffect(() => {
        getSubProjectTypes();
        getSubProjectStatus();
        getRegions();
        getContractors();
        getProcuringEntity();
    }, []);


    const handleGoBack = () => goBackToProjects(project?.project_id);

    return (
        <div className="ProjectInfo">
            <div style={{ display: 'flex' }}>
                <BackLink goBack={handleGoBack} />
                <TopSection title={project?.name} />
            </div>
            <hr />
            <CustomSearch placeholder='Search Sub projects' />
            <hr />
            <Collapse
                defaultActiveKey={['1']}
                expandIconPosition={'right'}
                bordered={false}
            >
                <Panel header="Subproject Types" key="1" >
                    <SubProjectTypesFilter subProjectTypes={subProjectTypes} setSubProjectTypesFilter={setSubProjectTypesFilter}
                    />
                </Panel>
                <Panel header="Subproject Status" key="2" >
                    <SubProjectStatusFilter subProjectStatus={subProjectStatus} setSubProjectStatusFilter={setSubProjectStatusFilter} />
                </Panel>
                <Panel header="Components & Sub-components" key="3" >
                    <ComponentSubComponentFilter project={project} setComponentsSubComponentFilter={setComponentsSubComponentFilter} />

                </Panel>
                <Panel header="Regions" key="4" >
                    <SubProjectRegionsFilter project={project} setProjectRegionsFilter={setSubProjectRegionsFilter}  getDistricts={getDistricts} districts={districts} />
                </Panel>
                <Panel header="Districts" key="5" >
                    <DistrictsFilter districts={districts} setSubProjectDistrictsFilter={setSubProjectDistrictsFilter} />
                </Panel>
                <Panel header="Procuring Entity Package" key="6" >
                    <ProcuringEntityPackageFilter procuringEntityPackage={procuringEntityPackage} setProcuringEntityFilter={setProcuringEntityFilter} />
                </Panel>
                <Panel header="Contractors" key="7" >
                    <ContractorsFilter contractors={contractors} setSubProjectContractorsFilter={setSubProjectContractorsFilter} />
                </Panel>
            </Collapse>
        </div>
    );
}

const mapStateToProps = state => ({
    project: mapProjectSelectors.getProjectSelector(state),
    subProjectTypes: mapSubProjectSelectors.getSubProjectTypesSelector(state),
    subProjectStatus: mapSubProjectSelectors.getSubProjectStatusSelector(state),
    regions: projectSelectors.getRegionsSelector(state),
    districts: projectSelectors.getDistrictsSelector(state),
    contractors: mapSubProjectSelectors.getContractorsSelector(state),
    procuringEntityPackage: mapSubProjectSelectors.getProcuringEntityPackageSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    getSubProject: bindActionCreators(mapSubProjectActions.getSubProjectStart, dispatch),
    getSubProjectTypes: bindActionCreators(mapSubProjectActions.getSubProjectTypesStart, dispatch),
    getSubProjectStatus: bindActionCreators(mapSubProjectActions.getSubProjectStatusStart, dispatch),
    getRegions: bindActionCreators(projectActions.getRegionsStart, dispatch),
    getDistricts: bindActionCreators(projectActions.getDistrictsStart, dispatch),
    getContractors: bindActionCreators(mapSubProjectActions.getContractorsStart, dispatch),
    getProcuringEntity: bindActionCreators(mapSubProjectActions.getProcuringEntityPackageStart, dispatch),
    getMapSubProjects: bindActionCreators(mapSubProjectActions.getSubProjectsStart, dispatch),
    getSubprojects: bindActionCreators(mapSubProjectActions.getSubProjectsStart, dispatch),
    setSubProjectTypesFilter: bindActionCreators(mapSubProjectActions.setSubProjectTypesFilter, dispatch),
    setSubProjectStatusFilter: bindActionCreators(mapSubProjectActions.setSubProjectStatusFilter, dispatch),
    setSubProjectRegionsFilter: bindActionCreators(mapSubProjectActions.setSubProjectRegionsFilter, dispatch),
    setSubProjectDistrictsFilter: bindActionCreators(mapSubProjectActions.setSubProjectDistrictFilter, dispatch),
    setSubProjectContractorsFilter: bindActionCreators(mapSubProjectActions.setSubProjectContractorFilter, dispatch),
    setProcuringEntityFilter: bindActionCreators(mapSubProjectActions.setSubProjectProcuringEntityFilter, dispatch),
    setComponentsSubComponentFilter: bindActionCreators(mapSubProjectActions.setSubProjectComponentFilter, dispatch),
    goBackToProjects: bindActionCreators(mapActions.backFromSubProjectsToProjects, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);

ProjectDetails.propTypes = {
    project: PropTypes.object,
    getSubProject: PropTypes.func.isRequired,
}

ProjectDetails.defaultPropTypes = {
    project: null
}
