import React, { Component } from 'react';
import { Spin } from 'antd';
import PropTypes from "prop-types";
import { ZoomControl } from 'react-leaflet';
import { connect } from 'react-redux';
import L from 'leaflet';
import BaseMap from "./BaseMap";
import { bindActionCreators } from "redux";
import { mapActions, mapSelectors } from "../../redux/modules/map";
import SideNav from "./components/SideNav";
import ProjectPoints from "./components/ProjectPoints";
import { mapProjectSelectors } from "../../redux/modules/map/projects";
import {  mapSubProjectSelectors } from "../../redux/modules/map/subProjects";
import "./styles.css";

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
        } = this.props;
        return (
            <div className="MapDashboard">
                <Spin spinning={mapLoading} tip="Loading data...">
                    <SideNav />
                    <BaseMap ref={this.map} zoomControl={false}>
                        <ZoomControl position="bottomright" />
                        {projects.length > 0 ? <ProjectPoints projects={projects} /> : ''}
                    </BaseMap>
                </Spin>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    mapLoading: mapProjectSelectors.getProjectLoadingSelector(state),
    projectsOverview: mapSelectors.getProjectsOverview(state),
    projects: mapProjectSelectors.getProjectsSelector(state),
    wfsLayerData: mapSelectors.getWfsLayerDataSelector(state),
    loading: mapSubProjectSelectors.getSubProjectMapLoadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    getWfsLayerData: bindActionCreators(mapActions.getWfsLayerDataStart, dispatch),

});


export default connect(mapStateToProps, mapDispatchToProps)(MapDashboard);


