import React from 'react';

const Thing = (props) => {

  const onHeartClick = (e) => {
    props.saveThing(props.thing)
  }

  const onTrashClick = (e) => {
   props.deleteThing(props.thing) 
  }

  const saveDeleteIcon = props.location.pathname.includes('/saved') ? <span onClick={onTrashClick}><i className="trash icon save-me"></i></span> : <span onClick={onHeartClick}><i className="heart icon red save-me"></i></span>

  const imageUrl = props.thing.image_url ? props.thing.image_url : require('../images/No_image_available.svg')

  return (
    <div className='thing grow'>
      <div className='image'>
        <a href={props.thing.url} target='_blank'><img className='thing-image' src={imageUrl} alt='yelp' /></a></div>
      <div className='content'>
        <div className='thing-title'>
          <a href={props.thing.url} target='_blank'>{props.thing.name}</a>
          {saveDeleteIcon}
        </div>
      </div>

    </div>
  )
}

export default Thing;
