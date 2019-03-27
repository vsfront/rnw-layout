import React from "react";
import { storiesOf } from "@storybook/react";
import { ColAlignCenter } from "./ColAlignCenter";
import { Box1, Box2, Box3 } from "../index";

storiesOf("Layout", module).add("ColAlignCenter", () => (
  <ColAlignCenter>
    <Box1 />
    <Box2 />
    <Box3 />
  </ColAlignCenter>
));
