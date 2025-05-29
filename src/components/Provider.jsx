import React from 'react'

const Provider = ({children}) => {
  return (
    <div>
        <h1>Provider start</h1>
        {children}
        <h1>Provider ends</h1>
    </div>
  )
}

export default Provider