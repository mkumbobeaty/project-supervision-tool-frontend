import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css'
import OverView from './components/OverView';
import ProjectInfo from "./components/ProjectInfo";
import { mapSelectors} from "../../../../duck";
import {projectActions, projectSelectors } from "../../../../../Projects/duck";

import {bindActionCreators} from "redux";


class NavItemDetails extends Component{

    static propTypes = {
        activeItem: PropTypes.string.isRequired,
        projectsOverview: PropTypes.array.isRequired,
        regionProjects: PropTypes.array.isRequired,
        project: PropTypes.object,
        getProject: PropTypes.func,
    }

    static defaultPropTypes = {
        project: null,
        getProject: () => {},
    }

    render() {
        const {
            activeItem,
            projectsOverview,
            regionProjects,
            project,
            getProject ,
            projectsStatistics ,
        } = this.props;
        return (
            <div
                style={activeItem === '' ? {display: 'none'} : { width: '16vw'}}
                className='NavItemDetails'
            >
                <OverView
                    show={!project}
                    getProject={getProject}
                    projectsOverview={projectsOverview}
                    regionProjects={regionProjects}
                    projectsStatistics={projectsStatistics}
                />
                <ProjectInfo project={project}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    activeItem: mapSelectors.getActiveMapSideMenuItem(state),
    project: projectSelectors.getProjectSelector(state),
    regionProjects: mapSelectors.getRegionProjectsSelector(state),
    projectsOverview: mapSelectors.getProjectsOverview(state),
    projectsStatistics: mapSelectors.getProjectsStatistics(state),
});

const mapDispatchToProps = (dispatch) => ({
    getProject: bindActionCreators(projectActions.getProjectStart, dispatch),
});



export default connect(mapStateToProps, mapDispatchToProps)(NavItemDetails);
