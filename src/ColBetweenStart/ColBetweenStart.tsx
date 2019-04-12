import styled from "styled-components/native";
import { View } from "react-native";

interface Props {
  /** Optional height of ColBetweenCenter component */
  height?: number;
}

/** Center layout component description */
export const ColBetweenStart: React.SFC<Props> = styled(View)<Props>`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  ${props => (props.height ? `height: ${props.height}px;` : "")}
`;
