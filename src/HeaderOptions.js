import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './HeaderOptions.css'

function HeaderOptions({avatar,Icon, title ,onClick}) {

  const user = useSelector(selectUser)
  return (
    <div onClick={onClick}className="headerOptions">
      {Icon && <Icon className="headerOption__icon"/>}
      {avatar && <Avatar className="headerOption__icon" src={user?.ph}/>}
      <h3 className='headerOption__title'>{ title}</h3>
    </div>
  )
}

export default HeaderOptions
