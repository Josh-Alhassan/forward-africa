import React from 'react';
import './ComponentHeading.css'

function ComponentHeading({text}) {
  return (
    <div>
      <h2 className="secondary-heading">{text}</h2>
    </div>
  )
}

export default ComponentHeading
