import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import { Context } from "../Context";
import Card from "./Card";

function RobotsContainer(){

    const {
        robots, 
        setRobots,
        query, 
      } = useContext(Context);

      const url = 'https://jsonplaceholder.typicode.com/users';
      
      useEffect( async function fatchData() {
        const result = await axios(url);
        await setRobots(result.data);
    }, [])


    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(query.toLowerCase());
      })

    
    return (
        <div className="robots-container"> 
               { 
                filteredRobots.map((robot) => {
                    return (
                        <Card
                        key={robot.id}
                        id={robot.id}
                        name={robot.name}
                        email={robot.email}
                        />
                    );
                })
                }
        </div>
    )
}

export default RobotsContainer;