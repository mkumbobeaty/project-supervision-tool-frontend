import React from 'react';
import PropTypes from 'prop-types';
import NavigationMenu from '../components/NavigationMenu';
import subProjectsIcon from '../../assets/icons/sub-projects.svg';
import modules from '../../modules.json';


/* constants */
const routes = [

    {
        name: 'Sub Projects',
        path: '/sub_projects',
        icon: subProjectsIcon,
        description: modules.initiatives,
    },
    {
        name: 'Procuring Entities',
        path: '/sub_projects',
        icon: subProjectsIcon,
        description: modules.initiatives,
    },
    {
        name: 'Tickets',
        path: '/sub_projects',
        icon: subProjectsIcon,
        description: modules.initiatives,
    },
    {
        name: 'Agreed Actions',
        path: '/sub_projects',
        icon: subProjectsIcon,
        description: modules.initiatives,
    },
    {
        name: 'Monitoring & Evaluation',
        path: '/sub_projects',
        icon: subProjectsIcon,
        description: modules.initiatives,
    },
];

/**
 * @function
 * @name HomeNavMenu
 * @description Home component which shows to base navigation menu
 * @param {object} props Component Props
 * @param {object} props.match Match prop from react router
 * @returns {object} Navigation Menu
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const ProjectHomeNavMenu = ({ match }) => (
    <NavigationMenu routes={routes} match={match} />
);

ProjectHomeNavMenu.propTypes = {
    match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};
export default ProjectHomeNavMenu;
