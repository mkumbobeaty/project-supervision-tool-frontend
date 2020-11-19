import React from 'react';
import {Button} from 'antd';
import './styles.css'
import CustomSearch from "./components/CustomSearch";
import SummarySection from "./components/SummarySection";

const styles = {width: '16vw'}

function NavItemDetails({activeItem}) {
    const projectSummaryDetails = [
        {
            title: 'Project Status',
            data: [
                {name: 'Active', count: 120},
                {name: 'Closed', count: 30},
                {name: 'Dropped', count: 4},
                {name: 'Pipeline', count: 6},
            ]},
        {
            title: 'Project Sectors',
            data: [
                {name: 'Urban Transport', count: 30},
                {name: 'Water Supply, Sanitation and  waste management', count: 10},
                {name: 'Sub-National Government', count: 50},
                {name: 'Other Transportation', count: 80},
                {name: 'Other Public Administration', count: 200},
            ]},
        {
            title: 'Project Themes',
            data: [
                {name: 'Public Sector Management', count: 20},
                {name: 'Urban and Rural Development', count: 90},
                {name: 'Environment and Natural Resource Management', count: 250}
            ]},

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
