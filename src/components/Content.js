import List from "./List";
import { useContext } from "react";
import Select from "./Select";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DataContext from "../context/DataContext";
import SearchBar from "./SearchBar";
const Content = () => {
  const { items } = useContext(DataContext);

  if (items.length <= 0) return <p>CARGANDO</p>;

  return (
    <Container fluid>
      <Row className="mt-5 align-items-end">
        <Col md={8}>
          <SearchBar />
        </Col>
        <Col md={4}>
          <Select />
        </Col>
      </Row>

      <List />
    </Container>
  );
};

export default Content;
