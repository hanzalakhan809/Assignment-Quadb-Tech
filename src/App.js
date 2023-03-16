
import React from 'react'
import NavBar from './components/NavBar';

import {
  Route,
  Routes
} from "react-router-dom";
import Summary from './components/Summary';
import About from './components/About';
import Card from './components/Card';
import BookTicket from './components/BookTicket';



export default function App() {


  return (
    <div>
     
          <NavBar />
      <Routes>
            <Route exact path='/' element={<Card/>}  />
            <Route exact path='/about' element={<About/> } />
            <Route exact path='/home' element={<Card/>}/>
            <Route exact path='/summary'  element={<Summary/> } />
            <Route exact path='/book-ticket'  element={<BookTicket/> } />
        </Routes>
   
    </div>
  )
}

