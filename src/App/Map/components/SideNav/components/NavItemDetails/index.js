import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css'
import OverView from './components/OverView';
import ProjectInfo from "./components/ProjectInfo";
import {mapActions, mapSelectors} from "../../../../duck";
import {projectActions, projectSelectors } from "../../../../../Projects/duck";

import {bindActionCreators} from "redux";


class NavItemDetails extends Component{

    static propTypes = {
        activeItem: PropTypes.string.isRequired,
        projectsOverview: PropTypes.array.isRequired,
        regionProjectsStatistics: PropTypes.object,
        projectsStatistics: PropTypes.object,
        regionProjects: PropTypes.array.isRequired,
        project: PropTypes.object,
        getProject: PropTypes.func,
        getProjectsByRegion: PropTypes.func,
    }

    static defaultPropTypes = {
        project: null,
        projectsStatistics: null,
        regionProjectsStatistics: null,
        getProject: () => {},
        getProjectsByRegion: () => {},
    }

    render() {
        const {
            activeItem,
            projectsOverview,
            regionProjects,
            project,
            getProject,
            projectsStatistics,
            getProjectsByRegion,
            regionProjectsStatistics,
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
                    regionProjectsStatistics={regionProjectsStatistics}
                    getProjectsByRegion={getProjectsByRegion}
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
    regionProjectsStatistics: mapSelectors.getRegionProjectsStatistics(state),
});

const mapDispatchToProps = (dispatch) => ({
    getProject: bindActionCreators(projectActions.getProjectStart, dispatch),
    getProjectsByRegion: bindActionCreators(mapActions.getProjectsByRegionStart, dispatch),
});



export default connect(mapStateToProps, mapDispatchToProps)(NavItemDetails);
