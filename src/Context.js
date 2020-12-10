import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [query, setQuery] = useState("");
    const [robots, setRobots] = useState([]); 
    const [robotInfo, setRobotInfo] = useState([]);

    
  return (
    <Context.Provider
      value={{
        robots, 
        setRobots,
        query, 
        setQuery,
        robotInfo,
        setRobotInfo
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
