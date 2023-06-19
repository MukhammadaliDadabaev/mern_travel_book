import React from 'react'
import { Link } from 'react-router-dom'

const AddBook = () => {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label'>
          Title
        </label>
        <input type='text' className='form-control' id='title' name='title' />
      </div>
      <div className='mb-3'>
        <label htmlFor='desc' className='form-label'>
          Description
        </label>
        <input type='text' className='form-control' id='desc' name='desc' />
      </div>
      <div className='mb-3'>
        <label htmlFor='image' className='form-label'>
          Image Url
        </label>
        <input type='text' className='form-control' id='image' name='image' />
      </div>
      <button type='submit' className='btn btn-outline-primary me-2'>
        Submit
      </button>
      <Link to='/' className='btn btn-outline-success'>
        BACK
      </Link>
    </form>
  )
}

export default AddBook
