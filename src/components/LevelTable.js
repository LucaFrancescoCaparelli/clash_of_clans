import React from "react";
import Table from "react-bootstrap/Table";
import gold_coin from "../images/others/gold_icon.png";
const LevelTable = ({ levels, town_hall_level }) => {
  console.log(levels);

  return (
    <Table striped bordered responsive className="mt-4">
      <thead>
        <tr>
          <th>Nivel</th>
          <th>Daño por segundo</th>
          <th>Daño por disparo</th>
          <th
            style={{
              display: "flex",
              paddingTop: "21%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Coste
            <img style={{ paddingLeft: "5%" }} src={gold_coin} />
          </th>
          {town_hall_level ? (
            <th>Cantidad de objetivos</th>
          ) : (
            <th>Puntos de daño</th>
          )}
          <th>Tiempo de construcción</th>
          <th>Ayuntamiento Nivel requerido</th>
        </tr>
      </thead>
      <tbody>
        {levels.map((level) => (
          <tr key={level.level}>
            <td>{level.level}</td>

            <td>{level.damage_per_second}</td>
            <td>{level.shot_damage}</td>
            <td>{level.price}</td>
            {level.number_of_targets ? (
              <td>{level.number_of_targets}</td>
            ) : (
              <td>{level.damage_points}</td>
            )}

            <td>{level.construction_time}</td>

            <td>
              <span
                className={`${`townhall townhall${level.town_hall_required_level}`}`}
              ></span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LevelTable;
