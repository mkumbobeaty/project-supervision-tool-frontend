import React from "react";
import { useMap } from 'react-leaflet';
import L from "leaflet";
import './styles.css';

// Classes used by Leaflet to position controls
const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
}

function Legend({ position }) {

    const map = useMap();

    const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomright
    return (
        <div className={positionClass}>
            <div className="leaflet-control leaflet-bar">Anything here</div>
        </div>
    )
}


    // function Legend() {
    //
    //     const data = [
    //         { title: 'DMDP', color: '#FEB24C' },
    //         { title: 'BIGZ', color: '#03e24C' },
    //         { title: 'TACTICS', color: '#067ac3' },
    //         { title: 'BRT', color: '#12ffee' },
    //         { title: 'SHARETE', color: '#6b8cac' }
    //
    //     ]
    //
    //     const legend = L.control({ position: "bottomright" });
    //
    //     legend.onAdd = () => {
    //         const div = L.DomUtil.create("div", "info legend");
    //
    //         let labels = ['<h3>Key</h3>', '<h4>Projects</h4>'];
    //         data.map(({ title, color }) => {
    //             return labels.push(
    //                 `<div class="project_legend"
    //               '><p style='background-color: ${color};'> </p><h5>${title}</h5></div>`
    //             );
    //         })
    //
    //         div.innerHTML = labels.join(" ");
    //         return div;
    //     };
    //
    //     return <div>continue it will work</div>;
    //
    // }



export default Legend;
