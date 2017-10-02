import React from 'react';

const Thing = (props) => {
  
  console.log(props)

  const onHeartClick = (e) => {
    props.saveThing(props.thing)
  }

  const onTrashClick = (e) => {
   props.deleteThing(props.thing) 
  }

  const saveDeleteIcon = props.location.pathname.includes('/saved') ? <span onClick={onTrashClick}><i className="trash icon save-me"></i></span> : <span onClick={onHeartClick}><i className="heart icon red save-me"></i></span>


  return (
    <div className='thing'>
      <div className='image'>
        <img className='thing-image' src={props.thing.image_url} alt='yelp' /> </div>
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
