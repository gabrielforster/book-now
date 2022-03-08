import React, { useState } from 'react'
// import searchicon from '../img/search-icon.png'
import axios from 'axios'
import './Main.css'

export default function Main() {

  const [search, setSearch] = useState("")
  const [bookData, setData] = useState([])
  let books = bookData
  const searchBook=(evt) => {
    if(evt.key === "Enter")
    {
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'&key=AIzaSyAjxRebhAJBpbVFloaCOeiV5sDUosoJtEk&maxResults=40').then(res=>setData(res.data.items)).catch(err=>console.log(err))
    }
  }

  return (
    <main>
      <div className='container'>
        <div className='search'>
            <input value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook} type='text' placeholder='Procure aqui!' id='search-content'></input>
            {/* <button><img className='search-img-button' src={searchicon} alt=''></img></button> */}
        </div>
      
        <h1 className='books'>Books</h1>
        <div className='content'>
            {books.map((item)=>{
             let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
             if(thumbnail !== undefined)
              {
                return(
                  <>
                    <div className='card'>
                      <img className='book-img' src={thumbnail} alt=""/>
                      <div className='bottom'>
                          <h3 className='tittle'>{item.volumeInfo.title}</h3>
                          <p className='author'>Autor</p>
                      </div>
                    </div>
                  </>
                )
                }
              return null
              }
            )
            } 
        </div>

      </div>
    </main>
  )
}