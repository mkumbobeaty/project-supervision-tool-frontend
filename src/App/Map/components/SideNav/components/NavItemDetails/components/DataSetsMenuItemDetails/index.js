import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import TopSection from "../TopSection";
import DataSet from "./components/DataSet";

import './styles.css'
import {mapDataSetsActions} from "../../../../../../../../redux/modules/map/dataSets";

function DataSetsMenuItemDetails({ getLayers}) {
    useEffect(() => {
      getLayers();
    }, []);

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

DataSetsMenuItemDetails.propTypes = {
    getLayers: PropTypes.func.isRequired
}



const mapDispatchToProps = (dispatch) => ({
    getLayers: bindActionCreators(mapDataSetsActions.getGeonodeLayersStart, dispatch),
});

export default connect(null, mapDispatchToProps)(DataSetsMenuItemDetails)
