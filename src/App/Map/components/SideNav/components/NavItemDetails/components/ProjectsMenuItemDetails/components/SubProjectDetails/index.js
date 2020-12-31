import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BackLink from "../BackLink";
import './styles.css';
import CustomGridList from "../CustomGridList";
import PredefinedFilter from "../PredefinedFilter";
import LongActionButton from "../LongActionButton";
import {mapActions} from "../../../../../../../../duck";
import {bindActionCreators} from "redux";

/**
 * @function
 * @name SubProjectDetails
 * @description renders sub project details
 */
function SubProjectDetails({ goBackFromSubProjectToProjectDetails, subProject}) {
    const handleGoBack = () =>  goBackFromSubProjectToProjectDetails(subProject.project_id);
    const customGridListData = [
        {title: 'START DATE', value: 'January 30 2020'},
        {title: 'closing date', value: 'December 10 2020'},
        {title: 'phase', value: 'phase 1' },
        {title: 'stage', value: 'Implementation' },
    ];

    const subProjectElementsData = [
        {title: 'Kinondoni road', value: '30%', id: 'Kinondoni road' },
        {title: 'Tandale bus stop', value: '70%', id: 'bus ' },
        {title: 'Kiwalani market', value: '50%' , id: 'market' },
        {title: 'Nyana road', value: '100%', id: 'nyana' },
    ];


    const handleOnclickSubProjectElement = (id) => console.log(id);
    const viewFullSubProjectDetails = () => console.log('View full sub project details clicked');


    return (
        <div className='SubProjectDetails'>
            <section className="top-section">
                <div className='title'>
                    <div title='Sample Subproject'>Sample Subproject</div>
                </div>
                <BackLink goBack={handleGoBack}/>
            </section>
            <hr/>
            <section>
                <div><b>contractor:</b> Simon Group authority</div>
                <div><b>consultant:</b> Tambua technologies</div>
                <div><b>LGA:</b> Temeke municipal</div>
            </section>
            <hr/>
            <section>Sub project description</section>
            <CustomGridList data={customGridListData} />
            <LongActionButton
                handleOnclick={viewFullSubProjectDetails}
                title='view full sub-project details'
            />

            <PredefinedFilter
                data={subProjectElementsData}
                filterTitle='Sub Project Elements'
                config={{
                    filterLeftTitle: 'Progress',
                    filterRightTitle: 'Name'
                }}
                handleOnclickFilterItem={handleOnclickSubProjectElement}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    subProject: {project_id: 'kozey.kiera'}
});

const mapDispatchToProps = (dispatch) => ({
    goBackFromSubProjectToProjectDetails: bindActionCreators(mapActions.backFromSubProjectToProjectDetails, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(SubProjectDetails);

SubProjectDetails.propTypes = {
    goBackFromSubProjectToProjectDetails: PropTypes.func.isRequired
}
