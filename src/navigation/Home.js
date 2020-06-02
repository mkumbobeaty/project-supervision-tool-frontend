import React from 'react';
import PropTypes from 'prop-types';
import dashboardIcon from '../assets/icons/dashboards.svg';
import initiativesIcon from '../assets/icons/initiatives.svg'
import agenciesIcon from '../assets/icons/agencies.svg';
import needsIcon from '../assets/icons/needs.svg';
import mapIcon from '../assets/icons/map.svg';
import materialsIcon from '../assets/icons/materials.svg';
import humanResourcesIcon from '../assets/icons/humanResources.svg';
import NavigationMenu from '../components/NavigationMenu';
import modules from '../modules.json';

/* constants */
const routes = [
 
  {
    name: 'Human Resources',
    path: '/humanResources',
    icon: humanResourcesIcon,
    description: modules.humanResource,
  },
  {
    name: 'Materials',
    path: '/materials',
    icon: materialsIcon,
    description: modules.material,
  },
  {
    name: 'Initiatives',
    path: '/initiatives',
    icon: initiativesIcon,
    description: modules.initiatives,
  },
  {
    name: 'Map',
    path: '/map',
    icon: mapIcon,
    description: modules.map,
  },
  {
    name: 'Agencies',
    path: '/agencies',
    icon: agenciesIcon,
    description: modules.agencies,
  },
  {
    name: 'Dashboards',
    path: '/dashboards',
    icon: dashboardIcon,
    description: modules.dashboards,
  },
  {
    name: 'Needs',
    path: '/needs',
    icon: needsIcon,
    description: modules.stakeholdersAgencies,
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
