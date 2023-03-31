
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function BookTicket() {
  const location = useLocation();
  let nameOfMovie = location.state.data.name;
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ customerName: '', cardNumber: '', date: '', cvv: '' })
  const bookingInfo = {
    customerName: credentials.customerName,
    cardNumber: credentials.cardNumber,
    date: credentials.date,
    cvv: credentials.cvv
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('bookingInfo', JSON.stringify(bookingInfo));
    navigate('/home')
    alert(`Ticked booked Successfully for Date-${bookingInfo.date}`)

  }



  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }



  return (
    <>
      <div className="container">
        <form className='mx-4' onSubmit={handleSubmit} >
          <div className="container mt-3">
            <h2>Payment Options</h2>
            <h2 className='text-center'>{`Movie Name-${nameOfMovie}`}</h2>
          </div>
          <div className="mb-3" >
            <label htmlFor="exampleInputEmail1" className="form-label" >Full Name</label>
            <input type="text" className="form-control" name='customerName' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange
            } required />
          </div>
          <div className="mb-3">
            <label htmlFor="card-number" className="form-label">Card Number</label>
            <input className="form-control" id="card-number" onChange={onChange
            } name='cardNumber' required />
          </div>
          <div className="mb-3">
            <label htmlFor="cvv" className="form-label">CVV</label>
            <input type="password" autoComplete='flase' maxLength="4" className="form-control" id="cvv" onChange={onChange
            } name='cvv' required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputDate1" className="form-label">Date</label>
            <input type="date" className="form-control" id="exampleInputDate1" onChange={onChange
            } name='date' autoComplete='current-date' required />
          </div>

          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
      </div>
    </>

  )
}
