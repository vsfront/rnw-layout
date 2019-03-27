import React from "react";
import { storiesOf } from "@storybook/react";
import { RowAlignCenter } from "./RowAlignCenter";
import { Box1, Box2, Box3 } from "../index";

storiesOf("Layout", module).add("RowAlignCenter", () => (
  <RowAlignCenter>
    <Box1 />
    <Box2 />
    <Box3 />
  </RowAlignCenter>
));
