import React from "react";
import Table from "react-bootstrap/Table";

const TownHallTable = ({ amount_per_hall_town }) => {
  return (
    <>
      <Table bordered responsive className="mt-2">
        <thead>
          <tr>
            <th>
              <p>Ayuntamiento</p>
            </th>
            <th>
              <span className="townhall townhall1"></span>
            </th>
            <th>
              <span className="townhall townhall2"></span>
            </th>
            <th>
              <span className="townhall townhall3"></span>
            </th>
            <th>
              <span className="townhall townhall4"></span>
            </th>
            <th>
              <span className="townhall townhall5"></span>
            </th>
            <th>
              <span className="townhall townhall6"></span>
            </th>
            <th>
              <span className="townhall townhall7"></span>
            </th>
            <th>
              <span className="townhall townhall8"></span>
            </th>
            <th>
              <span className="townhall townhall9"></span>
            </th>
            <th>
              <span className="townhall townhall10"></span>
            </th>
            <th>
              <span className="townhall townhall11"></span>
            </th>
            <th>
              <span className="townhall townhall12"></span>
            </th>
            <th>
              <span className="townhall townhall13"></span>
            </th>
            <th>
              <span className="townhall townhall14"></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Disponible</p>
            </td>
            {amount_per_hall_town.map((town_hall_level) => {
              if (town_hall_level.amount !== 0) {
                return (
                  <td key={town_hall_level.id}>{town_hall_level.amount}</td>
                );
              } else {
                return <td key={town_hall_level.id}>-</td>;
              }
            })}
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TownHallTable;
