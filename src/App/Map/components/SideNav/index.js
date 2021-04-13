import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import SideNavItem from "./components/SideNavItem";
import NavItemDetails from "./components/NavItemDetails";
import {mapActions, mapSelectors} from "../../../../redux/modules/map";
import {bindActionCreators} from "redux";
import { Link } from 'react-router-dom';
import projectsIcon from '../../../../assets/icons/projects-white.svg';
import layersIcon from "../../../../assets/icons/geo-node-layers-white.svg";
import homeIcon from '../../../../assets/icons/home-white.svg';
import './styles.css';

class SideNav extends Component {

    static propTypes = {
        setActiveMapSideMenuItem: PropTypes.func,
        activeItem: PropTypes.string.isRequired,
    }

    static defaultProps = {
        setActiveMapSideMenuItem: () => {},
        regionProjects: [],
    }

    render() {
        const {
            setActiveMapSideMenuItem,
            activeItem,
        } = this.props;
        return (
            <div className='SideNav'>
                <div className='nav-items-list'>
                <Link to='/app' className="SideNavItem">
                <SideNavItem
                        activeThumbnail={homeIcon}
                        inactiveThumbnail={homeIcon}
                        itemId='projects'
                        activeItem='home'
                        setActiveItem={setActiveMapSideMenuItem}
                    />
                </Link>
                
                    <SideNavItem
                        title="Projects"
                        activeThumbnail={projectsIcon}
                        inactiveThumbnail={projectsIcon}
                        itemId='projects'
                        activeItem={activeItem}
                        setActiveItem={setActiveMapSideMenuItem}
                    />

                    <SideNavItem
                        title="Map Layers"
                        activeThumbnail={layersIcon}
                        inactiveThumbnail={layersIcon}
                        itemId='map-layers'
                        activeItem={activeItem}
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
    activeItem: mapSelectors.getActiveMapSideMenuItem(state)
});

const mapDispatchToProps = (dispatch) => ({
    setActiveMapSideMenuItem: bindActionCreators(mapActions.setActiveMapSideMenuItem, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);

