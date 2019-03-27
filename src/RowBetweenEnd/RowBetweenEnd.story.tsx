import React from "react";
import { storiesOf } from "@storybook/react";
import { RowBetweenEnd } from "./RowBetweenEnd";
import { Box1, Box2, Box3 } from "../index";

storiesOf("Layout", module).add("RowBetweenEnd", () => (
  <RowBetweenEnd>
    <Box1 />
    <Box2 />
    <Box3 />
  </RowBetweenEnd>
));
