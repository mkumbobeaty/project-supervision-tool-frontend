import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {Collapse} from 'antd';
import './styles.css';
import API from "../../../../../../API";
import LayerItem from "./componets/LayerItem";
import DecimalStep from "../../../../../components/DecimalStep";

const { Panel } = Collapse;

function LayerCategory({category}) {

    const [layers, setLayers] = useState([]);

    useEffect(() => {
        API.getLayers({category: category.id, offset: 0})
            .then(({objects}) => setLayers(objects));
    }, []);

    return (
            <Collapse bordered={false} expandIconPosition='right' ghost>
                {
                    layers.map(layer => (
                            <Panel
                                key={layer.id}
                                header={<LayerItem layer={layer}/>}
                                className="LayerCategories"
                            >
                                <DecimalStep />
                            </Panel>
                        )
                    )
                }
            </Collapse>
    )

}


export default LayerCategory;

LayerCategory.propTypes = {
    category: PropTypes.object.isRequired,
}
