import {Popover} from "antd";
import {CloseOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import React from "react";
import LayerItemActions from "./components/LayerItemActions";
import LayerItemDetails from "./LayerItemDetails";

function LayerItem ({ layer}) {

    return (
        <div className='DataSet'>
            <Popover
                className='data-set-info'
                content={<LayerItemDetails layer={layer}/>}
                title={<b>Data Set Details</b>}
                placement="right"
                trigger="click"
            >
                <InfoCircleTwoTone twoToneColor="#0f6788"/>
            </Popover>
            <div className='data-set-name-source'>
                <div title={layer.name}>{layer.name}</div>
            </div>
            <LayerItemActions layer={layer} />
        </div>
    );
}

export default LayerItem;
