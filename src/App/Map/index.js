import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "./styles.css";

const accessToken = 'pk.eyJ1IjoibWxvd2VlZGdhciIsImEiOiJjaWxqZXh4ZTAwMDl4dzhsend0a2cxY3JqIn0.KtlMeVuCRdoDod0giDBAdQ'

class BaseMap extends  Component {

    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <Map center={position} zoom={this.state.zoom} className="base-map">
                <TileLayer
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                    url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
                    maxZoom={18}
                    id='mapbox/streets-v11'
                    tileSize={512}
                    zoomOffset={-1}
                    accessToken={accessToken}
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        )
    }
}

export default BaseMap;
