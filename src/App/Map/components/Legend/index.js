import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";
import { generateNumberRange, generateColor } from '../../../../Util'
import './styles.css';

class Legend extends MapControl {
    createLeafletElement(props) {


        const legend = L.control({ position: "bottomright" });

        legend.onAdd = () => {
            const div = L.DomUtil.create("div", "info legend");
            const grades = generateNumberRange(9);
            console.log('grades', grades);
            let labels = [];
            let from;
            let to;

            for (let i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' +
                    generateColor(i) +
                    '"></i> ' +
                    from +
                    (to ? "&ndash;" + to : "+")
                );
            }

            div.innerHTML = labels.join("<br>");
            return div;
        };

        return legend;

    }

}

export default withLeaflet(Legend);
