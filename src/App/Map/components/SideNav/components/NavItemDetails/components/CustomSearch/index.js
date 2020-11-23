
import React from 'react';
import {AutoComplete, Input} from "antd";
import './styles.css';


function CustomSearch() {

    return (
        <AutoComplete
            className='CustomSearch'
            dropdownMatchSelectWidth={252}
            style={{ width: '100%' }}
            options={[]}
            onSelect={()=> {}}
            onSearch={() => {}}
        >
            <Input.Search size="large" placeholder="Search Projects" enterButton />
        </AutoComplete>
    );
}

export default CustomSearch;
