import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GeoJSON, withLeaflet, WMSTileLayer} from "react-leaflet";
import L from "leaflet";
import Axios from "axios";
import WMSCapabilities from 'wms-capabilities';

/**
 * @class
 * @name SubProjectLocations
 * @description component that renders sub project element on map
 */
class ShowDataSets extends Component {

    static propTypes = {
        wfsLayerData: PropTypes.object,
    }

    static defaultProps = {
        wfsLayerData: null,
    }

    addDataSet = (dataSet) => {}
    removeDataSet = (dataSet) => {}
    getAddedDataSet = (dataSets) => {}

    componentDidMount() {
        const { map } = this.props.leaflet;

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render() {
        return '';
    }
}

export default withLeaflet(ShowDataSets);
