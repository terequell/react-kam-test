import React from 'react'
import lockicon from './img/lockicon.png'

const Tableelement = ({name,sites,type,status}) => {
   return (
      <tr>
         <td>{name}</td>
         <td>{sites === 0 ? sites : sites + ' site'}</td>
         <td className = {'typeColumn'}>{type}</td>
         <td >{status === 'blocked' ? <img className = {'lockImg'} src = {lockicon}/> : (status === 'enable' ? <a className = {'statusEnabled'}>ON</a> : <a className = {'statusDisabled'}>OFF</a>)}</td>
      </tr>
   )
}

export default Tableelement