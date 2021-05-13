import React from 'react'
import './Characters.css'
import { Link } from 'react-router-dom'


const createElemet = (char) => {

  let pal = [];

  for (let i = 0; i < char.length; i += 2)
    pal.push(<div key={char[i].id} className="row ">
      <div className="col carD " >
        <Link className="link" to={`/character/id=${char[i].id}`}>
          <div className="card line" style={{ width: '18rem' }}>
            <img src={char[i].image} className="card-img-top " alt="...." />
            <div className="card-body text ">
              <h5 className="card-title  ">{`Nome: ${char[i].name}`}</h5>
              <h5>{`status: ${char[i].status}`}</h5>
            </div>

          </div>
        </Link>
      </div>


      <div className="col carD">
        <Link className="link" to={`character/id=${char[i + 1].id}`}>
          <div className="card line  " style={{ width: '18rem' }}>
            <img src={char[i + 1].image} className="card-img-top " alt="...." />
            <div className="card-body  text">
              <h5 className="card-title">{`Nome: ${char[i + 1].name}`}</h5>
              <h5>{`status: ${char[i+1].status}`}</h5>
            </div>
          </div>
        </Link>
      </div>

    </div>)

  return pal




}



const Characters = ({ char, setCurrentPage, currentPage }) => {


  return (
    <>
      <div className="outContainner">
        <h1 className="title">Personagens</h1>
        <div className="container cont">

          {createElemet(char)}

        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" onClick={() => {
                if (currentPage != 1) {
                  setCurrentPage(() => { setCurrentPage(currentPage - 1) })
                }
                else { setCurrentPage(2) }
              }} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li onClick={() => { setCurrentPage(1) }} className="page-item"><a className="page-link" href="#">1</a></li>
            <li onClick={() => { setCurrentPage(2) }} className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item">
              <a className="page-link" onClick={() => {
                if (currentPage != 2) {
                  setCurrentPage(() => (setCurrentPage(currentPage + 1)))
                }
                else { setCurrentPage(1) }
              }} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </>
  )

}


export default Characters;
