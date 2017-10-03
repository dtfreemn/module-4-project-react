import React from 'react';
import Thing from './Thing';

const ThingsList = (props) => {
  let things
  if (props.things && props.things.length > 0) {
    things = props.things.map((thing, index) => <Thing key={index} thing={thing} saveThing={props.addSavedThing} deleteThing={props.deleteSavedThing} {...props}/>)
  } else if (props.errors && props.errors.length > 0) {
    things = <div className='yelp-error'><h1>{props.errors[0]}</h1></div>
  }
  return (
    <div className='things-list'>
      {things}
    </div>
  )
}

export default ThingsList;
