import React from 'react';

const Thing = (props) => {

  return (
    <div className='thing'>
      <div className='image'>
        <img className='thing-image' src={props.thing.image_url} alt='yelp' /> </div>
      <div className='content'>
        <div className='thing-title'>
          <a href={props.thing.url} target='_blank'>{props.thing.name}</a>
        </div>
      </div>

    </div>
  )
}

export default Thing;
