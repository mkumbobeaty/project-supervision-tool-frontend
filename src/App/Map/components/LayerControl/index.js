import React, {useState} from 'react';
import LayerControlIcon from '../../../../assets/icons/geo-node-layers.svg';
import './styles.css';
import {Drawer} from "antd";
import { CloseOutlined } from '@ant-design/icons';
import DataSetsMenuItemDetails from "../SideNav/components/NavItemDetails/components/DataSetsMenuItemDetails";


const LayerControl = () => {
    const [showSideNav, setShowSideNav] = useState(false);
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
                closeIcon={<CloseOutlined />}
            >
                <DataSetsMenuItemDetails />
            </Drawer>
        </>
    );
}

export default LayerControl;
