import React from 'react';
import PropTypes from 'prop-types';
import initiativesIcon from '../assets/icons/initiatives.svg';
import financialResourcesIcon from '../assets/icons/financial-resources.svg';
import inKindDonationIcon from '../assets/icons/in-kind-donations.svg';
import humanResourcesIcon from '../assets/icons/human-resources.svg';
import productionCapacityIcon from '../assets/icons/production-capacity.svg';
import knowledgeResourcesIcon from '../assets/icons/knowledge-resources.svg';
import NavigationMenu from '../components/NavigationMenu';
import modules from '../modules.json';

// TODO update module descriptions to point to right descriptions

/* constants */
const routes = [
  {
    name: 'Initiatives',
    path: '/initiatives',
    icon: initiativesIcon,
    description: modules.initiatives,
  },
  {
    name: 'In kind donations ',
    path: '/donations',
    icon: inKindDonationIcon,
    description: modules.vehicles,
  },
  {
    name: 'Financial Resources',
    path: '/financialresources',
    icon: financialResourcesIcon,
    description: modules.vehicles,
  },
  {
    name: 'Knowledge Resources',
    path: '/knowledgeresources',
    icon: knowledgeResourcesIcon,
    description: modules.vehicles,
  },
  {
    name: 'Human Resources',
    path: '/humanresources',
    icon: humanResourcesIcon,
    description: modules.vehicles,
  },
  {
    name: 'Production Capacity',
    path: '/productioncapacity',
    icon: productionCapacityIcon,
    description: modules.vehicles,
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
