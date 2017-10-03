import React from 'react';

const ThingsFilter = (props) => {
  
  const options = props.filters.map((filter, index) => <option value={filter} key={index}>{filter.toUpperCase()}</option>)
  
  const handleFilterChange = (e) => {
    props.handleFilterChange(e.target.value)
  }
  
  return (
      <select className='ui selection dropdown' id='things-filter' onChange={handleFilterChange}>
        {options}
      </select>
  )
}

export default ThingsFilter;