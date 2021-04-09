import React, { Component } from 'react';
import { Spin } from 'antd';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import L from 'leaflet';
import BaseMap from "./BaseMap";
import { bindActionCreators } from "redux";
import { mapActions, mapSelectors } from "../../redux/modules/map";
import { projectSelectors } from '../../redux/modules/projects'
import SideNav from "./components/SideNav";
import ProjectPoints from "./components/ProjectPoints";
import { mapProjectSelectors } from "../../redux/modules/map/projects";
import { mapSubProjectActions, mapSubProjectSelectors } from "../../redux/modules/map/subProjects";
import "./styles.css";

class MapDashboard extends Component {
    state = {
        lat: -6.161184,
        lng: 35.745426,
        zoom: 6,
    }

    static propTypes = {
        mapLoading: PropTypes.bool.isRequired,
        getProjectsByRegion: PropTypes.func.isRequired,
        regionDetails: PropTypes.object,
        projectsOverview: PropTypes.array.isRequired,
        regionProjects: PropTypes.array.isRequired,
        getWfsLayerData: PropTypes.func.isRequired,
        project: PropTypes.object,
        subProject: PropTypes.object,
        subProjectElement: PropTypes.object,
    };

    static defaultProps = {
        projectsOverview: [],
        project: null,
        subProject: null,
        subProjectElement: null,
        regionProjects: [],
        regionDetails: null,
        getProjectsByRegion: () => {
        },
    };

    constructor(props) {
        super(props);
        this.map = React.createRef();
    }

    displayRemoteLayers() {
        const leafletMap = this.map.current.leafletElement;
        const Dar_es_Salaam_Office_Points = L.tileLayer.wms("https://geonode.resilienceacademy.ac.tz/geoserver/ows", {
            layers: 'geonode:Dar_es_Salaam_Office_Points',
            format: 'image/png',
            transparent: true,
        });
        const Dar_es_Salaam_Hospital_Points = L.tileLayer.wms("https://geonode.resilienceacademy.ac.tz/geoserver/ows", {
            layers: 'geonode:Dar_es_Salaam_Hospital_Points',
            format: 'image/png',
            transparent: true,
        });
        const Dar_es_Salaam_Highway = L.tileLayer.wms("https://geonode.resilienceacademy.ac.tz/geoserver/ows", {
            layers: 'geonode:Dar_es_Salaam_Highway',
            format: 'image/png',
            transparent: true,
        });
        const dar_es_salaam_drain_segments = L.tileLayer.wms("https://geonode.resilienceacademy.ac.tz/geoserver/ows", {
            layers: 'geonode:dar_es_salaam_drain_segments',
            format: 'image/png',
            transparent: true,
        });

        L.control.layers({}, {
            "Dar_es_Salaam_Government_Offices": Dar_es_Salaam_Office_Points,
            "Dar_es_Salaam_Hospitals": Dar_es_Salaam_Hospital_Points,
            "Dar_es_Salaam_Roads": Dar_es_Salaam_Highway,
            "Dar_es_salaam_drain_segments": dar_es_salaam_drain_segments,
        }).addTo(leafletMap);

        //add zoom control with your options
        L.control.zoom({
            position: 'topright'
        }).addTo(leafletMap);
    }

    componentDidMount() {
        this.displayRemoteLayers();
    }

    render() {
        const {
            mapLoading,
            projects,
        } = this.props;
        return (
            <div className="MapDashboard">
                <Spin spinning={mapLoading} tip="Loading data...">
                    <SideNav />
                    <BaseMap ref={this.map} zoomControl={false}>
                        {projects.length > 0 ? <ProjectPoints projects={projects} /> : ''}
                    </BaseMap>
                </Spin>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    mapLoading: projectSelectors.getProjectsLoadingSelector(state),
    regionProjects: mapSelectors.getRegionProjectsSelector(state),
    regionDetails: mapSelectors.getRegionDetailsSelector(state),
    projectsOverview: mapSelectors.getProjectsOverview(state),
    subProject: mapSubProjectSelectors.getSubProjectSelector(state),
    subProjectElement: projectSelectors.getSubProjectElementSelector(state),
    project: mapProjectSelectors.getProjectSelector(state),
    projects: projectSelectors.getProjectsSelector(state),
    wfsLayerData: mapSelectors.getWfsLayerDataSelector(state),
    subProjectsOverview: mapSubProjectSelectors.getSubProjectsOverviewSelector(state),
    loading: mapSubProjectSelectors.getSubProjectMapLoadingSelector(state),
    isShowSubProjectOverview: mapSubProjectSelectors.showSubProjectOverview(state)
});

const mapDispatchToProps = (dispatch) => ({
    getProjectsByRegion: bindActionCreators(mapActions.getProjectsByRegionStart, dispatch),
    getWfsLayerData: bindActionCreators(mapActions.getWfsLayerDataStart, dispatch),
    getSubProjectsByRegion: bindActionCreators(mapSubProjectActions.getSubProjectsByRegionStart, dispatch),

});


export default connect(mapStateToProps, mapDispatchToProps)(MapDashboard);


