import React from 'react';

const Thing = (props) => {

  return (
    <div className='card'>
      <div class='image'>
        <img src={props.thing.image_url} />
        </div>
      <div class="content">
        <div class='header'>
          <a href={props.thing.url} target='_blank'>{props.thing.name}</a>
        </div>
      </div>

    </div>
  )
}

export default Thing;
