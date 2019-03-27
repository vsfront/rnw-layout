import React from "react";
import { storiesOf } from "@storybook/react";
import { Flex1 } from "./Flex1";
import { Box1, Box2, Box3 } from "../index";
import { View } from "react-native";

storiesOf("Layout", module).add("Flex1", () => (
  <View style={{ height: 500 }}>
    <Flex1 style={{ backgroundColor: "lightblue" }}>
      <Box1 />
      <Box2 />
      <Box3 />
    </Flex1>
  </View>
));
