import React from "react";
import { NameContainer } from "./components";

export default {
  items: [
    {
      title: true,
      wrapper: {
        element: "img",
        attributes: {
          src: require("./assets/img/brand/logo.png"),
        },
      },
    },
    {
      title: true,
      name: <NameContainer />,
    },
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: {
        img: {
          src: require("./assets/img/menu/house-outline.png"),
        },
      },
    },
    {
      name: "Clientes",
      url: "/dashboard",
      icon: {
        img: {
          src: require("./assets/img/menu/group.png"),
        },
      },
    },
  ],
};
