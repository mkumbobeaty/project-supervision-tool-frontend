import React, {Component} from 'react';
import {Spin} from 'antd';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import L from 'leaflet';
import "./styles.css";
import BaseMap from "./BaseMap";
import {bindActionCreators} from "redux";
import {mapActions, mapSelectors} from "./duck";
import {projectSelectors} from '../Projects/duck'
import SideNav from "./components/SideNav";
import RegionsGeoJson from "./components/RegionsGeoJson";
import RegionDetailGeoJson from "./components/RegionDetailsGeoJson";
import ProjectPoints from "./components/ProjectPoints";
import ProjectLocations from "./components/ProjectLocations";

class MapDashboard extends Component {
    state = {
        lat: -6.161184,
        lng: 35.745426,
        zoom: 6,
    }

    static propTypes = {
        mapLoading: PropTypes.bool.isRequired,
        getProjectsByRegion: PropTypes.func.isRequired,
        regionDetails: PropTypes.object.isRequired,
        projectsOverview: PropTypes.array.isRequired,
        regionProjects: PropTypes.array.isRequired,
        project: PropTypes.object,
    };

    static defaultProps = {
        projectsOverview: [],
        project: null,
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
            projectsOverview,
            getProjectsByRegion,
            regionDetails,
            regionProjects,
            project,
            mapLoading,
        } = this.props;
        return (
            <div className="MapDashboard">
                <SideNav/>
                <Spin spinning={mapLoading} tip="Loading data...">
                    <BaseMap ref={this.map} zoomControl={false}>
                        <RegionsGeoJson
                            getProjectsByRegion={getProjectsByRegion}
                            projectsOverview={projectsOverview}
                        />
                        <RegionDetailGeoJson data={regionDetails}/>
                        <ProjectPoints regionDetails={regionDetails} regionProjects={regionProjects}/>
                        <ProjectLocations project={project} />
                    </BaseMap>
                </Spin>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    mapLoading: mapSelectors.getMapLoadingSelector(state),
    regionProjects: mapSelectors.getRegionProjectsSelector(state),
    regionDetails: mapSelectors.getRegionDetailsSelector(state),
    projectsOverview: mapSelectors.getProjectsOverview(state),
    project: projectSelectors.getProjectSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    getProjectsByRegion: bindActionCreators(mapActions.getProjectsByRegionStart, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(MapDashboard);


