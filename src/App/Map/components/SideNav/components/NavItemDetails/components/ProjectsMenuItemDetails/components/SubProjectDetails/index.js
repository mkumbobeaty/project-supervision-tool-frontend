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
import {projectActions, projectSelectors} from "../../../../../../../../../Projects/duck";
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
 * @name SubProjectDetails
 * @description renders sub project details
 */
function SubProjectDetails({goBackFromSubProjectToProjectDetails, subProject, getSubProjectElement}) {
    const handleGoBack = () => goBackFromSubProjectToProjectDetails(subProject?.project_id);

    const sideMenuObj = subProject ? mapToSideMenuObject(subProject) : null;

    const handleOnclickSubProjectElement = (id) => getSubProjectElement(id);
    const viewFullSubProjectDetails = () => console.log('View full sub project details clicked');


    return (
        <div className='SubProjectDetails'>
            <section className="top-section">
                <div className='title'>
                    <div title='Sample Subproject'>{sideMenuObj?.name}</div>
                </div>
                <BackLink goBack={handleGoBack}/>
            </section>
            <hr/>
            <section>
                <div><b>contractor:</b> {sideMenuObj?.contractor}</div>
                <div><b>consultant:</b> {sideMenuObj?.consultant}</div>
                <div><b>LGA:</b> {sideMenuObj?.lga}</div>
            </section>
            <hr/>
            <section>{sideMenuObj?.description}</section>
            {sideMenuObj?.customGridListData ? <CustomGridList data={sideMenuObj?.customGridListData}/> : ''}
            <LongActionButton
                handleOnclick={viewFullSubProjectDetails}
                title='view full sub-project details'
            />

            {sideMenuObj?.subProjectElementsData ? <PredefinedFilter
                data={sideMenuObj?.subProjectElementsData}
                filterTitle='Sub Project Elements'
                config={{
                    filterLeftTitle: 'Progress',
                    filterRightTitle: 'Name'
                }}
                handleOnclickFilterItem={handleOnclickSubProjectElement}
            /> : ''}
        </div>
    );
}

const mapStateToProps = (state) => ({
    subProject: projectSelectors.getSubProjectSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    goBackFromSubProjectToProjectDetails: bindActionCreators(mapActions.backFromSubProjectToProjectDetails, dispatch),
    getSubProjectElement: bindActionCreators(projectActions.getSubProjectElementStart, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(SubProjectDetails);

SubProjectDetails.propTypes = {
    goBackFromSubProjectToProjectDetails: PropTypes.func.isRequired,
    getSubProjectElement: PropTypes.func.isRequired,
    subProject: PropTypes.object
}

SubProjectDetails.defaultPropTypes = {
    subProject: null,
}
