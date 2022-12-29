import React from 'react'

var date = new Date();
var year = date.getFullYear();
function Footer() {
  return (
    <div className='footer'><p>Copyright {year}</p></div>
  )
}

export default Footer