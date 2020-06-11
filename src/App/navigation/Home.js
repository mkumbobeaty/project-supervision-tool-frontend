import React from 'react';
import PropTypes from 'prop-types';
import dashboardIcon from '../../assets/icons/overview-dashboard.svg';
import needsIcon from '../../assets/icons/needs.svg';
import mapIcon from '../../assets/icons/maps.svg';
import resourcesIcon from '../../assets/icons/resources.svg';
import settingsIcons from '../../assets/icons/admin-settings.svg';
import NavigationMenu from '../components/NavigationMenu';
import modules from '../../modules.json';

/* constants */
const routes = [
 {
    name: 'Map Virtualization',
    path: '/map',
    icon: mapIcon,
    description: modules.map,
  },
  {
    name: 'Needs',
    path: '/needs',
    icon: needsIcon,
    description: modules.needs,
  },
  
  {
    name: 'Resources',
    path: '/resources',
    icon: resourcesIcon,
    description: modules.humanResource,
  },
  {
    name: 'Dashboards',
    path: '/dashboards',
    icon: dashboardIcon,
    description: modules.dashboards,
  },
  {
    name: 'Settings',
    path: '/settings',
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
