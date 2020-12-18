import React from "react";
import BackLink from "../BackLink";
import './styles.css';
import OverviewTable from "../OverviewTable";
import {moneyFormat} from "../../../../../../../../../../Util";

/**
 * @function
 * @name SubProjectDetails
 * @description renders sub project details
 */
function SubProjectDetails() {
    const handleGoBack = () =>  { console.log('SubProjectDetails')}
    const data = [
        {title: 'Contracts', value: 4},
        {title: 'Human resources', value: 10},
        {title: '', value: 10},
    ];

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
            <section className='sub-project-highlights'>

            </section>
        </div>
    );
}

export default SubProjectDetails;
