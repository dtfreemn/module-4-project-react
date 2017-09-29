import React from 'react';
import Thing from './Thing';

const ThingsList = (props) => {
  let things
  if (props.things && props.things.length > 0) {
    things = props.things.map((thing, index) => <Thing key={index} thing={thing} />)
  }
  return (
    <div className='ui card'>
      {things}
    </div>
  )
}

export default ThingsList;