import React from 'react';
import PropTypes from 'prop-types';
import needByGovernmentIcon from '../../assets/icons/needs-by-government.svg';
import needsAssessmentsIcon from '../../assets/icons/needs-assessment.svg';
import needsCovidIcon from '../../assets/icons/needs-covid.svg';
import NavigationMenu from '../components/NavigationMenu';
import modules from '../../modules.json';

// TODO update module descriptions to point to right descriptions

/* constants */
const routes = [
  {
    name: 'Needs Identified by government',
    path: '/needsbygovernment',
    icon: needByGovernmentIcon,
    description: modules.initiatives,
  },
  {
    name: 'Needs of covid response partner ',
    path: '/needscovid',
    icon: needsCovidIcon,
    description: modules.vehicles,
  },
  {
    name: 'Needs assessment report',
    path: '/needsassessment',
    icon: needsAssessmentsIcon,
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
const NeedsNavMenu = ({ match }) => (
  <NavigationMenu routes={routes} match={match} />
);

NeedsNavMenu.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};

export default NeedsNavMenu;
