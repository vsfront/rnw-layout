import React from "react";
import { storiesOf } from "@storybook/react";
import { HBox } from "./HBox";
import { Box1, Box2 } from "../index";
import { View } from "react-native";
import { number } from "@storybook/addon-knobs";

storiesOf("Layout", module).add("HBox", () => (
  <View>
    <Box1 />
    <HBox height={number("height", 16)} />
    <Box2 />
  </View>
));
