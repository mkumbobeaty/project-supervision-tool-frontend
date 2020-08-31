
import React, { useState } from 'react'
import './styles.css';
import whitIinitiativeImg from '../../../../assets/icons/white-initiative.svg'
import initiativeImg from '../../../../assets/icons/initiatives-zero-opacity.svg'
import humanResourceImg from '../../../../assets/icons/human-resources-zero-opacity.svg'
import whiteHhumanResourceImg from '../../../../assets/icons/white-human-resources.svg'


import SideMenuItem from "./SideMenuItem";
 const SideMenu = ({ active,setActiveMapSideMenuItem,getInitiatives,getHumanResources }) => {
 return (
     <div className="SideMenu">
         <SideMenuItem
             bgImage={active === "initiative" ? initiativeImg : whitIinitiativeImg}
             title="Initiative"
             getData={getInitiatives}
             setActive={setActiveMapSideMenuItem}
             active={active}
             itemKey="initiative"
         />
         <SideMenuItem
             bgImage={active === "human-resource" ? humanResourceImg : whitIinitiativeImg}
             title="Human Resources"
             getData={getHumanResources}
             setActive={setActiveMapSideMenuItem}
             active={active}
             itemKey="human-resource"
         />
     </div>
 )
 }

export default SideMenu;
