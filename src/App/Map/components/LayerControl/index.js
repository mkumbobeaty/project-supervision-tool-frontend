import React, {useEffect, useState} from 'react';
import LayerControlIcon from '../../../../assets/icons/geo-node-layers.svg';
import './styles.css';
import {Collapse, Drawer, Spin} from "antd";
import {CloseOutlined} from '@ant-design/icons';
import TopSection from "../SideNav/components/NavItemDetails/components/TopSection";
import CustomSearch from "../SideNav/components/NavItemDetails/components/CustomSearch";
import LayerCategory from "./components/LayerCategory";
import API from "../../../../API";

const {Panel} = Collapse;


const LayerControl = () => {
    const [showSideNav, setShowSideNav] = useState(false);
    const [layerCategories, setLayerCategories] = useState([]);
    useEffect(() => {
        API.getLayersCategories()
            .then(({objects}) => {
                const data = objects.filter(({count}) => count > 0);
                setLayerCategories(data);
            });
    }, []);

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    return (
        <>
            <img
                src={LayerControlIcon}
                alt='layers control'
                className='geonode-layers-control leaflet-touch leaflet-bar'
                onClick={() => setShowSideNav(true)}
            />
            <Drawer
                mask={false}
                onClose={() => setShowSideNav(false)}
                visible={showSideNav}
                className="mapSideNav"
                getContainer={false}
                width={450}
                closeIcon={<CloseOutlined/>}
                style={{position: 'absolute'}}
            >
                <Spin spinning={false}>
                    <div className='DataSetsMenuItemDetails'>
                        <TopSection searchPlaceHolder="Search Data " title={`MAP LAYERS`}/>
                        <hr/>
                        <div className="data-set-search">
                            <CustomSearch placeholder='Search map layers'/>
                        </div>
                        <hr/>
                        {/*<Collapse  defaultActiveKey={['6']}>*/}
                        {/*    {*/}
                        {/*        layerCategories.map((category) => <LayerCategory category={category}/>)*/}
                        {/*    }*/}
                        {/*</Collapse>*/}
                        <Collapse defaultActiveKey={['1']}>
                            {
                                layerCategories.map((category) =>
                                    <Panel header={`${category.gn_description} (${category.count})`} key={category.id}>
                                        <LayerCategory category={category}/>
                                    </Panel>
                                )
                            }
                        </Collapse>,
                        <div className="dataset-load_more">
                            <p>Load More</p>
                            <a href='https://geonode.project-supervision-tool.ga/' target="_blank"
                               rel='noopener noreferrer'>
                                <p>Open Geonode</p>
                            </a>
                        </div>
                    </div>
                </Spin>
            </Drawer>
        </>
    );
}

export default LayerControl;
