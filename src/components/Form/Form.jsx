import React, {useState} from 'react';
import api from '../../api'
import Search from '../Search/Search'
import './Form.css'


const Form = () => {
    const [selected, setSelected] = useState("name");
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState(false)
    const [button, setButton] = useState(false)


   const getChar=()=>{
    api.get(`/character/?${selected}=${input}`)
        .then(item=>

           setData(item.data.results))
        .catch(()=>{
            setError(true);
        })
   }

    return (

        <>
            <div className="outContainner hPage" style={{ display: "flex", flexDirection: "column" }}>

                <h1 className="title">selecione sua busca</h1>
                <div className="containner cont">
                    <div className="sForm">
                        <form type="get" style={{ textAlign: "center" }}>
                            <select onChange={(e) => {
                                setSelected(e.target.value)
                            }}
                                className="form-select" aria-label="Default select example">
                                <option value="name">nome</option>
                                <option value="status">status</option>
                                <option value="gender">gênero</option>
                            </select>

                            <input onChange={(e) => {

                                setInput(e.target.value)
                            }} placeholder="digite aqui sua pesquisa" className="form-control" type="text" />

                            <button style={{ marginTop: "20px" }} onClick={() => {
                                if (input === "" ) { setError(true) }
                                else {setError(false)

                                getChar()}
                                setButton(true);

                            }
                            } type="button" className="btn btn-primary">Pesquisar</button>

                        </form>
                    </div>
                </div>
                {error ? <div className="alert alert-danger" role="alert" style={{ marginTop: "30px" }}>
                    campo em branco ou elemento não encontrado
                </div> : null}

                {button && !error &&data.length>0 ? <Search data={data} setButton={setButton}></Search> : null}

            </div>
        </>

    )

}

export default Form
