import {withLeaflet, Popup, GeoJSON} from "react-leaflet";
import React, {Component} from "react";
import PropTypes from 'prop-types';


class SubProjectPoints extends Component {

    static propTypes = {
        subProjects: PropTypes.array.isRequired,
    }



    render() {
        const {subProjects} = this.props;

        return (<>
                {subProjects.map(({name, id, geo_json}) =>
                    <GeoJSON
                        data={geo_json}
                        key={id}
                    >
                        <Popup>
                            <section className="mapPopup">
                                <div><h3>{name}</h3></div>
                            </section>
                        </Popup>
                    </GeoJSON>
                )}
            </>
        );
    }
}


export default withLeaflet(SubProjectPoints);
