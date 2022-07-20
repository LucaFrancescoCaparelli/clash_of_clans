import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import DataContext from "../context/DataContext";

import CarouselImages from "./Carousel";
import Stack from "react-bootstrap/Stack";
import LevelTable from "./LevelTable";
import AttackTable from "./AttackTable";
import TownHallTable from "./TownHallTable";
import { useNavigate } from "react-router-dom";

const PageDetail = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const { items, itemSelected } = useContext(DataContext);
  const allState = useContext(DataContext);

  const selectedItem = items.find((item) => item.id == id);
  console.log(selectedItem);

  useEffect(() => {
    if (typeof selectedItem === undefined || itemSelected === null) {
      console.log(typeof selectedItem === undefined || itemSelected === null);
      setLoading(false);
      navigate("/");
    }
    setLoading(false);
  });

  if (loading) {
    return <p>cargando...</p>;
  }

  return (
    <Container className="mt-5">
      <Stack gap={3}>
        <div>
          <h2>{selectedItem.name}</h2>
        </div>
        <div>
          <img src={selectedItem.image} alt={selectedItem.name} />
        </div>
        <div>
          <p>{selectedItem.description}</p>
        </div>
        <div style={{ zIndex: "-999" }} className="mb-5 mt-5">
          <CarouselImages item={selectedItem} />
        </div>
      </Stack>
      <LevelTable
        levels={selectedItem.levels}
        town_hall_level={selectedItem.town_hall_level}
      />
      <AttackTable
        distance={selectedItem.distance}
        attack_speed={selectedItem.attack_speed}
        damage_type={selectedItem.damage_type}
        unit_type={selectedItem.unit_type}
        size={selectedItem.size}
      />

      <TownHallTable amount_per_hall_town={selectedItem.amount_per_hall_town} />
    </Container>
  );
};

export default PageDetail;
