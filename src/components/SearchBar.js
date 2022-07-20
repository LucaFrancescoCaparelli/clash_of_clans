import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import DataContext from "../context/DataContext";
const SearchBar = () => {
  const { term, setTerm } = useContext(DataContext);

  return (
    <>
      <Form.Label htmlFor="inputFilterItems" style={{ width: "50%" }}>
        Busca tu defensa o héroe favorito
      </Form.Label>
      <Form.Control
        type="text"
        value={term}
        placeholder="Buscar..."
        id="inputFilterItems"
        aria-describedby="inputFilterItems"
        onChange={(e) => setTerm(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
