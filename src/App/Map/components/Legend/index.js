import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";
import { generateNumberRange, generateColor } from '../../../../Util'
import './styles.css';

class Legend extends MapControl {
    createLeafletElement(props) {

        const data = [
            { title: 'DMDP', color: '#FEB24C' },
            { title: 'BIGZ', color: '#03e24C' },
            { title: 'TACTICS', color: '#067ac3' },
            { title: 'BRT', color: '#12ffee' },
            { title: 'SHARETE', color: '#6b8cac' }

        ]

        const legend = L.control({ position: "bottomright" });

        legend.onAdd = () => {
            const div = L.DomUtil.create("div", "info legend");

            let labels = ['<h3>Key</h3>', '<h4>Projects</h4>'];
            data.map(({ title, color }) => {
                return labels.push(
                    `<div class="project_legend"
                  '><p style='background-color: ${color};'> </p><h5>${title}</h5></div>`
                );
            })

            div.innerHTML = labels.join(" ");
            return div;
        };

        return legend;

    }

}

export default withLeaflet(Legend);
