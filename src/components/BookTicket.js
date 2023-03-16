
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function BookTicket() {
  const location = useLocation();
  let nameOfMovie = location.state.data.name;

  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: '', date: '', time: '' })
  const bookingInfo = {
    email: credentials.email,
    date: credentials.date,
    time: credentials.time
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
    navigate('/home')
    alert(`Ticked booked Successfully for Date-${bookingInfo.date},Time-${bookingInfo.time}`)
  }



  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }



  return (

    <div className="container">
      <form className='mx-4' onSubmit={handleSubmit} >
        <div className="container mt-3">
          <h2>Book Your Ticket....</h2>
          <h1 className='text-center'>{`Movie Name-${nameOfMovie}`}</h1>
        </div>
        <div className="mb-3" >
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" autoComplete='current-email' name='email' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange
          } />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDate1" className="form-label">Date</label>
          <input type="date" className="form-control" id="exampleInputDate1" onChange={onChange
          } name='date' autoComplete='current-date' />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputTime1" className="form-label">Time</label>
          <input type="time" className="form-control" id="exampleInputTime1" onChange={onChange
          } name='time' autoComplete='current-time' />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">I am Not a Robot</label>
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}
