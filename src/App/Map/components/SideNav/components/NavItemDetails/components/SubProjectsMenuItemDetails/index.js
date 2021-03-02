import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SubProjectsOverview } from "./components/SubProjectsOverview";
import { mapSubProjectSelectors } from "../../../../../../../../redux/modules/map/subProjects";

/**
 * @function
 * @name SubProjectsMenuItemDetails
 * @description shows project menu item details such as project overview
 * and project details
 */
function SubProjectsMenuItemDetails({ isShowSubProjectOverview }) {
    debugger
    return (
        <>
            {isShowSubProjectOverview ? <SubProjectsOverview /> : ''}
        </>
    );

}

const mapStateToProps = state => ({
    isShowSubProjectOverview: mapSubProjectSelectors.showSubProjectOverview(state),
});



export default connect(mapStateToProps)(SubProjectsMenuItemDetails);

SubProjectsMenuItemDetails.propTypes = {
    isShowSubProjectOverview: PropTypes.bool.isRequired,
}
