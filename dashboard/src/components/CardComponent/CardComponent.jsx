import React from 'react'
import './CardComponent.css'
export const CardComponent = ({ title,
    description,}) => {
  return (
    <>
    <div className="card-container">
    {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
    </div>
    </>
  )
}

export default CardComponent
