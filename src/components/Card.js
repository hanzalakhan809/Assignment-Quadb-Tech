import React, { useState, useEffect } from 'react'
import CardItem from './CardItem';



const API = `https://api.tvmaze.com/search/shows?q=all`;

export default function Card() {

  const [articles, setarticles] = useState([]);

  const fetchData = async () => {
    let data = await fetch(API);
    let dataToJson = await data.json();
    setarticles(dataToJson)

  }

  useEffect(() => {

    fetchData();

  }, [])

  return (
    <>
      <div className="container">
        <h5 className='text-center mt-4' >Top Latest Movies...</h5>
        <div className="row">
          {articles.map((e, index) => {
            return <div className="col-md-4 h-100" key={index} >
              <CardItem url={e.show.url} name={e.show.name} language={e.show.language} urlToImage={e?.show?.image?.medium === undefined ? 'https://static.tvmaze.com/uploads/images/medium_portrait/311/779751.jpg' : e?.show?.image?.medium} index={index} type={e.show.type} summary={e.show.summary} />

            </div>
          })}
        </div>
      </div>
    </>
  )
}


