import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import './styles.css';
import { mapProjectSelectors } from "../../../../../../../../../../redux/modules/map/projects";
import { mapSubProjectActions, mapSubProjectSelectors } from "../../../../../../../../../../redux/modules/map/subProjects";
import SubProjectTypesFilter from "../SuProjectTypesFilter";


function ProjectDetails({ subProjectTypes, setSubProjectTypesFilter, getSubProjectTypes, getSubProjectStatus }) {
    useEffect(() => {
        getSubProjectTypes();
        getSubProjectStatus();
    }, []);


    return (
        <div className="ProjectInfo">
            <SubProjectTypesFilter subProjectTypes={subProjectTypes} setSubProjectTypesFilter={setSubProjectTypesFilter}
            />     
       </div>
    );
}

const mapStateToProps = state => ({
    project: mapProjectSelectors.getProjectSelector(state),
    subProjectTypes: mapSubProjectSelectors.getSubProjectTypesSelector(state),
    subProjectStatus: mapSubProjectSelectors.getSubProjectStatusSelector(state)

});

const mapDispatchToProps = (dispatch) => ({
    getSubProject: bindActionCreators(mapSubProjectActions.getSubProjectStart, dispatch),
    getSubProjectTypes: bindActionCreators(mapSubProjectActions.getSubProjectTypesStart, dispatch),
    getSubProjectStatus: bindActionCreators(mapSubProjectActions.getSubProjectStatusStart, dispatch),
    setSubProjectTypesFilter: bindActionCreators(mapSubProjectActions.setSubProjectTypesFilter, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);

ProjectDetails.propTypes = {
    project: PropTypes.object,
    getSubProject: PropTypes.func.isRequired,
}

ProjectDetails.defaultPropTypes = {
    project: null
}
