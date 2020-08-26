import React, {Component} from 'react';
import L from 'leaflet'
import "./styles.css";

const accessToken = 'pk.eyJ1IjoibWxvd2VlZGdhciIsImEiOiJjaWxqZXh4ZTAwMDl4dzhsend0a2cxY3JqIn0.KtlMeVuCRdoDod0giDBAdQ'

class BaseMap extends  Component {

    componentDidMount() {
         const mymap = L.map('mapid').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: accessToken
        }).addTo(mymap);
    }

    render() {
        return (  <div id="mapid"/> );
    }
}

export default BaseMap;
