import React, {useState, useEffect} from 'react'
import './createplan.css'
// import Table from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'





const CreatePlan = () => {
 
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/books?_quantity=10')
    .then(response => response.json())
                                 // .then(data => console.log(data))
    .then(data => setBooks(data.data))

  }, [])

  console.log(books)
  

  return (
    <div className='container h-100  justify-content-center' >
          
      <h1 className='heading '>List of Books</h1>
          <Table stripped bordered hover size="sm">
                 <thead>
                       <tr w3-table-all w3-centered>
                             <th width="170">TITLE</th> 
                             <th width="170">AUTHOR</th>
                             <th width="170">GENRE</th>
                             <th width="170">DESCRIPTION</th>
      
 
                        </tr>
                 </thead>
  <tbody>

          {
            books ? books.map((book, idx) => (
              <tr key={idx} >
              <td> {book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.description}</td>
            </tr>
            )) : null
          }
       
   

 
  </tbody>
</Table>
    


         
        

    </div>
  )
}

export default CreatePlan