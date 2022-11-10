import React from 'react'
import './myStyles.css'

interface styleProps {
    primary: boolean
}
function StyleSheets(props: styleProps) {
    let className = props.primary?'primary':'secondary'
  return (
    <div>
        <h1 className={`${className} font-xl`}>Style Sheets</h1>
    </div>
  )
}

export default StyleSheets