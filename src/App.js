import './App.css';
import { useState, useEffect } from 'react'
import api from './api';
import Banner from './components/Banner/Banner'
import Characters from './components/Characters/Characters'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Caracter from './components/Character/Character'
import Form from './components/Form/Form'


function App() {


  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await api.get('character');
      setCharacters(data.results);

    }

    getCharacters()
  }, [])

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quantPage] = useState(10)



  let lastIndex = currentPage * quantPage;
  let fristIndex = quantPage - lastIndex;
  let quantCharacters = characters.slice(fristIndex, lastIndex);

  console.log(quantCharacters)

  return (
    <>

    
      
      <Router>
      <Banner></Banner>
        <Switch>
          <Route exact path="/">
            <Characters char={quantCharacters} setCurrentPage={setCurrentPage} currentPage={currentPage}></Characters>
          </Route>
          <Route exact path="/character/id=:id">
              <Caracter></Caracter>
          </Route>
          <Route exact path="/form">
              <Form></Form>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
     
    </>


  )

}

export default App;
