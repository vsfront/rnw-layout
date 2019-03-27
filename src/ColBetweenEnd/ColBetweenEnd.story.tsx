import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { ColBetweenEnd } from "./ColBetweenEnd";
import { Box1, Box2, Box3 } from "../index";

storiesOf("Layout", module).add("ColBetweenEnd", () => (
  <ColBetweenEnd height={number("height", 300)}>
    <Box1 />
    <Box2 />
    <Box3 />
  </ColBetweenEnd>
));
