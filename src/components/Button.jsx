import React from 'react'

const Button = ({text, color, bgColor, size, borderRadius}) => {
  return (
    <button type='button' style={{ color, borderRadius, }}
    className={`text-${size} p-3 hover:drop-shadow-xl bg-${bgColor}`}>
      {text}
    </button>
  )
}

export default Button