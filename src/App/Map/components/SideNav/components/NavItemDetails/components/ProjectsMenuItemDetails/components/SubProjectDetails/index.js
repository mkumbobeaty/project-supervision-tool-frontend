import React from "react";
import BackLink from "../BackLink";
import './styles.css';
import CustomGridList from "../CustomGridList";
import PredefinedFilter from "../PredefinedFilter";
import LongActionButton from "../LongActionButton";

/**
 * @function
 * @name SubProjectDetails
 * @description renders sub project details
 */
function SubProjectDetails() {
    const handleGoBack = () =>  { console.log('SubProjectDetails')}
    const customGridListData = [
        {title: 'START DATE', value: 'January 30 2020'},
        {title: 'closing date', value: 'December 10 2020'},
        {title: 'phase', value: 'phase 1' },
        {title: 'stage', value: 'Implementation' },
    ];

    const subProjectElementsData = [
        {title: 'Kinondoni road', value: 'Completed', id: 'Kinondoni road' },
        {title: 'Tandale bus stop', value: 'On progress', id: 'bus ' },
        {title: 'Kiwalani market', value: 'Completed' , id: 'market' },
        {title: 'Nyana road', value: 'On progress', id: 'nyana' },
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
                    filterLeftTitle: 'Status',
                    filterRightTitle: 'Name'
                }}
                handleOnclickFilterItem={handleOnclickSubProjectElement}
            />
        </div>
    );
}

export default SubProjectDetails;
