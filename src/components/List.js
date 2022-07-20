import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import ListItem from "./ListItem";
import Container from "react-bootstrap/Container";

const List = () => {
  const { items, searchResults } = useContext(DataContext);

  return (
    <Container
      fluid
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      {searchResults.length
        ? searchResults.map((individualItem) => (
            <div key={individualItem.id}>
              <ListItem key={individualItem.id} item={individualItem} />
            </div>
          ))
        : items.map((individualItem) => (
            <div key={individualItem.id}>
              <ListItem key={individualItem.id} item={individualItem} />
            </div>
          ))}
    </Container>
  );
};

export default List;
