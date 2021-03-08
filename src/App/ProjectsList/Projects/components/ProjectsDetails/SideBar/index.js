import React from "react";
import { moneyFormat } from "../../../../../../Util";

const getCommitmentAmount = (data) => {
    const { amount, currency } = data
    const { iso } = currency;
    const money = moneyFormat(amount);
    return `${iso} ${money}`;
}


const SidebarSection = ({ project }) => {

    const commitmentAmount = project?.details?.commitment_amount ? getCommitmentAmount(project?.details?.commitment_amount) : 'N/A';
    const totalProjectCost = project?.details.total_project_cost ? getCommitmentAmount(project.details.total_project_cost) : 'N/A';

    return (
        <div>
            <span >
                <h4>Status</h4>
                <p>{project?.details ? project?.details.status : 'N/A'}</p>
                {/* <p>{project?.details ? project?.sub_project.total : 'N/A'}</p> */}
            </span>
            <span >
                <h4>Approval date</h4>
                <p>{project?.details ? new Date(project?.details.approval_date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</p>
            </span>
            <span >
                <h4>Closing date</h4>
                <p>{project?.details ? new Date(project?.details.closing_date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</p>
            </span>
            <span >
                <h4>Project Total Cost</h4>
                <p>{totalProjectCost}</p>
            </span>
            <span >
                <h4>Commitment Amount</h4>
                <p>{commitmentAmount}</p>
            </span>
            <span >
                <h4>Project Lead</h4>
                <p>{project?.leaders ? project.leaders.map(({ first_name, last_name }, index) => { return (index ? ", " : "") + first_name + " " + last_name }) : 'N/A'}</p>

            </span>
            <span >
                <h4>Project Coordinator</h4>
                <p>{project?.details ? project?.details.implementing_agency.focalPerson.first_name + " " + project?.details.implementing_agency.focalPerson.last_name : 'N/A'}</p>
            </span>

            <span >
                <h4>Implementing Agency</h4>
                <p>{project?.details ? project?.details.implementing_agency.name : 'N/A'}</p>
            </span>
            <span >
                <h4>Project locations</h4>
                {project?.locations ? project?.locations.map(location => {
                    console.log("give" + location.level)
                    if (location.level === 'district') {
                        return (
                            <p>{location.region.name},{location.district.name}</p>
                        )
                    }
                    else {
                        return <p>{location.region.name}</p>

                    }

                }) : 'N/A'}
            </span>
            <span >
                <h4>Last updated</h4>
                <p>{project?.details ? new Date(project?.details.approval_date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</p>
            </span>
        </div>

    )
}

export default SidebarSection;