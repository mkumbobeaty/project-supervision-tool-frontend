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
import {isoDateToHumanReadableDate} from "../../../../../../../../../../Util";


/**
 * @function
 * @name mapToSideMenuObject
 * @description helper function that maps complex subProject object to a simple object
 *  for displaying
 *  @param subProject
 *  @return {Object}
 */
const mapToSideMenuObject = ({ details, name, description , sub_project_items}) => {
    const contractor = details?.contractor?.name;
    const consultant = details?.supervising_agency?.name;
    const lga = details?.actor?.name;
    const customGridListData = [
        {title: 'START DATE', value: isoDateToHumanReadableDate(details?.start_date)},
        {title: 'closing date', value: isoDateToHumanReadableDate(details?.end_date)},
        {title: 'phase', value: details?.phase?.name },
        {title: 'stage', value: 'Implementation'},
    ];
    const subProjectElementsData = sub_project_items.map(({name, id, progress }) => ({ title: name, value: `${progress.actual}%`, id }));

    return {
        contractor,
        consultant,
        lga,
        description,
        customGridListData,
        subProjectElementsData,
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

    // const sideMenuObj = subProject ? mapToSideMenuObject(subProject) : null;

    // const handleOnclickSubProjectElement = (id) => console.log(id);
    // const viewFullSubProjectElementDetails = () => console.log('View full sub project details clicked');


    // return (
    //     <div className='SubProjectElementDetails'>
    //         <section className="top-section">
    //             <div className='title'>
    //                 <div title='Sample Subproject'>{sideMenuObj?.name}</div>
    //             </div>
    //             <BackLink goBack={handleGoBack}/>
    //         </section>
    //         <hr/>
    //         <section>
    //             <div><b>contractor:</b> {sideMenuObj?.contractor}</div>
    //             <div><b>consultant:</b> {sideMenuObj?.consultant}</div>
    //             <div><b>LGA:</b> {sideMenuObj?.lga}</div>
    //         </section>
    //         <hr/>
    //         <section>{sideMenuObj?.description}</section>
    //         {sideMenuObj?.customGridListData ? <CustomGridList data={sideMenuObj?.customGridListData}/> : ''}
    //         <LongActionButton
    //             handleOnclick={viewFullSubProjectElementDetails}
    //             title='view full sub-project details'
    //         />
    //
    //         {sideMenuObj?.subProjectElementsData ? <PredefinedFilter
    //             data={sideMenuObj?.subProjectElementsData}
    //             filterTitle='Sub Project Elements'
    //             config={{
    //                 filterLeftTitle: 'Progress',
    //                 filterRightTitle: 'Name'
    //             }}
    //             handleOnclickFilterItem={handleOnclickSubProjectElement}
    //         /> : ''}
    //     </div>
    // );

    return (<div>inside sub project element details</div>)
}

const mapStateToProps = (state) => ({
    subProject: projectSelectors.getSubProjectSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    goBackFromSubProjectToProjectDetails: bindActionCreators(mapActions.backFromSubProjectToProjectDetails, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(SubProjectElementDetails);

SubProjectElementDetails.propTypes = {
    goBackFromSubProjectToProjectDetails: PropTypes.func.isRequired,
    subProject: PropTypes.object
}

SubProjectElementDetails.defaultPropTypes = {
    subProject: null,
}
