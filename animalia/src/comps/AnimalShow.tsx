import React from 'react'

interface AnimalShowProps {
  animal: {
    type: string
  };
}

const AnimalShow = ({animal}: AnimalShowProps) => {
  return (
    <div>AnimalShow: {animal.type}</div>
  )
}

export default AnimalShow