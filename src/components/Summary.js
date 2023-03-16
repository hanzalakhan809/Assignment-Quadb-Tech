import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Summary() {


  const location = useLocation();


  let summary = location.state.data.summary
  let image = location.state.data.image
  let name = location.state.data.name

  const navigate = useNavigate();
  const handleClick = () => {
    let data = {
      name: name
    }



    navigate('/book-ticket', { state: { data: data } });


  }
  return (
    <div className="container  ">
      <div className="col-md-3 h-100 mx-auto" >


        <div className="card my-2 mx-auto " >
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{summary}</p>
            <button className="btn btn-primary " onClick={handleClick}>Book Ticket</button>

          </div>
        </div>
      </div>
    </div>
  )
}
