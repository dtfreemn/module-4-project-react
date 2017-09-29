import React from 'react';

const Thing = (props) => {

  return (
    <div className='card'>
      <div className='image'>
        <img className='thing-image' src={props.thing.image_url} />
        </div>
      <div className="content">
        <div className='header'>
          <a href={props.thing.url} target='_blank'>{props.thing.name}</a>
        </div>
      </div>

    </div>
  )
}

export default Thing;
