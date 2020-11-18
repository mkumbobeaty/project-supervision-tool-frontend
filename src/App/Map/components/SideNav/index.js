import React, {Component} from 'react';
import './styles.css';
import SideNavItem from "./components/SideNavItem";
import whitIinitiativeImg from '../../../../assets/icons/white-initiative.svg'
import initiativeImg from '../../../../assets/icons/initiatives-zero-opacity.svg'
import humanResourceImg from '../../../../assets/icons/human-resources-zero-opacity.svg'
import whiteHhumanResourceImg from '../../../../assets/icons/white-human-resources.svg'

class SideNav extends Component {

    render() {
        return (
            <div className='SideNav'>
                <SideNavItem title="Projects" activeThumbnail={whiteHhumanResourceImg} inactiveThumbnail={humanResourceImg} itemId='projects'/>
                <SideNavItem title="Sub Projects" activeThumbnail={whiteHhumanResourceImg} inactiveThumbnail={humanResourceImg} />
                <SideNavItem title="Locations" activeThumbnail={whiteHhumanResourceImg} inactiveThumbnail={humanResourceImg} />
                <SideNavItem title="Data Sets" activeThumbnail={whiteHhumanResourceImg} inactiveThumbnail={humanResourceImg} />
            </div>
        );
    }
}

export default SideNav;
