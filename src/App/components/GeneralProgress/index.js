import React from 'react';
import ProgressBar from "../Progress";

const GeneralProgress = ({
        commitmentAmount,
        completed,
        remained,
        bgcolor,
        approval_date,
        totalProjectCost,
        closing_date,
        progress_title,
        progress_initial_title,
        progress_final_title,
        item    
    },
    i
) => {

    // calculating elapsed time in a item
const approvalDate = new Date(item?.approval_date);
const closingDate = new Date(item?.closing_date);
const total_time = parseInt((closingDate - approvalDate) / (1000 * 60 * 60 * 24), 10); 

let today_date = new Date().toLocaleDateString();
const convertedTodayDate = new Date(today_date);
const time_used = parseInt(( closingDate - convertedTodayDate) / (1000 * 60 * 60 * 24), 10);

const elapsedTime = (100 * time_used / total_time).toFixed(1);
const usedTime = (100 - elapsedTime).toFixed(1);
  
    return (
                <section>
                    <div>
                        <h5 className="text-blue">Financial Progress</h5>
                        <ProgressBar
                            key={i}
                            bgcolor={bgcolor}
                            completed={completed}
                            remain={remained}
                            start_value="0%"
                            end_value={commitmentAmount}
                            progress_final_title="Disbursment gap"
                            progress_initial_title="Total Disbursed"
                            progress__initial_value={totalProjectCost}
                            progress_final_value={`${remained}%`}
                        />
                    </div>
                    <div>
                     <h5 className="text-blue">{progress_title}</h5>
                        <ProgressBar
                            key={i}
                            bgcolor={bgcolor}
                            completed={usedTime}
                            remain={elapsedTime}
                            progress_final_title={progress_final_title}
                            progress_initial_title={progress_initial_title}
                            progress__initial_value={approval_date}
                            progress_final_value={closing_date}
                        />
                    </div>
                </section>
    )
}

export default GeneralProgress;