import React, { useState } from "react";
import ListContext from "./ListContext";

const ListProvider = (props) => {
  const [list, setList] = useState([]);
  const value = { list, setList };

  return (
    <ListContext.Provider value={value}>{props.children}</ListContext.Provider>
  );
};

export default ListProvider;
