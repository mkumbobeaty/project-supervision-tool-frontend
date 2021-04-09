import { Progress } from 'antd';
import React from 'react';
import progress from '../../../../../API/progress';
import "./styles.css";


const ProjectsProgress = ({
    title,
    percentage,
    trailColor,
    start_value,
    end_value,
    progress__initial_value,
    progress_final_title,
    progress_final_value,
    progress_initial_title
}) => {
    return (
        <section className="projectsProgress">
            <h5>{title}</h5>
            <Progress
                className="progress"
                strokeLinecap="square"
                percent={percentage}
                strokeWidth="20px"
                strokeColor="#0f6788"
                trailColor={trailColor}
                showInfo={false}
            />
            <div className="progress-value">
                <p>{start_value}</p>
                <p>{end_value}</p>
            </div>
            <div className="progress-value">
                <span>
                    <h4>{progress_initial_title}</h4>
                    <p>{progress__initial_value}</p>
                </span>
                <span>
                    <h4>{progress_final_title}</h4>
                    <p>{progress_final_value}</p>
                </span>
            </div>
        </section>
    )
}

export default ProjectsProgress
