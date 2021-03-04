import React, {Component} from 'react';
import { connect } from 'react-redux';
import WMSCapabilities from 'wms-capabilities';
import PropTypes from 'prop-types';
import {withLeaflet} from "react-leaflet";
import {mapDataSetsSelectors} from "../../../redux/modules/map/dataSets";
import L from "leaflet";
import Axios from "axios";


/**
 * @class
 * @name SubProjectLocations
 * @description component that renders sub project element on map
 */
class ShowDataSets extends Component {
    state = {mapLayers: {}}

    static propTypes = {
        addedDataSet: PropTypes.object,
        removedDataSet: PropTypes.object,
    }

    static defaultProps = {
        addedDataSet: null,
        removedDataSet: null,
    }

    addDataSet = (dataSet) => {
        const { map } = this.props.leaflet;
        const { mapLayers } = this.state;
        Axios.get(`https://geonode.project-supervision-tool.ga/geoserver/wms?service=wms&version=1.1.1&request=GetCapabilities`)
            .then(res => {
                const capabilities = new WMSCapabilities().parse(res.data);
                const myLayer = capabilities.Capability.Layer.Layer.find(l => l.Name === dataSet.typename );
                const {LatLonBoundingBox} = myLayer;
                console.log(myLayer);

                const geonodeLayer = L.tileLayer.wms("https://geonode.project-supervision-tool.ga/geoserver/ows", {
                    layers: dataSet.typename,
                    format: 'image/png',
                    transparent: true,
                });

                mapLayers[dataSet.typename] = geonodeLayer;
                this.setState(mapLayers);
                map.addLayer(geonodeLayer);
                const corner1 = L.latLng(LatLonBoundingBox[1],LatLonBoundingBox[0]);
                const corner2 = L.latLng(LatLonBoundingBox[3],LatLonBoundingBox[2]);
                const bounds = L.latLngBounds(corner1, corner2);
                map.fitBounds(bounds);
            });
    }


    removeDataSet = (dataSet) => {
        const { map } = this.props.leaflet;
        const { mapLayers } = this.state;
        map.removeLayer(mapLayers[dataSet.typename]);
        delete mapLayers[dataSet.typename] // delete property of removed layer
        console.log(mapLayers);
        this.setState(mapLayers);
    }

    componentDidMount() {
        const { map } = this.props.leaflet;

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.addedDataSet !== this.props.addedDataSet && this.props.addedDataSet) {
            this.addDataSet(this.props.addedDataSet);
        }
        if (prevProps.removedDataSet !== this.props.removedDataSet && this.props.removedDataSet) {
            this.removeDataSet(this.props.removedDataSet);
        }

    }


    render() {
        return '';
    }
}

const mapStateToProps = (state) => ({
    addedDataSet: mapDataSetsSelectors.getAddedDataSetSelector(state),
    removedDataSet: mapDataSetsSelectors.getRemovedDataSetSelector(state)
});




export default connect(mapStateToProps)(withLeaflet(ShowDataSets));
