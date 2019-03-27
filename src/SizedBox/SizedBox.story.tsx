import React from "react";
import { storiesOf } from "@storybook/react";
import { SizedBox } from "./SizedBox";
import { Box1, Box2, Box3 } from "../index";
import { View } from "react-native";
import { number } from "@storybook/addon-knobs";

storiesOf("Layout", module).add("SizedBox", () => (
  <>
    <View style={{ flexDirection: "row" }}>
      <Box1 />
      <SizedBox width={number("width", 16)} height={number("height", 16)} />
      <Box2 />
    </View>
    <Box3 />
  </>
));
