import styled from "styled-components";
import { View } from "react-native";

type Props = {
  height?: number;
};

export const HBox = styled(View)<Props>`
  height: ${props => props.height}px;
`;

HBox.defaultProps = {
  height: 16
};
