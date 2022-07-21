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
      <Row className="mt-5 pt-5 align-items-end justify-content-around">
        <Col xl={5} md={7}>
          <SearchBar />
        </Col>
        <Col xl={2} md={2}>
          <Select />
        </Col>
      </Row>

      <List />
    </Container>
  );
};

export default Content;
