import React from "react";
import { storiesOf } from "@storybook/react";
import { RowBetweenStart } from "./RowBetweenStart";
import { Box1, Box2, Box3 } from "../index";

storiesOf("Layout", module).add("RowBetweenStart", () => (
  <RowBetweenStart>
    <Box1 />
    <Box2 />
    <Box3 />
  </RowBetweenStart>
));
