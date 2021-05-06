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

function Legend({ position, projects }) {

    // const map = useMap();
    const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomright
    return (
        <div>
            {
                projects  ?
                    <div className={`${positionClass} info legend`} style={{ marginRight: '10px', marginBottom: '20px' }}>
                        <h4>Projects</h4>
                        {
                            projects.map(({ color, code }) =>
                                <div className="project_legend">
                                    <p style={{ backgroundColor: color }} />
                                    <h5>{code}</h5>
                                </div>
                            )
                        }
                    </div> : ''

            }
        </div>

    )
}
export default Legend;
