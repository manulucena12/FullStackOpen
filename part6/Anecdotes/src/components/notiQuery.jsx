import React from 'react'
import { useNotification } from '../context/notiContext'


export const NotificationQueryComponent = () => {
  const { notification } = useNotification

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };

  return (
    <>
      {notification && <p style={style}>{notification}</p>}
    </>
  )
}
