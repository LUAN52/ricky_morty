import React, { useState, useEffect } from 'react';
import api from '../../api'
import Search from '../Search/Search'
import './Form.css'




const Form = () => {
    const [selected, setSelected] = useState("name");
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState(false)
    const [button, setButton] = useState(false)

    useEffect(() => {
        const getCharacters = async () => {
            const resp = await api.get(`/character/?${selected}=${input}`);

            setData(resp.data.results);

            console.log(resp.status)

        }

        getCharacters()

    }, [selected, button, input])


    return (

        <>
            <div className="outContainner hPage" style={{ display: "flex", flexDirection: "column" }}>

                <h1 className="title">selecione sua busca</h1>
                <div className="containner cont">
                    <div className="sForm">
                        <form style={{ textAlign: "center" }}>
                            <select onChange={(e) => {
                                setSelected(e.target.value)
                            }}
                                className="form-select" aria-label="Default select example">
                                <option value="name">nome</option>
                                <option value="status">status</option>
                                <option value="gender">gênero</option>
                            </select>

                            <input onChange={(e) => {

                                if (input.length > 0) {
                                    setButton(false)
                                }

                                setInput(e.target.value)
                            }} placeholder="digite aqui sua pesquisa" className="form-control" type="text" />

                            <button style={{ marginTop: "20px" }} onClick={() => {
                                if (input === "" || data.length == 0) { setError(true) }
                                else { setError(false) }

                                if (input.length > 0) {
                                    setButton(false)
                                }
                                setButton(true)
                            }
                            } type="button" className="btn btn-primary">Pesquisar</button>

                        </form>
                    </div>
                </div>
                {error ? <div className="alert alert-danger" role="alert" style={{ marginTop: "30px" }}>
                    campo em branco ou elemento não encontrado
                </div> : null}

                {button && !error ? <Search data={data} setButton={setButton}></Search> : null}

            </div>
        </>

    )

}

export default Form