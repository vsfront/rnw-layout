import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { ColBetweenCenter } from "./ColBetweenCenter";
import { Box1, Box2, Box3 } from "../index";

storiesOf("Layout", module).add("ColBetweenCenter", () => (
  <ColBetweenCenter height={number("height", 300)}>
    <Box1 />
    <Box2 />
    <Box3 />
  </ColBetweenCenter>
));
