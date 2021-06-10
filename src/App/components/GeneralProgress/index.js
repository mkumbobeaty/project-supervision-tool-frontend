import React from 'react';
import ProgressBar from "../Progress";



const GeneralProgress = ({
        commitmentAmount,
        approval_date,
        totalProjectCost,
        closing_date,
        progress_title,
        progress_initial_title,
        progress_final_title
    }
) => {

    const testData = [
        { bgcolor: "#0f6788", completed: 60, remain: 40 },
    ];
    return (
        <div>

            {testData.map((item, idx) => (
                <section>
                    <div>
                        <h5 className="text-blue">Financial Progress</h5>
                        <ProgressBar
                            key={idx}
                            bgcolor={item.bgcolor}
                            completed={item.completed}
                            remain={item.remain}
                            start_value="0%"
                            end_value={commitmentAmount}
                            progress_final_title="Disbursment gap"
                            progress_initial_title="Total Disbursed"
                            progress__initial_value={totalProjectCost}
                            progress_final_value={`${item.remain}%`}
                        />
                    </div>
                    <div>
                     <h5 className="text-blue">{progress_title}</h5>
                        <ProgressBar
                            key={idx}
                            bgcolor={item.bgcolor}
                            completed={item.completed}
                            remain={item.remain}
                            progress_final_title={progress_final_title}
                            progress_initial_title={progress_initial_title}
                            progress__initial_value={approval_date}
                            progress_final_value={closing_date}
                        />
                    </div>
                </section>

            ))}

        </div>
    )
}

export default GeneralProgress;