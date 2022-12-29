import React from 'react'

function Note(props) {
  return (
    <div className='note-title'>
        <h3 className='title-heading'>{props.title}</h3>
    <p className='note-para'>{props.content}</p>
    </div>
  )
}

export default Note