import React from "react";
import { storiesOf } from "@storybook/react";
import { Row } from "./Row";
import { Box1, Box2, Box3 } from "../index";

storiesOf("Layout", module).add("Row", () => (
  <Row>
    <Box1 />
    <Box2 />
    <Box3 />
  </Row>
));

storiesOf("Layout", module).add("RowAlignStart", () => (
  <Row>
    <Box1 />
    <Box2 />
    <Box3 />
  </Row>
));
