import styled from "styled-components/native";
import { View } from "react-native";

type Props = {
  width?: number;
};

export const VBox = styled(View)<Props>`
  width: ${props => props.width}px;
`;

VBox.defaultProps = {
  width: 16
};
