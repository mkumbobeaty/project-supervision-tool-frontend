import React, {Component} from 'react';
import './styles.css';
import SideNavItem from "./components/SideNavItem";
import humanResourceImg from '../../../../assets/icons/human-resources-zero-opacity.svg'
import whiteHhumanResourceImg from '../../../../assets/icons/white-human-resources.svg'
import NavItemDetails from "./components/NavItemDetails";

class SideNav extends Component {

    render() {
        const {
            activeItem,
            setActiveItem,
            getProjectOverview,
        }  = this.props;
        return (
            <div className='SideNav'>
                <div className='nav-items-list'>
                    <SideNavItem
                        title="Projects"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='projects'
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                        getOverview={getProjectOverview}
                    />
                    <SideNavItem
                        title="Sub Projects"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='sub-projects'
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                        getOverview={() => {}}
                    />
                    <SideNavItem
                        title="Locations"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='locations'
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                        getOverview={() => {}}
                    />
                    <SideNavItem
                        title="Data Sets"
                        activeThumbnail={humanResourceImg}
                        inactiveThumbnail={whiteHhumanResourceImg}
                        itemId='data-sets'
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                        getOverview={() => {}}
                    />
                </div>
                <NavItemDetails activeItem={activeItem}/>
            </div>
        );
    }
}

export default SideNav;
