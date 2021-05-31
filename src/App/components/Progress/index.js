import React from "react";
import "./styles.css";


const ProgressBar = (
  {
    bgcolor,
    completed,
    remain, title,
    start_value,
    end_value,
    progress_initial_title,
    progress__initial_value,
    progress_final_value,
    progress_final_title }
) => {

  const containerStyles = {
    width: '100%',
    backgroundColor: "#888b8d",
    display: 'flex'
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
  }
  const remainStyles = {
    height: '100%',
    width: `${remain}%`,
    textAlign: 'right'

  }
  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <section className="projectsProgress ">
      <h5 className="text-blue">{title}</h5>
      <div className="progress">
        <div style={containerStyles} >
          <div style={fillerStyles}>
            <span style={labelStyles}>{`${completed}%`}</span>
          </div>
          <div style={remainStyles}>
            <span style={labelStyles}>{`${remain}%`}</span>
          </div>
        </div>
      </div>

      <div className="flex-constant">
        <span>
          <p>{start_value}</p>
          <h4>{progress_initial_title}</h4>
          <p>{progress__initial_value}</p>
        </span>
        <span>
          <p>{end_value}</p>
          <h4>{progress_final_title}</h4>
          <p>{progress_final_value}</p>
        </span>
      </div>
    </section>
  );
};

export default ProgressBar;
