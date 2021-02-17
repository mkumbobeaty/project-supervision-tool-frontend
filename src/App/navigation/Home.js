import React from 'react';
import PropTypes from 'prop-types';
import dashboardIcon from '../../assets/icons/overview-dashboard.svg';
import resourcesIcon from '../../assets/icons/resources.svg';
import settingsIcons from '../../assets/icons/admin-settings.svg';
import NavigationMenu from '../components/NavigationMenu';
import initiativesIcon from '../../assets/icons/initiatives.svg';
import mapsIcon from "../../assets/icons/maps.svg";
import humanResourcesIcons from '../../assets/icons/human-resources.svg';
import itemsIcons from '../../assets/icons/needs.svg';
import equipmentsIcons from '../../assets/icons/production-capacity.svg';
import contractsIcons from '../../assets/icons/financial-resources.svg';

import modules from '../../modules.json';

/* constants */
const routes = [

  {
    name: 'Projects',
    path: '/projects',
    icon: resourcesIcon,
    description: modules.humanResource,
  },
  {
    name: 'Sub Projects',
    path: '/sub_projects',
    icon: initiativesIcon,
    description: modules.initiatives,
  },
  {
    name: 'Map',
    path: '/map',
    icon: mapsIcon,
    description: modules.map,
  },
  // {
  //   name: 'Sub Project Items',
  //   path: '/sub-project-items',
  //   icon: itemsIcons,
  //   description: modules.map,
  // },
  // {
  //   name: 'Sub Project Equipments',
  //   path: '/sub-project-equipments',
  //   icon: equipmentsIcons,
  //   description: modules.map,
  // },
  // {
  //   name: 'Sub Project Contracts',
  //   path: '/sub-projects-contracts',
  //   icon: contractsIcons,
  //   description: modules.map,
  // },
  // {
  //   name: 'Human Resources',
  //   path: '/human-resources',
  //   icon: humanResourcesIcons,
  //   description: modules.map,
  // },

  // {
  //   name: 'Dashboards',
  //   path: '/dashboards',
  //   icon: dashboardIcon,
  //   description: modules.dashboards,
  // },
  {
    name: 'Geo Node',
    path: '/geo-node',
    icon: settingsIcons,
    description: modules.dashboards,
  },
  {
    name: 'Users',
    path: '/users',
    icon: humanResourcesIcons,
    description: modules.dashboards,
  },
  // {
  //   name: 'Settings',
  //   path: '/settings',
  //   icon: settingsIcons,
  //   description: modules.dashboards,
  // },
  {
    name: 'Agencies',
    path: '/Agencies',
    icon: settingsIcons,
    description: modules.dashboards,
  },
  {
    name: 'Admin Panel',
    path: '/admin-panel',
    icon: settingsIcons,
    description: modules.dashboards,
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
const HomeNavMenu = ({ match }) => (
  <NavigationMenu routes={routes} match={match} />
);

HomeNavMenu.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};
export default HomeNavMenu;
