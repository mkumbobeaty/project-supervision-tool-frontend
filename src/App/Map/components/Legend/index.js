import React from "react";
import './styles.css';

// Classes used by Leaflet to position controls
const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
}

function Legend({position, projects}) {

    const positionClass = (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomright
    // return (
    //     <div>
    //         {
    //             projects  ?
    //                 <div className={`${positionClass} info legend`} style={{ marginRight: '10px', marginBottom: '20px' }}>
    //                     <div>
    //                         <h1>Bubbles</h1>
    //                     </div>
    //                     <h4>Projects</h4>
    //                     {
    //                         projects.map(({ color, code }) =>
    //                             <div className="project_legend">
    //                                 <p style={{ backgroundColor: color }} />
    //                                 <h5>{code}</h5>
    //                             </div>
    //                         )
    //                     }
    //                 </div> : ''
    //
    //         }
    //     </div>
    //
    // )

    return (
        <div className='Legend'>

            <div className={`${positionClass} info legend`} style={{marginRight: '10px', marginBottom: '20px'}}>
                <div>
                    <div className='bubble-large' >
                        <hr/><div>800</div>
                    </div>
                    <div className='bubble-medium' ></div>
                    <div className='bubble-small' ></div>
                </div>
            </div>
    
        </div>

    )
}

export default Legend;
