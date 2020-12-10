import React, {useRef, useEffect, useContext} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { Context } from "../Context";

const Card = ({ name, email, id }) => {

    const {robotid} = useParams();
    const {robotInfo, setRobotInfo} = useContext(Context);
    let history = useHistory();
    const card = useRef(null);

    useEffect(() => {
        card.current.addEventListener("click", showRobotData);
    },[])

    const showRobotData = async() => {
        const url = `https://jsonplaceholder.typicode.com/users/${card.current.dataset.id}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setRobotInfo(data);
        } catch(err){
            console.log(err);
        }
        history.push("robot-info/"+card.current.dataset.id);
    }

  return (
    <div className='card tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5' ref={card} data-id={id}>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;