import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import DataContext from "../context/DataContext";
const SearchBar = () => {
  const { term, setTerm } = useContext(DataContext);

  return (
    <>
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="text"
        value={term}
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => setTerm(e.target.value)}
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
    </>
  );
};

export default SearchBar;
