
import React from 'react'
import './styles.css';
import initiativeImg from '../../../../assets/icons/white-initiative.svg'
import humanResourceImg from '../../../../assets/icons/white-human-resources.svg'

import SideMenuItem from "./SideMenuItem";
 const SideMenu = () => {
 return (
     <div className="SideMenu">
         <SideMenuItem bgImage={initiativeImg} title="Initiative"/>
         <SideMenuItem bgImage={humanResourceImg} title="Human Resource"/>
     </div>
 )
 }

export default SideMenu;
