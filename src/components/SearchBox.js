import React, {useContext} from 'react';
import { Context } from "../Context";

function SearchBox() {

    const {
        query, 
        setQuery
      } = useContext(Context);


    return (
        <div className='search-box pa2'>
            <input type="search" className='pa3 ba b--green bg-lightest-blue' placeholder="search for robots" val={query} onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
        </div>
    )
}   

export default SearchBox;