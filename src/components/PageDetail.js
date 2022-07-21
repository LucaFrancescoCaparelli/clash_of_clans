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
import Button from "react-bootstrap/Button";
const PageDetail = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const { items, itemSelected } = useContext(DataContext);

  const selectedItem = items.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (selectedItem === undefined || itemSelected === null) {
      setLoading(false);
      navigate("/");
    }
    setLoading(false);
  }, [selectedItem, itemSelected, navigate]);

  if (loading) {
    return <p>cargando...</p>;
  }

  return (
    <Container className="mt-5 pt-5">
      <Stack gap={3}>
        <div className="d-flex" style={{ width: "100%" }}>
          <Button onClick={() => navigate("/")}>Volver</Button>
        </div>
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
          <CarouselImages item={selectedItem} id={id} />
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
