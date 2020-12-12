import React from "react";
import PropTypes from 'prop-types';
import SideNavItemOverview from "../../../SideNavItemOverview";
import {moneyFormat} from "../../../../../../../../../../Util";
import './styles.css';


/**
 * @function
 * @name RegionalProjectsOverview
 * @description renders project overview at regional level
 */
function RegionalProjectsOverview({
                                      regionProjectStatistics,
                                      regionProjects,
                                      getProject,
                                      setShowNationalOverview,
                                      setShowRegionalOverview,
                                      clearRegionalProjects,
                                  }) {

    // generate project commitment amount string
    const getCommitmentAmount = ({commitment_amount}) => {
        const {iso, total} = commitment_amount;
        const money = moneyFormat(total);
        return `${iso} ${money}`;
    }

    // data tobe displayed  on the overview filter
    const overViewData = regionProjectStatistics ? [
        {title: 'Projects', value: regionProjectStatistics.projects},
        {title: 'Commitment Amount', value: getCommitmentAmount(regionProjectStatistics)},
        {title: 'Sub Projects', value: regionProjectStatistics.sub_projects},
    ] : [];


    // config data from the predefined filter
    const filterConfig = {filterTitle: 'Projects', filterRightTitle: 'Projects', filterLeftTitle: 'SubProjects'}

    // prepare data to display on predefined filter
    const filterData = regionProjects.length > 0 ? regionProjects.map(({name, sub_projects, id}) =>
        ({title: name, value: `${sub_projects.length}`, id})) : '';

    const handleOnClickFilterItem = (id) => getProject(id);
    const handleGoBack = () => {
        setShowNationalOverview(true);
        setShowRegionalOverview(false);
        clearRegionalProjects();
    }


    return (
        <SideNavItemOverview
            overViewData={overViewData}
            predefinedFilterConfig={filterConfig}
            predefinedFilterData={filterData}
            title='Regional Overview'
            handleOnclickFilterItem={handleOnClickFilterItem}
            goBack={handleGoBack}
        />
    );

}

export default RegionalProjectsOverview;

RegionalProjectsOverview.propTypes = {
    regionProjectStatistics: PropTypes.object.isRequired,
    setShowNationalOverview: PropTypes.func.isRequired,
    setShowRegionalOverview: PropTypes.func.isRequired,
    clearRegionalProjects: PropTypes.func.isRequired,
    regionProjects: PropTypes.array.isRequired,
    getProject: PropTypes.func.isRequired,
}
