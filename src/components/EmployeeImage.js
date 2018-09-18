import React from "react"

const EmployeeImage = (props) => {
  return (
    <div className='employee-image-wrapper'>
        <div className='employee-details'>
            <img src={props.image} />
            <h4>{props.name}</h4>
        </div>
    </div>
  )
};

export default EmployeeImage