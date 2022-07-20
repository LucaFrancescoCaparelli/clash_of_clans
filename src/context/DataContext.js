import { createContext, useState, useEffect } from "react";
import { initialState } from "../state/Data";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);

  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const saveItemSelected = (item) => {
    setItemSelected(item);
  };

  useEffect(() => {
    if (filter !== "all") {
      const filt = initialState.filter((items) => items.category === filter);
      setItems(filt);
      return;
    }

    setItems(initialState);
  }, [filter]);

  useEffect(() => {
    const filteredResults = items.filter((item) => {
      return (
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.category.toLowerCase().includes(term.toLowerCase())
        // item.description.toLowerCase().includes(term.toLowerCase())
      );
    });
    setSearchResults(filteredResults);
  }, [term]);

  return (
    <DataContext.Provider
      value={{
        filter,
        setFilter,
        items,
        setItems,
        term,
        setTerm,
        saveItemSelected,
        itemSelected,
        setItemSelected,
        searchResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
