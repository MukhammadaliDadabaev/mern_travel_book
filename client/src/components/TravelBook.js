import React from 'react'

const TravelBook = () => {
  return (
    <div className='card mb-3 mt-3'>
      <img
        src='https://i.pinimg.com/originals/e9/46/e3/e946e312fb68fca06033d523b21993fc.jpg'
        className='card-img-top'
        alt='...'
      />
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          explicabo aspernatur animi odit, laboriosam labore corporis nesciunt
          quas natus voluptatibus.
        </p>
        <p className='card-text'>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  )
}

export default TravelBook
