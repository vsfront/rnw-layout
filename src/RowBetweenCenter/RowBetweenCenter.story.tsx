import React from "react";
import { storiesOf } from "@storybook/react";
import { RowBetweenCenter } from "./RowBetweenCenter";
import { Box1, Box2, Box3 } from "../index";

storiesOf("Layout", module).add("RowBetweenCenter", () => (
  <RowBetweenCenter>
    <Box1 />
    <Box2 />
    <Box3 />
  </RowBetweenCenter>
));
