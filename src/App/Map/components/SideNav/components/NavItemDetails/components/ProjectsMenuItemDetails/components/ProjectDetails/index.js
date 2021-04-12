import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import './styles.css';
import { mapProjectSelectors } from "../../../../../../../../../../redux/modules/map/projects";
import { mapSubProjectActions, mapSubProjectSelectors } from "../../../../../../../../../../redux/modules/map/subProjects";
import SubProjectTypesFilter from "../SuProjectTypesFilter";
import SubProjectStatusFilter from "../SuProjectStatusFilter";
import { projectActions, projectSelectors } from "../../../../../../../../../../redux/modules/projects";
import RegionsFilter from "../RegionsFilter";
import DistrictsFilter from "../DistrictsFilter";
import ContractorsFilter from "../ContractorsFilter";
import ProcuringEntityPackageFilter from "../ProcuringEntityFilter";

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
    getSubProjects,
}) {
    useEffect(() => {
        getSubProjectTypes();
        getSubProjectStatus();
        getRegions();
        getDistricts('TZ07');
        getContractors();
        getProcuringEntity();
        getSubProjects()
    }, []);


    return (
        <div className="ProjectInfo">
            <SubProjectTypesFilter subProjectTypes={subProjectTypes} setSubProjectTypesFilter={setSubProjectTypesFilter}
            />
            <SubProjectStatusFilter subProjectStatus={subProjectStatus} setSubProjectStatusFilter={setSubProjectStatusFilter} />
            <RegionsFilter regions={regions} setProjectRegionsFilter={setSubProjectRegionsFilter} />
            <DistrictsFilter districts={districts} setSubProjectDistrictsFilter={setSubProjectDistrictsFilter} />
            <ProcuringEntityPackageFilter procuringEntityPackage={procuringEntityPackage} setProcuringEntityFilter={setProcuringEntityFilter} />
            <ContractorsFilter contractors={contractors} setSubProjectContractorsFilter={setSubProjectContractorsFilter} />
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
    procuringEntityPackage: mapSubProjectSelectors.getProcuringEntityPackageSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    getSubProject: bindActionCreators(mapSubProjectActions.getSubProjectStart, dispatch),
    getSubProjectTypes: bindActionCreators(mapSubProjectActions.getSubProjectTypesStart, dispatch),
    getSubProjectStatus: bindActionCreators(mapSubProjectActions.getSubProjectStatusStart, dispatch),
    setSubProjectTypesFilter: bindActionCreators(mapSubProjectActions.setSubProjectTypesFilter, dispatch),
    setSubProjectStatusFilter: bindActionCreators(mapSubProjectActions.setSubProjectStatusFilter, dispatch),
    getRegions: bindActionCreators(projectActions.getRegionsStart, dispatch),
    setSubProjectRegionsFilter: bindActionCreators(mapSubProjectActions.setSubProjectRegionsFilter, dispatch),
    getDistricts: bindActionCreators(projectActions.getDistrictsStart, dispatch),
    setSubProjectDistrictsFilter: bindActionCreators(mapSubProjectActions.setSubProjectDistrictFilter, dispatch),
    setSubProjectContractorsFilter: bindActionCreators(mapSubProjectActions.setSubProjectContractorFilter, dispatch),
    getContractors: bindActionCreators(mapSubProjectActions.getContractorsStart, dispatch),
    setProcuringEntityFilter: bindActionCreators(mapSubProjectActions.setSubProjectProcuringEntityFilter, dispatch),
    getProcuringEntity: bindActionCreators(mapSubProjectActions.getProcuringEntityPackageStart, dispatch),
    getSubProjects: bindActionCreators(mapSubProjectActions.getSubProjectsStart, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);

ProjectDetails.propTypes = {
    project: PropTypes.object,
    getSubProject: PropTypes.func.isRequired,
    getSubProjects:PropTypes.func.isRequired,
}

ProjectDetails.defaultPropTypes = {
    project: null
}
