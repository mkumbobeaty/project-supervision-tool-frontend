

import React, {Component} from 'react';
import {Drawer, Spin, List} from 'antd';
import { connect } from 'react-redux';
import {GeoJSON} from 'react-leaflet';
import L from 'leaflet';
import {getGeoJsonFromLocation, getSelectedResources } from '../../Util'
import "./styles.css";
import BaseMap from "./BaseMap";
import SideMenu from "./components/SideMenu";
import {bindActionCreators} from "redux";
import {resourceOperations} from "../Resources/duck";
import {mapOperations } from "./duck";
import PropTypes from "prop-types";
import MapDetailItem from "./components/MapDetailItem";

class MapDashboard extends  Component {
    state = {
        lat: -6.161184,
        lng: 35.745426,
        zoom: 7,
        selectedResources: [],
    }

    constructor(props) {
        super(props);
        this.map = React.createRef();
    }

    displayRemoteLayers() {
        const leafletMap =  this.map.current.leafletElement;
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
            position:'bottomright'
        }).addTo(leafletMap);
    }

    componentDidMount() {
        this.displayRemoteLayers();
    }

    clickToFeature(e) {
        const { geometry } =  e.target.feature;
        const { level, id } = geometry.property;
        const { activeMapSideMenuItem, humanResources, initiatives } = this.props;
        const data = activeMapSideMenuItem === 'initiative' ? initiatives : humanResources
       const selectedResources = getSelectedResources(level, id, data);
        this.setState({selectedResources});
        this.props.setShowFeatureDetails();
    }

    onEachFeature = (feature, layer) => {
        layer.on({
            click: this.clickToFeature.bind(this)
        });
    }

    setInitiativesData(initiatives) {
        if(initiatives.length > 0){
            this.props.setInitiativesGeoJson(initiatives);
        }
    }
    setHumanResourcesData(humanResources) {
        if(humanResources.length > 0){
            this.props.setHumanResourceGeoJson(humanResources);
        }
    }

    customGeojson = (activeMenuItem, initiativeGeoJsons, humanResourcesGeoJsons) => {
        switch (activeMenuItem) {
            case 'initiative':
                return initiativeGeoJsons.length > 0 ? initiativeGeoJsons.map((initiativeGeoJson, index) => {
                    const i = `initiative-${index}`;
                    return (<GeoJSON data={initiativeGeoJson} key={i} onEachFeature={this.onEachFeature.bind(this)}/> );
                }) : '';
            case 'human-resource':
                return humanResourcesGeoJsons.length > 0 ? humanResourcesGeoJsons.map((humanResourcesGeoJson, index) => {
                    const i = `human-resource-${index}`;
                    return (<GeoJSON data={humanResourcesGeoJson} key={i} onEachFeature={this.onEachFeature.bind(this)}/> )
                }) : '';

            default:
                return initiativeGeoJsons.length > 0 ? initiativeGeoJsons.map((initiativeGeoJson, index) => {
                    const i = `initiative-${index}`;
                    return (<GeoJSON data={initiativeGeoJson} key={i} onEachFeature={this.onEachFeature.bind(this)}/> );
                }) : '';
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.initiatives !== this.props.initiatives){
            const data = this.props.initiatives.map(initiative => getGeoJsonFromLocation(initiative));
            this.setInitiativesData(this.props.initiatives)
            this.setState({data})
        }

        if (prevProps.humanResources !== this.props.humanResources){
            const data = this.props.humanResources.map(humanResource => getGeoJsonFromLocation(humanResource));
            this.setHumanResourcesData(this.props.humanResources)
            this.setState({data})
        }

    }

    renderSelectedResources = (data) => data.map(obj => (<MapDetailItem item ={obj}/>));


    render() {
        const {
            getInitiatives,
            getHumanResources,
            setActiveMapSideMenuItem,
            activeMapSideMenuItem,
            humanResourcesGeoJson,
            initiativesGeoJson,
            loadingInitiative,
            loadingHumanResources,
            setShowFeatureDetails,
            showFeatureDetails,
        } = this.props;
        const { selectedResources } = this.state;
        console.log(selectedResources);

        const loadingInitiativeGeoJson = initiativesGeoJson.length > 0 ? false : loadingInitiative;
        const loadingHumanResourceGeoJson = humanResourcesGeoJson.length > 0 ? false : loadingHumanResources;
        const loading = loadingInitiativeGeoJson || loadingHumanResourceGeoJson;

        return (
            <div className="MapDashboard">
                <SideMenu
                    getInitiatives={getInitiatives}
                    getHumanResources={getHumanResources}
                    setActiveMapSideMenuItem={setActiveMapSideMenuItem}
                    active={activeMapSideMenuItem}
                />
                <Spin spinning={loading} tip="Loading data...">
                    <BaseMap ref={this.map} zoomControl={false}>
                        { this.customGeojson(activeMapSideMenuItem,initiativesGeoJson, humanResourcesGeoJson ) }
                    </BaseMap>
                </Spin>
                <Drawer
                    title={`${activeMapSideMenuItem === 'initiative' ? 'Initiatives' : 'Human Resources'}`}
                    width={600}
                    visible={showFeatureDetails}
                    onClose={() => setShowFeatureDetails(false)}
                    destroyOnClose
                    maskClosable={false}
                    bodyStyle={{ padding: 0 }}
                    headerStyle={{ textAlign: 'center', color: "#959595" }}

                >
                    <List
                        size="small"
                        bordered
                        dataSource={selectedResources}
                        renderItem={item => <List.Item><MapDetailItem item={item}/></List.Item>}
                    />
                </Drawer>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        initiatives: state.resources.initiative.data
            ? state.resources.initiative.data
            : [],
        humanResources: state.resources.humanResources.data
            ? state.resources.humanResources.data
            : [],
        loadingInitiative: state.resources.initiative.loading,
        loadingHumanResources: state.resources.humanResources.loading,
        selectedInitiative: state.resources?.selectedInitiative,
        activeMapSideMenuItem: state.map.activeMapSideMenuItem,
        initiativesGeoJson: state.map.initiativesGeoJson,
        showFeatureDetails: state.map.showFeatureDetails,
        humanResourcesGeoJson: state.map.humanResourcesGeoJson,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getInitiatives: bindActionCreators(resourceOperations.getInitiatives, dispatch),
    getHumanResources: bindActionCreators(resourceOperations.getHumanResources, dispatch),
    selectInitiative: bindActionCreators(resourceOperations.selectInitiative, dispatch),
    selectHumanResource: bindActionCreators(resourceOperations.selectHumanResource, dispatch),
    setActiveMapSideMenuItem: bindActionCreators(mapOperations.setActiveMapSideMenuItem, dispatch),
    setInitiativesGeoJson: bindActionCreators(mapOperations.setInitiativesGeoJson, dispatch),
    setHumanResourceGeoJson: bindActionCreators(mapOperations.setHumanResourceGeoJson, dispatch),
    setShowFeatureDetails: bindActionCreators(mapOperations.setShowFeatureDetails, dispatch),

});



MapDashboard.propTypes = {
    selectedInitiative: PropTypes.object,
    initiative: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    humanResources: PropTypes.array,
};

MapDashboard.defaultProps = {
    initiatives: [],
    humanResources: [],
    selectedInitiative: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapDashboard);


