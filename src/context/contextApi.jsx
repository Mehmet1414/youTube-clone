import { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
    const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    fetchCategotry(selectedCategory);
  }, [selectedCategory]);

  const fetchCategotry = (param) => {
    fetchDataFromApi(`search/?q=${param}`).then(({contents}) => {
      setSearchResult(contents)
    });
  };
  console.log(searchResult)

  return (
    <Context.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </Context.Provider>
  );
};
