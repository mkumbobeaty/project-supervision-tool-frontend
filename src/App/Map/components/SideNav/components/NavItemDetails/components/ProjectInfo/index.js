import React from "react";
import {Button} from 'antd';
import {LeftOutlined} from '@ant-design/icons';
import './styles.css';
import {isoDateToHumanReadableDate, moneyFormat} from "../../../../../../../../Util";
import SummarySection from "../SummarySection";

function ProjectInfo({project}) {

    const items = project?.sub_projects.map(({name, id}) => ({name, id}))

    return project ? (
        <div className="ProjectInfo">
            <section className="top-section">
                <div className='project-title'>
                    <div>{project.name}</div>
                    <small>({project.id})</small>
                </div>
                <div className="back-button"><a> <LeftOutlined style={{fontSize: 10}}/> <span>Back</span></a></div>
            </section>
            <hr/>
            <section className="sector">
                Sector: Transportation
            </section>
            <hr/>
            <section>{project.description}</section>
            <section className="project-highlights">
                <article>
                    <div>
                        <span title="TOTAL PROJECT COST">TOTAL PROJECT COST</span><br/>
                        <b>{project?.details?.total_project_cost?.currency.iso} {moneyFormat(project?.details?.total_project_cost?.amount)}</b>
                    </div>
                    <div>
                        <span title="TOTAL COMMITMENT AMOUNT">TOTAL COMMITMENT AMOUNT </span><br/>
                        <b> {project?.details?.commitment_amount?.currency.iso} {moneyFormat(project?.details?.commitment_amount?.amount)}</b>
                    </div>
                </article>
                <article>
                    <div>
                        <span>APPROVAL DATE</span><br/>
                        <b>{isoDateToHumanReadableDate(project?.details?.approval_date)}</b>
                    </div>
                    <div>
                        <span>CLOSING DATE</span><br/>
                        <b>{isoDateToHumanReadableDate(project?.details?.closing_date)}</b>
                    </div>
                </article>
                <article>
                    <div>
                        <span>PROJECT STATUS</span><br/>
                        <b>Active</b>
                    </div>
                    <div>
                        <span>PROJECT LOCATIONS</span><br/>
                        <b>{project?.locations.length}</b>
                    </div>
                </article>
            </section>
            <section>
                <SummarySection sectionName="Sub Projects" items={items}/>
            </section>
            <section className="link-actions">
                <Button><a>VIEW FULL PROJECT</a></Button>
            </section>
        </div>
    ) : '';
}

export default ProjectInfo;
