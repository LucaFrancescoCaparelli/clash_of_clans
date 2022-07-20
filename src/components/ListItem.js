import { useContext } from "react";

import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ListItem = ({ item }) => {
  const { saveItemSelected } = useContext(DataContext);
  console.log({ ITEEEEM: item });
  return (
    <Card style={{ width: "18rem", height: "28rem" }}>
      <Card.Img className="mt-5" variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description
            ? item.description.length >= 8
              ? `${item.description.slice(0, -20)}...`
              : null
            : null}
        </Card.Text>

        <Link onClick={() => saveItemSelected(item)} to={`details/${item.id}`}>
          <Button variant="primary">Mas detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ListItem;
