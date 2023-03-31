import React from 'react'
import { useNavigate } from 'react-router-dom';





const CardItem = (props) => {


  let str = props.summary

  function removeTags(str) {
    if ((str === null) || (str === ''))
      return false;
    else
      str = str.toString();

    // Regular expression to identify HTML tags in the input string. Replacing the identified HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
  }
  const summry = removeTags(str)

  const navigate = useNavigate()



  const handleClick = () => {
    let data = {
      index: props.index,
      summary: summry,
      image: props.urlToImage,
      name: props.name
    }

    navigate('/summary', { state: { data: data } });


  }

  return (
    <div>
      <div className="card my-2 mx-2 " >
        <img src={props.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text"><small className="text-muted"><b>Language:</b></small> {props.language}</p>

          <p className="card-text"><small className="text-muted"><b>Type:</b> {props.type}</small></p>
          <button className="btn btn-primary" onClick={handleClick} >Read Summary</button>


        </div>
      </div>

    </div>
  )
}


export default CardItem
