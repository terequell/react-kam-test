import React from 'react'
import lockicon from './img/lockicon.png'

const Tableelement2 = ({name,sites,type,status}) => {
   return (
      <div className = 'tablevar2__row' >
         <div className = {'elements__wrapper'} >
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