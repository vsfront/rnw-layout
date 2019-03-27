import React from "react";
import { storiesOf } from "@storybook/react";
import { Col } from "./Col";
import { Box1, Box2, Box3 } from "../index";

storiesOf("Layout", module).add("Col", () => (
  <Col>
    <Box1 />
    <Box2 />
    <Box3 />
  </Col>
));

storiesOf("Layout", module).add("ColAlignStart", () => (
  <Col>
    <Box1 />
    <Box2 />
    <Box3 />
  </Col>
));
