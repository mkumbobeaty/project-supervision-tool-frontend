import React from 'react';
import './styles.css'
import CustomSearch from "./components/CustomSearch";
import ProjectsSummarySections from "./components/ProjectsSummarySections";
import ProjectStatistics from './components/ProjectStatistics';

const styles = {width: '16vw'}

function NavItemDetails({activeItem, projectsOverview}) {



return (
        <div
            style={activeItem === '' ? {display: 'none'} : styles}
            className='NavItemDetails'
        >
            <section className='overview'>
                <CustomSearch/>
                <ProjectStatistics />
                { projectsOverview.length > 0 ? <ProjectsSummarySections projectsOverview={projectsOverview}/>: ''}

            </section>
        </div>
    );
}

export default NavItemDetails;
