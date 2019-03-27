import React from "react";
import { storiesOf } from "@storybook/react";
import { RowAlignEnd } from "./RowAlignEnd";
import { Box1, Box2, Box3 } from "../index";

storiesOf("Layout", module).add("RowAlignEnd", () => (
  <RowAlignEnd>
    <Box1 />
    <Box2 />
    <Box3 />
  </RowAlignEnd>
));
