import styled from "styled-components";
import { View } from "react-native";

interface Props {
  /** Optional height of ColBetweenCenter component */
  height?: number;
}

/** Center layout component description */
export const ColBetweenEnd: React.SFC<Props> = styled(View)<Props>`
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  ${props => (props.height ? `height: ${props.height}px;` : "")}
`;
