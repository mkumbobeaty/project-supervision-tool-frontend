import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import SideNavItem from "./components/SideNavItem";
import NavItemDetails from "./components/NavItemDetails";
import { mapActions, mapSelectors } from "../../../../redux/modules/map";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import projectsIcon from '../../../../assets/icons/projects-white.svg';
import layersIcon from "../../../../assets/icons/geo-node-layers-white.svg";
import homeIcon from '../../../../assets/icons/home-white.svg';
import { Drawer, Button } from 'antd';
import './styles.css';

class SideNav extends Component {

    static propTypes = {
        setActiveMapSideMenuItem: PropTypes.func,
        activeItem: PropTypes.string.isRequired,
    }

    static defaultProps = {
        setActiveMapSideMenuItem: () => { },
        regionProjects: [],
    }

    state = {
        showSideNav: false,
    };
    /**
       * @function
       * @name handleClearCachedValues
       * @description open drawer
       *
       * @version 0.1.0
       * @since 0.1.0
       */
    handleShowSideNav = () => {
        this.setState({ showSideNav: true });
    };

    /**
 * @function
 * @name handleClearCachedValues
 * @description close drawer
 *
 * @version 0.1.0
 * @since 0.1.0
 */
    handleCloseSideNav = () => {
        this.setState({ showSideNav: false });
    };
    render() {
        const {
            setActiveMapSideMenuItem,
            activeItem,
        } = this.props;

        const { showSideNav } = this.state;
        return (
            <section >
                <Button type="primary" onClick={this.handleShowSideNav}>
                    Open
                </Button>
                <Drawer
                    placement="left"
                    mask={false}
                    onClose={this.handleCloseSideNav}
                    visible={showSideNav}
                    className="mapSideNav"
                    width={455}
                >
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
                        <NavItemDetails activeItem={activeItem} />
                    </div>
                </Drawer>
            </section>
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

