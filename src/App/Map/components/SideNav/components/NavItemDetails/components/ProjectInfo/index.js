import React from "react";
import {Button} from 'antd';
import {LeftOutlined} from '@ant-design/icons';
import './styles.css';

function ProjectInfo({project}) {

    return project ? (
        <div className="ProjectInfo">
            <section className="top-section">
                <div className='project-title'>
                    <div>Tanzania - Intermodal & Rail Development Project</div>
                    <small>P127241</small>
                </div>

                <div className="back-button"><a> <LeftOutlined/> <span>Back</span></a></div>
            </section>
            <hr/>
            <section className="sector">
                Sector: Transportation
            </section>
            <hr/>
            <section>
                The project development objective is to deliver a reliable open access infrastructure on the Dar
                es Salaam-Isaka rail segment.
            </section>
            <section className="project-highlights">
                <article>
                    <div>
                        <span>COUNTRY</span><br/>
                        <b>Tanzania</b>
                    </div>
                    <div>
                        <span>TOTAL COMMITMENT AMOUNT </span><br/>
                        <b>$ 300m</b>
                    </div>
                </article>
                <article>
                    <div>
                        <span>APPROVAL DATE</span><br/>
                        <b>24 Apr 2014</b>
                    </div>
                    <div>
                        <span>CLOSING DATE</span><br/>
                        <b>31 May 2021</b>
                    </div>
                </article>
                <article>
                    <div>
                        <span>PROJECT STATUS</span><br/>
                        <b>Active</b>
                    </div>
                </article>
            </section>
            <section className="link-actions">
                <Button><a>VIEW FULL PROJECT</a></Button>
            </section>
        </div>
    ) : '';
}

export default ProjectInfo;
