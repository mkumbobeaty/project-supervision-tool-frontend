import React from 'react';
import {Button} from 'antd';
import './styles.css'
import CustomSearch from "./components/CustomSearch";
import SummarySection from "./components/SummarySection";

const styles = {width: '16vw'}

function NavItemDetails({activeItem, projectsOverview}) {
    const projectSummaryDetails = [
        {
            title: 'Regions',
            data: projectsOverview.map(({region_name, projects_count}) => ({ name: region_name, count: projects_count}))}
    ];

    const renderProjectSummaryDetails = (arr) => arr.map(({title, data}) =>
        <SummarySection sectionName={title} items={data}/>
    );

    return (
        <div
            style={activeItem === '' ? {display: 'none'} : styles}
            className='NavItemDetails'
        >
            <section className='overview'>
                <CustomSearch/>
                <section className='overview-details'>
                    <div className='overview-title'>Projects Overview</div>
                    <Button type="primary" style={{fontSize: 10}} size='small'>FILTERS</Button>
                </section>
                <section className='overview-table'>
                    <div className='overview-table-item'>
                        <div title='Total projects count'>Projects</div>
                        <div>2,859</div>
                    </div>
                    <div className='overview-table-item'>
                        <div title='Total Commitment Amount'>Com.Amt</div>
                        <div>$295.74b</div>
                    </div>
                    <div className='overview-table-item'>
                        <div title='Projects Locations at regional level'>Regions</div>
                        <div>18,238</div>
                    </div>
                    <div className='overview-table-item'>
                        <div title='Projects locations at district level'>Districts</div>
                        <div>134</div>
                    </div>
                </section>
                {renderProjectSummaryDetails(projectSummaryDetails)}
            </section>
        </div>
    );
}

export default NavItemDetails;
