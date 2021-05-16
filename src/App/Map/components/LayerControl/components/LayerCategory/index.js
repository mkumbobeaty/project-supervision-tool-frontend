import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import './styles.css';
import API from "../../../../../../API";
import LayerItem from "./componets/LayerItem";


function LayerCategory({category}) {

    const [layers, setLayers] = useState([]);

    useEffect(() => {
        API.getLayers({category: category.id, offset: 0})
            .then(({objects}) => setLayers(objects));
    }, []);

    return (
        <div>
            <section className='data-set-section'>
                <h4> Boundaries <span>({category.count})</span></h4>
                {
                    layers.map(layer => (
                            <LayerItem layer={layer}/>
                        )
                    )
                }
            </section>
        </div>

    )

}


export default LayerCategory;

LayerCategory.propTypes = {
    category: PropTypes.object.isRequired,
}
