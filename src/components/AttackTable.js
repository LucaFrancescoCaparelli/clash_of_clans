import React from "react";
import Table from "react-bootstrap/Table";

const AttackTable = ({
  size,
  distance,
  attack_speed,
  damage_type,
  unit_type,
}) => {
  return (
    <Table bordered responsive className="mt-2">
      <thead>
        <tr>
          {size ? <th>Tamaño</th> : null}
          <th>Distancia</th>
          <th>Velocidad de ataque</th>
          <th>Tipo de daño</th>
          <th>Tipo de unidad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {size ? <td>{size}</td> : null}
          <td>{distance}</td>
          <td>{attack_speed}</td>
          <td>{damage_type}</td>
          <td>{unit_type}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default AttackTable;
