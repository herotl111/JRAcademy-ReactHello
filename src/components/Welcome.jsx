import React from 'react'

const Welcome = (props) => {
    return (
      <div>
        {
          props.isTeacher && 
          <h2>Hello, {props.name}, I am a Teacher {props.count}</h2>
        }
        {
          !props.isTeacher &&
          <p>{`Hello ${props.name}, I am a student ${props.count}`}</p>
        }
      </div>
    );
}

export default Welcome;