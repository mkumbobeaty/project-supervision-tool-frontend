import React, { Component } from 'react';
import { Spin } from 'antd';
import PropTypes from "prop-types";
import { ZoomControl } from 'react-leaflet';
import { connect } from 'react-redux';
import BaseMap from "./components/BaseMap";
import { bindActionCreators } from "redux";
import { mapActions, mapSelectors } from "../../redux/modules/map";
import SideNav from "./components/SideNav";
import ProjectPoints from "./components/ProjectPoints";
import { mapProjectActions, mapProjectSelectors } from "../../redux/modules/map/projects";
import { mapSubProjectActions, mapSubProjectSelectors } from "../../redux/modules/map/subProjects";
import "./styles.css";
import SubProjectPoints from './components/SubProjectPoints';
import ShowDataSets from "./components/ShowDataSets";
import SubProjectLocations from "./components/SubProjectLocations";
import Legend from "./components/Legend";

class MapDashboard extends Component {
    state = {
        lat: -6.161184,
        lng: 35.745426,
        zoom: 6,
    }

    static propTypes = {
        mapLoading: PropTypes.bool.isRequired,
        projectsOverview: PropTypes.array.isRequired,
        getWfsLayerData: PropTypes.func.isRequired,
        project: PropTypes.object,
        subProjects: PropTypes.array.isRequired,
        isShowProjectOverview: PropTypes.bool.isRequired,
        loading: PropTypes.bool.isRequired
    };

    static defaultProps = {
        projectsOverview: [],
        project: null,
    };

    constructor(props) {
        super(props);
        this.map = React.createRef();
    }

    render() {

        const {
            mapLoading,
            projects,
            subProjects,
            isShowProjectOverview,
            getProject,
            project,
            loading,
            getSubproject,
            subProject,
            subProjectLoading,
        } = this.props;

        return (
            <div className="MapDashboard">
                <Spin spinning={mapLoading} tip="Loading data...">
                    <SideNav />
                    <BaseMap projects={projects}>
                        <Legend />
                        {
                            isShowProjectOverview === true ? projects.length > 0 ? <ProjectPoints projects={projects} getProject={getProject} project={project} loading={loading} /> : '' :
                                subProjects.length > 0 ? 
                                <SubProjectPoints 
                                subProjects={subProjects} 
                                project={project}
                                getSubproject={getSubproject}
                                subProject={subProject} 
                                subProjectLoading={subProjectLoading} 
                                 /> : ''
                        }
                        <ShowDataSets />
                    </BaseMap>
                </Spin>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    mapLoading: mapSelectors.getMapLoadingSelector(state),
    projectsOverview: mapSelectors.getProjectsOverview(state),
    projects: mapProjectSelectors.getProjectsSelector(state),
    subProjects: mapSubProjectSelectors.getSubProjectsSelector(state),
    wfsLayerData: mapSelectors.getWfsLayerDataSelector(state),
    loading: mapProjectSelectors.getProjectLoadingSelector(state),
    isShowProjectOverview: mapSelectors.showProjectsOverviewSelector(state),
    project: mapProjectSelectors.getProjectSelector(state),
    subProject: mapSubProjectSelectors.getSubProjectSelector(state),
    subProjectLoading: mapSubProjectSelectors.getSubProjectLoadingSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    getWfsLayerData: bindActionCreators(mapActions.getWfsLayerDataStart, dispatch),
    getSubprojects: bindActionCreators(mapSubProjectActions.getSubProjectsStart, dispatch),
    getProject: bindActionCreators(mapProjectActions.getProjectStart, dispatch),
    getSubproject:bindActionCreators(mapSubProjectActions.getSubProjectStart, dispatch)

});


export default connect(mapStateToProps, mapDispatchToProps)(MapDashboard);


