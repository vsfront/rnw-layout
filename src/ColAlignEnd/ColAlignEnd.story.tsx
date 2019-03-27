import React from "react";
import { storiesOf } from "@storybook/react";
import { ColAlignEnd } from "./ColAlignEnd";
import { Box1, Box2, Box3 } from "../index";

storiesOf("Layout", module).add("ColAlignEnd", () => (
  <ColAlignEnd>
    <Box1 />
    <Box2 />
    <Box3 />
  </ColAlignEnd>
));
