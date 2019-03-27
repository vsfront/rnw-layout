import styled from "styled-components";
import { View } from "react-native";

type Props = {
  width?: number;
  height?: number;
};

export const SizedBox = styled(View)<Props>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

SizedBox.defaultProps = {
  width: 16,
  height: 16
};
