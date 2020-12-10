import React from 'react';
import SearchBox from './SearchBox';
import RobotsContainer from './RobotsContainer';

function Home(){

    return (
        <div className="top-container"> 
            <h1>ROBOFRIENDS</h1>
            <SearchBox/>
            <p className="text-white">Click on a specific robot for more info:</p>
            <RobotsContainer/>
        </div>
    )
}

export default Home;