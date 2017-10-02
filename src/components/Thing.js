import React from 'react';

const Thing = (props) => {

  const onHeartClick = (e) => {
    props.saveThing(props.thing)
  }

  return (
    <div className='thing'>
      <div className='image'>
        <img className='thing-image' src={props.thing.image_url} alt='yelp' /> </div>
      <div className='content'>
        <div className='thing-title'>
          <a href={props.thing.url} target='_blank'>{props.thing.name}</a>
          <span onClick={onHeartClick}><i className="heart icon red"></i></span>
        </div>
      </div>

    </div>
  )
}

export default Thing;
