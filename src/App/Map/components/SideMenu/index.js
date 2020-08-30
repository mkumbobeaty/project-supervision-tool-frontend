
import React, { useState } from 'react'
import './styles.css';
import whitIinitiativeImg from '../../../../assets/icons/white-initiative.svg'
import initiativeImg from '../../../../assets/icons/initiatives-zero-opacity.svg'
import humanResourceImg from '../../../../assets/icons/human-resources-zero-opacity.svg'
import whiteHhumanResourceImg from '../../../../assets/icons/white-human-resources.svg'


import SideMenuItem from "./SideMenuItem";
 const SideMenu = () => {
     const [active, setActive] = useState('initiative');
 return (
     <div className="SideMenu">
         <SideMenuItem
             bgImage={active === "initiative" ? initiativeImg : whitIinitiativeImg}
             title="Initiative"
             setActive={setActive}
             active={active}
             ItemKey="initiative"
         />
         <SideMenuItem
             bgImage={active === "human-resource" ? humanResourceImg : whitIinitiativeImg}
             title="Human Resources"
             setActive={setActive}
             active={active}
             ItemKey="human-resource"
         />
     </div>
 )
 }

export default SideMenu;
