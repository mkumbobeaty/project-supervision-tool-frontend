import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {withLeaflet} from "react-leaflet";
import {mapDataSetsSelectors} from "../../../redux/modules/map/dataSets";
import L from "leaflet";


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
        const geonodeLayer = L.tileLayer.wms("https://geonode.project-supervision-tool.ga/geoserver/ows", {
            layers: dataSet.typename,
            format: 'image/png',
            transparent: true,
        });
        map.addLayer(geonodeLayer);
        mapLayers[dataSet.typename] = geonodeLayer;
        this.setState(mapLayers);
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
