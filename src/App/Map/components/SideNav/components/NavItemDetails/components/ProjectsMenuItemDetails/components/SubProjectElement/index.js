import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import BackLink from "../BackLink";
import './styles.css';
import CustomGridList from "../CustomGridList";
import PredefinedFilter from "../PredefinedFilter";
import LongActionButton from "../LongActionButton";
import {mapActions} from "../../../../../../../../duck";
import {bindActionCreators} from "redux";
import {projectSelectors} from "../../../../../../../../../Projects/duck";


/**
 * @function
 * @name mapToSideMenuObject
 * @description helper function that maps complex subProjectElement object to a simple object
 *  for displaying
 *  @param subProjectElement
 *  @return {Object}
 */
const mapToSideMenuObject = ({ name, description , progress}) => {
    const customGridListData = [
        {title: 'ACTUAL PROGRESS', value: `${progress.actual}%`},
        {title: 'PLANNED PROGRESS', value: `${progress.planned }%`},
    ];

    return {
        description,
        customGridListData,
        name,
    };

}

/**
 * @function
 * @name SubProjectElementDetails
 * @description renders sub project details
 */
function SubProjectElementDetails({goBackFromSubProjectElementToProjectDetails, subProjectElement}) {
    const handleGoBack = () => goBackFromSubProjectElementToProjectDetails(subProjectElement?.sub_project_id);

    const sideMenuObj = subProjectElement ? mapToSideMenuObject(subProjectElement) : null;

    const handleOnclickSubProjectElement = (id) => console.log(id);
    const viewFullSubProjectElementDetails = () => console.log('View full sub project details clicked');


    return (
        <div className='SubProjectElementDetails'>
            <section className="top-section">
                <div className='title'>
                    <div title='Sample Subproject'>{sideMenuObj?.name}</div>
                </div>
                <BackLink goBack={handleGoBack}/>
            </section>
            <hr/>
            {/*<section>*/}
            {/*    <div><b>Progress:</b></div>*/}
            {/*</section>*/}
            <section>{sideMenuObj?.description}</section>
            {sideMenuObj?.customGridListData ? <CustomGridList data={sideMenuObj?.customGridListData}/> : ''}
            <LongActionButton
                handleOnclick={viewFullSubProjectElementDetails}
                title='view full sub-project element details'
            />
        </div>
    );

}

const mapStateToProps = (state) => ({
    subProjectElement: projectSelectors.getSubProjectElementSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    goBackFromSubProjectToProjectDetails: bindActionCreators(mapActions.backFromSubProjectToProjectDetails, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(SubProjectElementDetails);

SubProjectElementDetails.propTypes = {
    goBackFromSubProjectToProjectDetails: PropTypes.func.isRequired,
    subProjectElement: PropTypes.object
}

SubProjectElementDetails.defaultPropTypes = {
    subProjectElement: null,
}
