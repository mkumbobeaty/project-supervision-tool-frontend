import React from "react";

const SidebarSection = ({ project }) => {

    return (
        <div>
            <span >
                <h4>Project Id</h4>
                <p>{project ? project?.id : 'N/A'}</p>                                                                                                                                                                                                                                                                                                       {/* <p>{project.id}</p> */}
            </span>
            <span >
                <h4>Status of the Project</h4>
                <p>{project?.details ? project?.details.status.toString() : 'N/A'}</p>
            </span>

            <span >
                <h4>Project Team Leader</h4>
                <p>{project ? project?.id : 'N/A'}</p>                                                                                                                                                                                                                                                                                                       {/* <p>{project.id}</p> */}
            </span>

            <span >
                <h4>Borrower</h4>
                <p>{project?.details ? project?.details.borrower.name : 'N/A'}</p>
            </span>
            <span >
                <h4>Commitment Amount</h4>
                <p>{project?.details ? project?.details.commitment_amount.amount : 'N/A'}</p>
            </span>
            <span >
                <h4>Total Project Cost</h4>
                <p>{project?.details ? project?.details.total_project_cost.amount : 'N/A'}</p>
            </span>
            <span >
                <h4>Project locations</h4>
                {project?.locations ? project?.locations.map(location => {
                    if (location.level === 'district') {
                        return (
                            <p>-{location.region.name},{location.district.name}</p>
                        )
                    }
                    else {
                        return <p> - {location.region.name}</p>

                    }

                }) : 'N/A'}
            </span>
            <span >
                <h4>Country/Project region</h4>
                <p>{project?.details ? project?.details.country.name : 'N/A'},{project?.details?.project_region}</p>
            </span>
        </div>

    )
}

export default SidebarSection;