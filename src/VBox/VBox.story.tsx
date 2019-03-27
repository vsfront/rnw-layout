import React from "react";
import { storiesOf } from "@storybook/react";
import { VBox } from "./VBox";
import { Box1, Box2 } from "../index";
import { View } from "react-native";
import { number } from "@storybook/addon-knobs";

storiesOf("Layout", module).add("VBox", () => (
  <View style={{ flexDirection: "row" }}>
    <Box1 />
    <VBox width={number("width", 16)} />
    <Box2 />
  </View>
));
