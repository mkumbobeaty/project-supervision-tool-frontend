import React from "react";
import TopSection from "../TopSection";
import DataSet from "./components/DataSet";

import './styles.css'

function DataSetsMenuItemDetails() {

    return (
        <>
            <TopSection searchPlaceHolder="Search Data " title="DATA SETS (1434)" />
            <div className='data-set-items'>
                <DataSet />
                <DataSet />
                <DataSet />
                <DataSet />
                <DataSet />
                <DataSet />
                <DataSet />
                <DataSet />
                <DataSet />
            </div>
        </>
    )

}

export default DataSetsMenuItemDetails
