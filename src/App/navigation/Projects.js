import React from 'react';
import PropTypes from 'prop-types';
import initiativesIcon from '../../assets/icons/initiatives.svg';
import humanResourcesIcon from '../../assets/icons/human-resources.svg';
import NavigationMenu from '../components/NavigationMenu';
import modules from '../../modules.json';

// TODO update module descriptions to point to right descriptions

/* constants */
const routes = [
  {
    name: 'Projects',
    path: '/projects',
    icon: humanResourcesIcon,
    description: modules.vehicles,
  },
  {
    name: 'Sub-Projects',
    path: '/sub-projects',
    icon: initiativesIcon,
    description: modules.initiatives,
  },
 
];

/**
 * @function
 * @name Home
 * @description Home component which shows to base navigation menu
 * @param {object} props Component props
 * @param {object} props.match Match object from react router
 * @returns {object} Navigation Menu
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const ResourceNavMenu = ({ match }) => (
  <NavigationMenu routes={routes} match={match} />
);

ResourceNavMenu.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};

export default ResourceNavMenu;
