

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {GeoJSON} from 'react-leaflet';
import {getGeoJsonFromLocation} from '../../Util'
import "./styles.css";
import BaseMap from "./BaseMap";
import SideMenu from "./components/SideMenu";
import {bindActionCreators} from "redux";
import {resourceOperations} from "../Resources/duck";
import {mapOperations } from "./duck";
import PropTypes from "prop-types";

const customGeojson = (activeMenuItem, initiativeGeoJsons, humanResourcesGeoJsons) => {
    switch (activeMenuItem) {
        case 'initiative':
            return initiativeGeoJsons.length > 0 ? initiativeGeoJsons.map((initiativeGeoJson, index) => {
                const i = `initiative-${index}`;
                return (<GeoJSON data={initiativeGeoJson} key={i}/> );
            }) : '';
        case 'human-resource':
            return humanResourcesGeoJsons.length > 0 ? humanResourcesGeoJsons.map((humanResourcesGeoJson, index) => {
                const i = `human-resource-${index}`;
                return (<GeoJSON data={humanResourcesGeoJson} key={i}/> )
            }) : '';

        default:
            return initiativeGeoJsons.length > 0 ? initiativeGeoJsons.map((initiativeGeoJson, index) => {
                const i = `initiative-${index}`;
                return (<GeoJSON data={initiativeGeoJson} key={i}/> );
            }) : '';
    }
}


class MapDashboard extends  Component {
    state = {
        lat: -6.161184,
        lng: 35.745426,
        zoom: 7,
        data: [],
    }

    constructor(props) {
        super(props);
        this.map = React.createRef();
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


    render() {
        const {
            getInitiatives,
            getHumanResources,
            setActiveMapSideMenuItem,
            activeMapSideMenuItem,
            humanResourcesGeoJson,
            initiativesGeoJson,
        } = this.props;
        const {data} = this.state;
        return (
            <div className="MapDashboard">
                <SideMenu
                    getInitiatives={getInitiatives}
                    getHumanResources={getHumanResources}
                    setActiveMapSideMenuItem={setActiveMapSideMenuItem}
                    active={activeMapSideMenuItem}
                />
                <BaseMap ref={this.map} zoomControl={false}>
                    { customGeojson(activeMapSideMenuItem,initiativesGeoJson, humanResourcesGeoJson ) }
                </BaseMap>
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
        selectedInitiative: state.resources?.selectedInitiative,
        activeMapSideMenuItem: state.map.activeMapSideMenuItem,
        initiativesGeoJson: state.map.initiativesGeoJson,
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


