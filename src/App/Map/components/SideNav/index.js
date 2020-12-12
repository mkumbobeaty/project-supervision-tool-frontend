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
        setActiveMapSideMenuItem: PropTypes.string,
        activeItem: PropTypes.string.isRequired,
    }

    static defaultProps = {
        setActiveMapSideMenuItem: '',
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
                    <SideNavItem
                        title="Projects"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='projects'
                        activeItem={activeItem}
                        setActiveItem={setActiveMapSideMenuItem}
                    />

                    <SideNavItem
                        title="Sub Projects"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='sub-projects'
                        activeItem={activeItem}
                        setActiveItem={setActiveMapSideMenuItem}
                    />

                    <SideNavItem
                        title="Locations"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='locations'
                        activeItem={activeItem}
                        setActiveItem={setActiveMapSideMenuItem}
                    />


                    <SideNavItem
                        title="Data Sets"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='data-sets'
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

