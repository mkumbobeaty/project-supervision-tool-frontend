import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import './styles.css';
import SideNavItem from "./components/SideNavItem";
import humanResourceImg from '../../../../assets/icons/human-resources-zero-opacity.svg'
import whiteHhumanResourceImg from '../../../../assets/icons/white-human-resources.svg'
import NavItemDetails from "./components/NavItemDetails";
import {mapActions, mapSelectors} from "../../duck";
import {bindActionCreators} from "redux";

class SideNav extends Component {

    static propTypes = {
        regionProjects: PropTypes.array,
        setActiveMapSideMenuItem: PropTypes.string,
        getProjectOverview: PropTypes.func,
        clearProjectsOverview: PropTypes.func,
        activeItem: PropTypes.string.isRequired,
    }

    static defaultProps = {
        setActiveMapSideMenuItem: '',
        regionProjects: [],
        getProjectOverview: () => {},
        clearProjectsOverview: () => {},
    }

    render() {
        const {
            activeMapSideMenuItem,
            setActiveMapSideMenuItem,
            getProjectOverview,
            clearProjectsOverview,
            activeItem,
        } = this.props;
        return (
            <div className='SideNav'>
                <div className='nav-items-list'>
                    <SideNavItem
                        title="Projects"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='projects'
                        activeItem={activeMapSideMenuItem}
                        setActiveItem={setActiveMapSideMenuItem}
                        getOverview={getProjectOverview}
                        clearOverview={clearProjectsOverview}
                    />
                    <SideNavItem
                        title="Sub Projects"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='sub-projects'
                        activeItem={activeMapSideMenuItem}
                        setActiveItem={setActiveMapSideMenuItem}
                        getOverview={() => {
                        }}
                        clearOverview={() => {
                        }}
                    />
                    <SideNavItem
                        title="Locations"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='locations'
                        activeItem={activeMapSideMenuItem}
                        setActiveItem={setActiveMapSideMenuItem}
                        getOverview={() => {
                        }}
                        clearOverview={() => {
                        }}
                    />
                    <SideNavItem
                        title="Data Sets"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='data-sets'
                        activeItem={activeMapSideMenuItem}
                        setActiveItem={setActiveMapSideMenuItem}
                        getOverview={() => {
                        }}
                        clearOverview={() => {
                        }}
                    />
                </div>
                <NavItemDetails activeItem={activeItem}/>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    activeMapSideMenuItem: mapSelectors.getActiveMapSideMenuItem(state),
    activeItem: mapSelectors.getActiveMapSideMenuItem(state)
});

const mapDispatchToProps = (dispatch) => ({
    setActiveMapSideMenuItem: bindActionCreators(mapActions.setActiveMapSideMenuItem, dispatch),
    getProjectOverview: bindActionCreators(mapActions.getProjectsOverviewStart, dispatch),
    clearProjectsOverview: bindActionCreators(mapActions.clearProjectsOverview, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);

