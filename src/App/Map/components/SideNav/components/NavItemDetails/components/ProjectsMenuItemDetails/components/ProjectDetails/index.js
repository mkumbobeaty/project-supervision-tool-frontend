import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import './styles.css';
import { mapProjectSelectors} from "../../../../../../../../../../redux/modules/map/projects";
import {mapSubProjectActions} from "../../../../../../../../../../redux/modules/map/subProjects";


function ProjectDetails() {

    return  (
        <div className="ProjectInfo">
           Project details
        </div>
    ) ;
}

const mapStateToProps = state => ({
    project: mapProjectSelectors.getProjectSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    getSubProject: bindActionCreators(mapSubProjectActions.getSubProjectStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);

ProjectDetails.propTypes = {
    project: PropTypes.object,
    getSubProject: PropTypes.func.isRequired,
}

ProjectDetails.defaultPropTypes = {
    project: null
}
