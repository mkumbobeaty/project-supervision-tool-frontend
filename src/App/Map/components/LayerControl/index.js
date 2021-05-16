import React, {useEffect, useState} from 'react';
import LayerControlIcon from '../../../../assets/icons/geo-node-layers.svg';
import './styles.css';
import {Drawer, Spin} from "antd";
import {CloseOutlined} from '@ant-design/icons';
import TopSection from "../SideNav/components/NavItemDetails/components/TopSection";
import CustomSearch from "../SideNav/components/NavItemDetails/components/CustomSearch";
import LayerCategory from "./components/LayerCategory";
import API from "../../../../API";
import {useMap} from "react-leaflet";


const LayerControl = ({}) => {
    const [showSideNav, setShowSideNav] = useState(false);
    const [layerCategories, setLayerCategories] = useState([]);
    useEffect(() => {
        API.getLayersCategories()
            .then(({objects}) => {
                const data = objects.filter(({count}) => count > 0);
                setLayerCategories(data);
            });
    }, []);

    const map = useMap();


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
                style={{ position: 'absolute' }}
            >
                <Spin spinning={false}>
                    <div className='DataSetsMenuItemDetails'>
                        <TopSection searchPlaceHolder="Search Data " title={`MAP LAYERS`}/>
                        <hr/>
                        <div className="data-set-search">
                            <CustomSearch placeholder='Search map layers'/>
                        </div>
                        <hr/>
                        <div className='data-set-items'>
                            {
                                layerCategories.map((category) => <LayerCategory category={category} map={map} />)
                            }
                        </div>
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
