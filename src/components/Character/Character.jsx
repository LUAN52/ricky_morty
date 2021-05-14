import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../api'
import "./Char.css"

const Character = () => {

    const [character, setCharacter] = useState({})
    const [episode, setEpisode] = useState("")
    const {id} = useParams()
    const [name,setName] = useState("")

    useEffect(() => {

        const getCharacter = async () => {
            let { data } = await api.get(`/character/${id}`);
            setName(data.name)
            let epidodios = []
            if (data.episode.length > 1) {

                for (let index = 0; index < data.episode.length; index++) {

                    let tamEpisode = data.episode[index].length;
                    let episode = data.episode[index].substr(tamEpisode-2);
                    episode = episode.replace("/","")+";"
                    epidodios.push(episode);

                }
                setEpisode(epidodios);

            }
            else {

                let tamEpisode = data.episode[0].length;

                let episode = data.episode[0].substr(tamEpisode - 2);
                episode= episode.replace("/"," ");


                setEpisode(`apenas no ${episode}`);

            }
            setCharacter(data);

        }

        getCharacter();
    },[id])

    return (<>
        <div  className="outContainner hPage">
            <h1 className="title">{name}</h1>
            <div className="container  intContainer cont" >
                <div className=" char" >
                    <img src={character.image} className="card-img-top" alt="..." />
                    <div className=" card-body card">
                        <div className="infoCard">
                            <h5 className="description">Nome :</h5>
                            <h6>{character.name}</h6>
                        </div>
                        <div className="infoCard">
                            <h5 className="description">Status :</h5>
                            <h6 >{character.status}</h6>
                        </div>

                        <div className=" infoCard">
                            <h5 className="description ">Episódios:  </h5>
                            <h6  className="epi">{episode}</h6>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </>)
}


export default Character;
