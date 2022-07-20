import Form from "react-bootstrap/Form";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function SelectBasicExample() {
  const { filter, setFilter } = useContext(DataContext);

  return (
    <Form.Select
      aria-label="Filter"
      onChange={(e) => setFilter(e.target.value)}
      value={filter}
    >
      <option value="all">Todos</option>
      <option value="defenses">Defensas</option>
      <option value="heroes">Héroes</option>
    </Form.Select>
  );
}

export default SelectBasicExample;
