import React from "react";
import { isoDateToHumanReadableDate, moneyFormat } from "../../../Util";

const mapDetailsPopup = ({ project }) => {
    const getCommitmentAmount = (data) => {
        const { amount, currency } = data
        const { iso } = currency;
        const money = moneyFormat(amount);
        return `${iso} ${money}`;
    }

    const commitmentAmount = project?.details?.commitment_amount ? getCommitmentAmount(project?.details?.commitment_amount) : 'N/A';
    const totalProjectCost = project?.details.total_project_cost ? getCommitmentAmount(project.details.total_project_cost) : 'N/A';
    return (
        <section className="mapPopup">
            <h4>{project?.name}</h4>
            <hr />
            <div className="projectDetail">
                <span >
                    <h4>World Bank Project ID</h4>
                    <p>{project ? project?.id : 'N/A'}</p>
                </span>
                <div className="timeFrame">
                    <span>
                        <h4>Start Date</h4>
                        <p>{project?.details ? isoDateToHumanReadableDate(project?.details?.approval_date) : 'N/A'}</p>
                    </span>
                    <span>
                        <h4>Last updated</h4>
                        <p>{project?.details ? isoDateToHumanReadableDate(project?.details?.closing_date) : 'N/A'}</p>
                    </span>
                </div>
                <span>
                    <h4>Implementing Agency</h4>
                    <p>{project?.details ? project?.details.implementing_agency.name : 'N/A'}</p>
                </span>
                <span>
                    <h4>Project Total Cost</h4>
                    <p>{totalProjectCost}</p>
                </span>
                <span>
                    <h4>Commitment Amount</h4>
                    <p>{commitmentAmount}</p>
                </span>
            </div>
        </section>
    )
}
