import React from "react";
import PropTypes from 'prop-types';

import './styles.css';
import {LeftOutlined} from "@ant-design/icons";
import {moneyFormat} from "../../../../../../../../../../Util";

function ProjectOverviewTable({data}) {

    const renderData = (items) => items.map(({title, value}) => (
        <article>
            <div>{title}</div>
            <div className='value'>{value}</div>
        </article>
    ));
    return (
        <div className='ProjectOverviewTable'>
            { renderData(data)}
        </div>
    );
}

const getCommitmentAmount = ({ commitment_amount }) => {
    const { iso, total } = commitment_amount;
    const  money = moneyFormat(total);
    return `${iso} ${money}`;
}

function NationalProjectsOverview({ projectsStatistics }) {
    const commitmentAmount = projectsStatistics ? getCommitmentAmount(projectsStatistics) : '';

    const data = projectsStatistics ? [
        {title: 'Projects', value: projectsStatistics.projects},
        {title: 'Commitment Amount', value: commitmentAmount},
        {title: 'Regions', value: projectsStatistics.regions},
    ] : [];
    return (
        <div className='NationalProjectsOverview'>
            <section className='title-and-back-button'>
                <div>National Overview</div>
                <div className="back-button">
                    <a>
                        <LeftOutlined style={{fontSize: 10}}/>
                        <span>Back</span>
                    </a>
                </div>
            </section>
            <section className='project-over-view-table'>
                <ProjectOverviewTable data={data}/>
            </section>
        </div>
    );

}

export default NationalProjectsOverview;

NationalProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.bool.isRequired
}
