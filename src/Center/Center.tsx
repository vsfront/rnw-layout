import styled from "styled-components/native";
import { View } from "react-native";

type Props = {
  /** Optional height of Center component */
  height?: number;
};

/** Center layout component description */
export const Center: React.SFC<Props> = styled(View)<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${props => (props.height ? `height: ${props.height}px;` : "")}
`;
