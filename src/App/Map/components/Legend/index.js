import React from "react";
import {useMap} from 'react-leaflet';
import L from "leaflet";
import './styles.css';

// Classes used by Leaflet to position controls
const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
}

function Legend({position}) {

    // const map = useMap();
    const data = [
        {title: 'DMDP', color: '#FEB24C'},
        {title: 'BIGZ', color: '#03e24C'},
        {title: 'TACTICS', color: '#067ac3'},
        {title: 'BRT', color: '#12ffee'},
        {title: 'SHARETE', color: '#6b8cac'}

    ];


    const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomright
    return (
        <div className={`${positionClass} info legend`} style={{ margin: '10px'}}>
            <h4>Projects</h4>
                {
                    data.map(({color, title}) =>
                        <div className="project_legend">
                            <p style={{backgroundColor: color}}/>
                            <h5>{title}</h5>
                        </div>
                    )
                }
        </div>
    )
}
export default Legend;
