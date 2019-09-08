import React from 'react'

const Welcome = (props) => {
    return (
      <div>
        {
          props.isTeacher && 
          <h2>Hello, {props.author}, {props.content}</h2>
        }
        {
          !props.isTeacher &&
          <p>{`Hello ${props.author}, ${props.content}`}</p>
        }
      </div>
    );
}

export default Welcome;