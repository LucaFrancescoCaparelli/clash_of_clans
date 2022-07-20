/* DEFENSES */

import air_defense from "../images/defenses/air_defense_12.png";
import air_sweeper from "../images/defenses/air_sweeper_7.png";
import archer_tower from "../images/defenses/archer_tower_20.png";
import battle_builder_hut from "../images/defenses/battle_builder_hut_4.png";

import bomber_tower from "../images/defenses/bomber_tower_9.png";
import cannon from "../images/defenses/cannon_20.png";
import eagle_artillery from "../images/defenses/eagle_artillery_5.png";
import giga_inferno from "../images/defenses/giga_inferno_5.png";
import giga_tesla from "../images/defenses/giga_tesla_5.png";
import hidden_tesla from "../images/defenses/hidden_tesla_13.png";
import inferno_tower from "../images/defenses/inferno_tower_8.png";
import mortar from "../images/defenses/mortar_14.png";
import scattershot from "../images/defenses/scattershot_3.png";
import wizard_tower from "../images/defenses/wizard_tower_14.png";
import xbow from "../images/defenses/xbow_9.png";

//import  from "../images/defenses/.png";

/* DEFENSES LEVELS */

/* --- GIGA TESTLA --- */
import giga_tesla_1 from "../images/defenses/levels/giga_tesla/giga_tesla_1.png";
import giga_tesla_2 from "../images/defenses/levels/giga_tesla/giga_tesla_2.png";
import giga_tesla_3 from "../images/defenses/levels/giga_tesla/giga_tesla_3.png";
import giga_tesla_4 from "../images/defenses/levels/giga_tesla/giga_tesla_4.png";
import giga_tesla_5 from "../images/defenses/levels/giga_tesla/giga_tesla_5.png";

/* --- GIGA INFERNO --- */
import giga_inferno_1 from "../images/defenses/levels/giga_inferno/giga_inferno_1.png";
import giga_inferno_2 from "../images/defenses/levels/giga_inferno/giga_inferno_2.png";
import giga_inferno_3 from "../images/defenses/levels/giga_inferno/giga_inferno_3.png";
import giga_inferno_4 from "../images/defenses/levels/giga_inferno/giga_inferno_4.png";
import giga_inferno_5 from "../images/defenses/levels/giga_inferno/giga_inferno_5.png";

/* --- CANNON --- */
import cannon_1 from "../images/defenses/levels/cannon/cannon_1.png";
import cannon_2 from "../images/defenses/levels/cannon/cannon_2.png";
import cannon_3 from "../images/defenses/levels/cannon/cannon_3.png";
import cannon_4 from "../images/defenses/levels/cannon/cannon_4.png";
import cannon_5 from "../images/defenses/levels/cannon/cannon_5.png";
import cannon_6 from "../images/defenses/levels/cannon/cannon_6.png";
import cannon_7 from "../images/defenses/levels/cannon/cannon_7.png";
import cannon_8 from "../images/defenses/levels/cannon/cannon_8.png";
import cannon_9 from "../images/defenses/levels/cannon/cannon_9.png";
import cannon_10 from "../images/defenses/levels/cannon/cannon_10.png";
import cannon_11 from "../images/defenses/levels/cannon/cannon_11.png";
import cannon_12 from "../images/defenses/levels/cannon/cannon_12.png";
import cannon_13 from "../images/defenses/levels/cannon/cannon_13.png";
import cannon_14 from "../images/defenses/levels/cannon/cannon_14.png";
import cannon_15 from "../images/defenses/levels/cannon/cannon_15.png";
import cannon_16 from "../images/defenses/levels/cannon/cannon_16.png";
import cannon_17 from "../images/defenses/levels/cannon/cannon_17.png";
import cannon_18 from "../images/defenses/levels/cannon/cannon_18.png";
import cannon_19 from "../images/defenses/levels/cannon/cannon_19.png";
import cannon_20 from "../images/defenses/levels/cannon/cannon_20.png";

/* --- ARCHER TOWER --- */
import archer_tower_1 from "../images/defenses/levels/archer_tower/archer_tower_1.png";
import archer_tower_2 from "../images/defenses/levels/archer_tower/archer_tower_2.png";
import archer_tower_3 from "../images/defenses/levels/archer_tower/archer_tower_3.png";
import archer_tower_4 from "../images/defenses/levels/archer_tower/archer_tower_4.png";
import archer_tower_5 from "../images/defenses/levels/archer_tower/archer_tower_5.png";
import archer_tower_6 from "../images/defenses/levels/archer_tower/archer_tower_6.png";
import archer_tower_7 from "../images/defenses/levels/archer_tower/archer_tower_7.png";
import archer_tower_8 from "../images/defenses/levels/archer_tower/archer_tower_8.png";
import archer_tower_9 from "../images/defenses/levels/archer_tower/archer_tower_9.png";
import archer_tower_10 from "../images/defenses/levels/archer_tower/archer_tower_10.png";
import archer_tower_11 from "../images/defenses/levels/archer_tower/archer_tower_11.png";
import archer_tower_12 from "../images/defenses/levels/archer_tower/archer_tower_12.png";
import archer_tower_13 from "../images/defenses/levels/archer_tower/archer_tower_13.png";
import archer_tower_14 from "../images/defenses/levels/archer_tower/archer_tower_14.png";
import archer_tower_15 from "../images/defenses/levels/archer_tower/archer_tower_15.png";
import archer_tower_16 from "../images/defenses/levels/archer_tower/archer_tower_16.png";
import archer_tower_17 from "../images/defenses/levels/archer_tower/archer_tower_17.png";
import archer_tower_18 from "../images/defenses/levels/archer_tower/archer_tower_18.png";
import archer_tower_19 from "../images/defenses/levels/archer_tower/archer_tower_19.png";
import archer_tower_20 from "../images/defenses/levels/archer_tower/archer_tower_20.png";

/* HEROES */

import barbarian_king from "../images/heroes/barbarian_king_80.png";
import archer_queen from "../images/heroes/archer_queen_80.png";
import grand_warden from "../images/heroes/grand_warden_55.png";
import royal_champion from "../images/heroes/royal_champion_30.png";

export const initialState = [
  {
    id: 1,
    name: "Giga Tesla",
    description:
      "¿En qué se diferencia esta torre Tesla de una normal? En que sus potentes descargas infligen grandes daños incluso a las unidades más robustas.",
    image: giga_tesla,
    category: "defenses",

    levels: [
      {
        id: 1,
        level: 1,
        damage_per_second: 150,
        shot_damage: "75",
        price: 0,
        number_of_targets: 2,
        construction_time: "0 segundos",
        town_hall_required_level: 12,
      },
      {
        id: 2,
        level: 2,
        damage_per_second: 175,
        shot_damage: "87.5",
        price: "4,000,000",
        number_of_targets: 2,
        construction_time: "4 días",
        town_hall_required_level: 12,
      },
      {
        id: 3,
        level: 3,
        damage_per_second: 175,
        shot_damage: "87.5",
        price: "6,000,000",
        number_of_targets: 3,
        construction_time: "7 días",
        town_hall_required_level: 12,
      },
      {
        id: 4,
        level: 4,
        damage_per_second: 200,
        shot_damage: "100",
        price: "8,000,000",
        number_of_targets: 3,
        construction_time: "12 días",
        town_hall_required_level: 12,
      },
      {
        id: 5,
        level: 5,
        damage_per_second: 200,
        shot_damage: "100",
        price: "10,000,000",
        number_of_targets: 4,
        construction_time: "14 días y 12 horas",
        town_hall_required_level: 12,
      },
    ],
    distance: 10,
    attack_speed: "0.5s",
    damage_type: "Objetivos múltiples",
    unit_type: "Tierra y Aire",
    town_hall_level: 12,
    amount_per_hall_town: [
      {
        id: 1,
        amount: 0,
      },
      {
        id: 2,
        amount: 0,
      },
      {
        id: 3,
        amount: 0,
      },
      {
        id: 4,
        amount: 0,
      },
      {
        id: 5,
        amount: 0,
      },
      {
        id: 6,
        amount: 0,
      },
      {
        id: 7,
        amount: 0,
      },
      {
        id: 8,
        amount: 0,
      },
      {
        id: 9,
        amount: 0,
      },
      {
        id: 10,
        amount: 0,
      },
      {
        id: 11,
        amount: 0,
      },
      {
        id: 12,
        amount: 1,
      },
      {
        id: 13,
        amount: 0,
      },
      {
        id: 14,
        amount: 0,
      },
    ],
    images: [
      giga_tesla_1,
      giga_tesla_2,
      giga_tesla_3,
      giga_tesla_4,
      giga_tesla_5,
    ],
  },

  {
    id: 2,
    name: "Giga torre infernal",
    description:
      "Los rivales que intenten acercarse a la giga torre infernal quedarán chamuscados. Al ser destruida, el ayuntamiento estallará en una explosión de hielo que ralentizará todo a su alrededor durante algunos momentos.",
    image: giga_inferno,
    category: "defenses",

    levels: [
      {
        id: 1,
        level: 1,
        damage_per_second: 300,
        shot_damage: "150",
        price: "0",
        number_of_targets: 4,
        construction_time: "0 segundos",
        town_hall_required_level: 14,
      },
      {
        id: 2,
        level: 2,
        damage_per_second: 300,
        shot_damage: "150",
        price: "10,000,000",
        number_of_targets: 4,
        construction_time: "6 días",
        town_hall_required_level: 14,
      },
      {
        id: 3,
        level: 3,
        damage_per_second: 300,
        shot_damage: "150",
        price: "12,000,000",
        number_of_targets: 4,
        construction_time: "8 días",
        town_hall_required_level: 14,
      },
      {
        id: 4,
        level: 4,
        damage_per_second: 300,
        shot_damage: "150",
        price: "15,000,000",
        number_of_targets: 4,
        construction_time: "9 días",
        town_hall_required_level: 14,
      },
      {
        id: 5,
        level: 5,
        damage_per_second: 300,
        shot_damage: "150",
        price: "18,000,000",
        number_of_targets: 4,
        construction_time: "11 días",
        town_hall_required_level: 14,
      },
    ],
    distance: 10,
    attack_speed: "0.5s",
    damage_type: "Objetivos múltiples",
    unit_type: "Tierra y Aire",
    town_hall_level: 14,
    amount_per_hall_town: [
      {
        id: 1,
        amount: 0,
      },
      {
        id: 2,
        amount: 0,
      },
      {
        id: 3,
        amount: 0,
      },
      {
        id: 4,
        amount: 0,
      },
      {
        id: 5,
        amount: 0,
      },
      {
        id: 6,
        amount: 0,
      },
      {
        id: 7,
        amount: 0,
      },
      {
        id: 8,
        amount: 0,
      },
      {
        id: 9,
        amount: 0,
      },
      {
        id: 10,
        amount: 0,
      },
      {
        id: 11,
        amount: 0,
      },
      {
        id: 12,
        amount: 0,
      },
      {
        id: 13,
        amount: 1,
      },
      {
        id: 14,
        amount: 1,
      },
    ],
    images: [
      giga_inferno_1,
      giga_inferno_2,
      giga_inferno_3,
      giga_inferno_4,
      giga_inferno_5,
    ],
  },
  {
    id: 3,
    name: "Cañon",
    description:
      "Los cañones son ideales para defender cualquier zona de la aldea. Mejóralos para aumentar su potencia. Eso sí, ten en cuenta que permanecerán inactivos mientras se están mejorando.",
    image: cannon,
    category: "defenses",
    levels: [
      {
        id: 1,
        level: 1,
        damage_per_second: 9,
        shot_damage: "7.2",
        price: "250",
        construction_time: "10 segundos",
        damage_points: "420",

        town_hall_required_level: 1,
      },
      {
        id: 2,
        level: 2,
        damage_per_second: 11,
        shot_damage: "8.8",
        price: "1.000",
        construction_time: "15 minutos",
        damage_points: "470",

        town_hall_required_level: 1,
      },
      {
        id: 3,
        level: 3,
        damage_per_second: 15,
        shot_damage: "12",
        price: "4.000",
        construction_time: "45 minutos",
        damage_points: "520",

        town_hall_required_level: 2,
      },
      {
        id: 4,
        level: 4,
        damage_per_second: 19,
        shot_damage: "15.2",
        price: "16.000",
        construction_time: "1 hora",
        damage_points: "570",

        town_hall_required_level: 3,
      },
      {
        id: 5,
        level: 5,
        damage_per_second: 25,
        shot_damage: "20",
        price: "50.000",
        construction_time: "4 horas",
        damage_points: "620",

        town_hall_required_level: 4,
      },

      {
        id: 6,
        level: 6,
        damage_per_second: 31,
        shot_damage: "24.8",
        price: "100.000",
        construction_time: "8 horas",
        damage_points: "670",

        town_hall_required_level: 5,
      },

      {
        id: 7,
        level: 7,
        damage_per_second: 40,
        shot_damage: "32",
        price: "200.000",
        construction_time: "8 horas",
        damage_points: "730",

        town_hall_required_level: 6,
      },
      {
        id: 8,
        level: 8,
        damage_per_second: 48,
        shot_damage: "38.4",
        price: "300.000",
        construction_time: "12 horas",
        damage_points: "800",

        town_hall_required_level: 7,
      },
      {
        id: 9,
        level: 9,
        damage_per_second: 56,
        shot_damage: "44.8",
        price: "500.000",
        construction_time: "12 horas",
        damage_points: "880",

        town_hall_required_level: 8,
      },

      {
        id: 10,
        level: 10,
        damage_per_second: 64,
        shot_damage: "51.2",
        price: "700.000",
        construction_time: "1 día",
        damage_points: "960",

        town_hall_required_level: 8,
      },
      {
        id: 11,
        level: 11,
        damage_per_second: 74,
        shot_damage: "59.2",
        price: "1.000.000",
        construction_time: "1 día y 12 horas",
        damage_points: "1.060",
        town_hall_required_level: 9,
      },
      {
        id: 12,
        level: 12,
        damage_per_second: 87,
        shot_damage: "69.6",
        price: "1.500.000",
        construction_time: "2 días",
        damage_points: "1.160",
        town_hall_required_level: 10,
      },
      {
        id: 13,
        level: 13,
        damage_per_second: 100,
        shot_damage: "80",
        price: "2.000.000",
        construction_time: "3 días",
        damage_points: "1.260",
        town_hall_required_level: 10,
      },
      {
        id: 14,
        level: 14,
        damage_per_second: 110,
        shot_damage: "88",
        price: "3.000.000",
        construction_time: "5 días",
        damage_points: "1.380",
        town_hall_required_level: 11,
      },
      {
        id: 15,
        level: 15,
        damage_per_second: 118,
        shot_damage: "94.4",
        price: "4.500.000",
        construction_time: "6 días",
        damage_points: "1.500",
        town_hall_required_level: 11,
      },
      {
        id: 16,
        level: 16,
        damage_per_second: 124,
        shot_damage: "99.2",
        price: "7.000.000",
        construction_time: "9 días",
        damage_points: "1.620",
        town_hall_required_level: 12,
      },
      {
        id: 17,
        level: 17,
        damage_per_second: 130,
        shot_damage: "104",
        price: "9.000.000",
        construction_time: "12 días",
        damage_points: "1.740",
        town_hall_required_level: 12,
      },
      {
        id: 18,
        level: 18,
        damage_per_second: 139,
        shot_damage: "111.2",
        price: "11.000.000",
        construction_time: "15 días",
        damage_points: "1.870",
        town_hall_required_level: 13,
      },
      {
        id: 19,
        level: 19,
        damage_per_second: 146,
        shot_damage: "116.8",
        price: "13.000.000",
        construction_time: "16 días",
        damage_points: "2.000",
        town_hall_required_level: 13,
      },
      {
        id: 20,
        level: 20,
        damage_per_second: 154,
        shot_damage: "123.2",
        price: "17.500.000",
        construction_time: "17 días",
        damage_points: "2.150",
        town_hall_required_level: 14,
      },
    ],
    size: "3x3",
    distance: 9,
    attack_speed: "0.8s",
    damage_type: "Único objetivo",
    unit_type: "Tierra",
    amount_per_hall_town: [
      {
        id: 1,
        amount: 2,
      },
      {
        id: 2,
        amount: 2,
      },
      {
        id: 3,
        amount: 2,
      },
      {
        id: 4,
        amount: 2,
      },
      {
        id: 5,
        amount: 3,
      },
      {
        id: 6,
        amount: 3,
      },
      {
        id: 7,
        amount: 5,
      },
      {
        id: 8,
        amount: 5,
      },
      {
        id: 9,
        amount: 5,
      },
      {
        id: 10,
        amount: 6,
      },
      {
        id: 11,
        amount: 7,
      },
      {
        id: 12,
        amount: 7,
      },
      {
        id: 13,
        amount: 7,
      },
      {
        id: 14,
        amount: 7,
      },
    ],
    images: [
      cannon_1,
      cannon_2,
      cannon_3,
      cannon_4,
      cannon_5,
      cannon_6,
      cannon_7,
      cannon_8,
      cannon_9,
      cannon_10,
      cannon_11,
      cannon_12,
      cannon_13,
      cannon_14,
      cannon_15,
      cannon_16,
      cannon_17,
      cannon_18,
      cannon_19,
      cannon_20,
    ],
  },
  {
    id: 4,
    name: "Torre de arqueras",
    description:
      "Las torres de arqueras tienen mayor alcance que los cañones, y a diferencia de los cañones que pueden atacar a las unidades aéreas.",
    image: archer_tower,
    category: "defenses",
    levels: [
      {
        id: 1,
        level: 1,
        damage_per_second: 11,
        shot_damage: "5.5",
        price: "1000",
        construction_time: "1 minuto",
        damage_points: "380",

        town_hall_required_level: 2,
      },
      {
        id: 2,
        level: 2,
        damage_per_second: 15,
        shot_damage: "7.5",
        price: "2.000",
        construction_time: "30 minutos",
        damage_points: "420",

        town_hall_required_level: 2,
      },
      {
        id: 3,
        level: 3,
        damage_per_second: 19,
        shot_damage: "9.5",
        price: "5.000",
        construction_time: "45 minutos",
        damage_points: "460",

        town_hall_required_level: 3,
      },
      {
        id: 4,
        level: 4,
        damage_per_second: 25,
        shot_damage: "12.5",
        price: "20.000",
        construction_time: "3 horas",
        damage_points: "500",

        town_hall_required_level: 4,
      },
      {
        id: 5,
        level: 5,
        damage_per_second: 30,
        shot_damage: "15",
        price: "80.000",
        construction_time: "8 horas",
        damage_points: "540",

        town_hall_required_level: 5,
      },

      {
        id: 6,
        level: 6,
        damage_per_second: 35,
        shot_damage: "17.5",
        price: "180.000",
        construction_time: "8 horas",
        damage_points: "580",

        town_hall_required_level: 5,
      },

      {
        id: 7,
        level: 7,
        damage_per_second: 42,
        shot_damage: "21",
        price: "360.000",
        construction_time: "12 horas",
        damage_points: "630",

        town_hall_required_level: 6,
      },
      {
        id: 8,
        level: 8,
        damage_per_second: 48,
        shot_damage: "23",
        price: "600.000",
        construction_time: "12 horas",
        damage_points: "690",

        town_hall_required_level: 7,
      },
      {
        id: 9,
        level: 9,
        damage_per_second: 56,
        shot_damage: "28",
        price: "800.000",
        construction_time: "16 horas",
        damage_points: "750",

        town_hall_required_level: 8,
      },

      {
        id: 10,
        level: 10,
        damage_per_second: 63,
        shot_damage: "31.5",
        price: "1.000.000",
        construction_time: "1 día",
        damage_points: "810",

        town_hall_required_level: 8,
      },
      {
        id: 11,
        level: 11,
        damage_per_second: 70,
        shot_damage: "35",
        price: "1.200.000",
        construction_time: "1 día y 12 horas",
        damage_points: "890",
        town_hall_required_level: 9,
      },
      {
        id: 12,
        level: 12,
        damage_per_second: 75,
        shot_damage: "37.5",
        price: "1.800.000",
        construction_time: "2 días",
        damage_points: "970",
        town_hall_required_level: 10,
      },
      {
        id: 13,
        level: 13,
        damage_per_second: 80,
        shot_damage: "40",
        price: "2.400.000",
        construction_time: "3 días",
        damage_points: "1.050",
        town_hall_required_level: 10,
      },
      {
        id: 14,
        level: 14,
        damage_per_second: 92,
        shot_damage: "46",
        price: "3.600.000",
        construction_time: "6 días",
        damage_points: "1.130",
        town_hall_required_level: 11,
      },
      {
        id: 15,
        level: 15,
        damage_per_second: 104,
        shot_damage: "52",
        price: "5.000.000",
        construction_time: "8 días",
        damage_points: "1.230",
        town_hall_required_level: 11,
      },
      {
        id: 16,
        level: 16,
        damage_per_second: 116,
        shot_damage: "58",
        price: "7.500.000",
        construction_time: "10 días",
        damage_points: "1.330",
        town_hall_required_level: 12,
      },
      {
        id: 17,
        level: 17,
        damage_per_second: 122,
        shot_damage: "61",
        price: "9.500.000",
        construction_time: "12 días",
        damage_points: "1.430",
        town_hall_required_level: 12,
      },
      {
        id: 18,
        level: 18,
        damage_per_second: 128,
        shot_damage: "64",
        price: "11.500.000",
        construction_time: "15 días",
        damage_points: "1.510",
        town_hall_required_level: 13,
      },
      {
        id: 19,
        level: 19,
        damage_per_second: 134,
        shot_damage: "67",
        price: "13.000.000",
        construction_time: "16 días",
        damage_points: "1.600",
        town_hall_required_level: 13,
      },
      {
        id: 20,
        level: 20,
        damage_per_second: 140,
        shot_damage: "70",
        price: "17.500.000",
        construction_time: "16 días",
        damage_points: "1600",
        town_hall_required_level: 14,
      },
    ],
    size: "3x3",
    distance: 10,
    attack_speed: "0.5s",
    damage_type: "Único objetivo",
    unit_type: "Tierra y Aire",
    amount_per_hall_town: [
      {
        id: 1,
        amount: 0,
      },
      {
        id: 2,
        amount: 1,
      },
      {
        id: 3,
        amount: 1,
      },
      {
        id: 4,
        amount: 2,
      },
      {
        id: 5,
        amount: 3,
      },
      {
        id: 6,
        amount: 3,
      },
      {
        id: 7,
        amount: 4,
      },
      {
        id: 8,
        amount: 5,
      },
      {
        id: 9,
        amount: 6,
      },
      {
        id: 10,
        amount: 7,
      },
      {
        id: 11,
        amount: 8,
      },
      {
        id: 12,
        amount: 8,
      },
      {
        id: 13,
        amount: 8,
      },
      {
        id: 14,
        amount: 8,
      },
    ],
    images: [
      archer_tower_1,
      archer_tower_2,
      archer_tower_3,
      archer_tower_4,
      archer_tower_5,
      archer_tower_6,
      archer_tower_7,
      archer_tower_8,
      archer_tower_9,
      archer_tower_10,
      archer_tower_11,
      archer_tower_12,
      archer_tower_13,
      archer_tower_14,
      archer_tower_15,
      archer_tower_16,
      archer_tower_17,
      archer_tower_18,
      archer_tower_19,
      archer_tower_20,
    ],
  },
  {
    id: 5,
    category: "defenses",
    name: "Mortero",
    image: mortar,
  },
  {
    id: 6,
    category: "defenses",
    name: "Cohete de defensa",
    image: air_defense,
  },
  {
    id: 7,
    category: "defenses",
    name: "Torre de mago",
    image: wizard_tower,
  },
  {
    id: 8,
    category: "defenses",
    name: "Torre bombardera",
    image: bomber_tower,
  },
  {
    id: 9,
    category: "defenses",
    name: "Conrolador aéreo",
    image: air_sweeper,
  },
  {
    id: 10,
    category: "defenses",
    name: "Tesla oculto",
    image: hidden_tesla,
  },
  {
    id: 11,
    category: "defenses",
    name: "Ballesta",
    image: xbow,
  },
  {
    id: 12,
    category: "defenses",
    name: "Torre infernal",
    image: inferno_tower,
  },
  {
    id: 13,
    category: "defenses",
    name: "Aguila de artillería",
    image: eagle_artillery,
  },
  {
    id: 14,
    category: "defenses",
    name: "Cabaña del constructor de batallas",
    image: battle_builder_hut,
  },
  {
    id: 15,
    category: "defenses",
    name: "Catapulta",
    image: scattershot,
  },

  {
    id: 16,
    category: "heroes",
    name: "Rey bárbaro",
    image: barbarian_king,
  },
  {
    id: 17,
    category: "heroes",
    name: "Reina arquera",
    image: archer_queen,
  },
  {
    id: 18,
    category: "heroes",
    name: "Gran centinela",
    image: grand_warden,
  },
  {
    id: 19,
    category: "heroes",
    name: "Luchadora real",
    image: royal_champion,
  },
];
