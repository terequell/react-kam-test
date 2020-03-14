import React, { useState } from 'react'
import lockicon from './img/lockicon.png'

const Tableelement2 = ({name,sites,type,status}) => {
   const [isActive, setIsActive] = useState(false)

   const onHoverRow = (e) => {
      setIsActive(true)
   }

   const onLeaveRow = (e) => {
      setIsActive(false)
   }

   return (
      <div className = 'tablevar2__row' >
         <div className = {'elements__wrapper ' + (isActive ? 'currentRow' : '')} onMouseEnter = {onHoverRow} onMouseLeave = {onLeaveRow}>
            <div className = 'element__toolname'>
               <span>{name}</span>
            </div>
            <div className = 'element__used'>
               <span>{sites === 0 ? sites : sites + ' site'}</span>
            </div>
            <div className = 'element__type'>
               <span className = 'typeColumn'>{type}</span>
            </div>
            <div className = 'element__status'>
               <span>{status === 'blocked' ? <img className = {'lockImg'} src = {lockicon}/> : (status === 'enable' ? <span className = {'statusEnabled'}>ON</span> : <span className = {'statusDisabled'}>OFF</span>)}</span>
            </div>
         </div>
      </div>
   )
}

export default Tableelement2