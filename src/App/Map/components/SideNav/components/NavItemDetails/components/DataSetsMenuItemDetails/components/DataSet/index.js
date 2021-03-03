import React, {useState} from "react";
import { ExclamationCircleOutlined, CloseOutlined } from '@ant-design/icons';

import './styles.css';

function DataSetAction() {
    const [close, setClose] = useState(false);

    return (
        <div className='DataSetAction'>
            <div
                className='add'
                style={{'display': close ? 'none' : 'block'}}
                onClick={() => setClose(true)}
            >
                Add
            </div>
            <CloseOutlined
                className='close'
                style={{'display': close ? 'block': 'none'}}
                onClick={() => setClose(false)}
            />
        </div>
    )
}


function DataSet() {

    return (
        <div className='DataSet'>
            <div className='data-set-info'>
                <ExclamationCircleOutlined />
            </div>
            <div className='data-set-name-source'>
                <div>Agricultural land (% of land area)</div>
                <div>Source: World Development Indicators</div>
            </div>
            <DataSetAction />
        </div>

    )

}



export default DataSet
